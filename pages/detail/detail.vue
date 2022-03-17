<template>
	<view class="detailContainer">
		<view class="header">
			<icon class="iconfont icon-shouye2"></icon>
			<text>商品详情</text>
			<view class="shopCart">
				<icon class="iconfont icon-gouwuche2"></icon>
				<text class="count">1</text>
			</view>
		</view>

		<!-- 内容区 -->
		<scroll-view class="content" scroll-y="true">
			<image class="detailImg" :src="goodsOne.result_items[0].item_img"></image>
			<view class="tag">{{ goodsOne.result_items[0].pub_nm }}</view>
			<text class="price">￥ {{ goodsOne.result_items[0].price_effect }}</text>
			<view class="info">{{ goodsOne.result_items[0].item_title }}</view>

			<!-- 准备内容 -->
			<view class="list" style="margin-left: 5%;font-size: 28upx;line-height: 50upx;">
				<view>1) 100%桑蚕丝填充，丝丝精粹不掺杂</view>
				<view>2) 创新井字拉网工艺，桑蚕丝不易黏连结块</view>
				<view>3) 两种面料可选，贡缎手感细腻，竹棉清爽透气</view>
				<view>4) AB双面设计，多种活性印花不易褪色</view>
			</view>
		</scroll-view>

		<!-- 底部导航 -->
		<view class="detailFooter">
			<view class="shop">
				<text class="iconfont icon-dianpu"></text>
				<text class="shopText">店铺</text>
			</view>

			<view class="shop">
				<text class="iconfont icon-shoucangxuanzhong"></text>
				<text class="shopText">店铺</text>
			</view>

			<view class="shop">
				<text class="iconfont icon-gouwuchekong"></text>
				<text class="shopText">店铺</text>
			</view>

			<view class="btn buyNow">立即购买</view>
			<view class="btn addShopCart" @click="addShopCart" >加入购物车</view>
		</view>
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			goodsInfo: {},
			goodsOne: {}
		};
	},
	onLoad(options) {
		this.goodsOne = wx.getStorageSync('goods_key');
	},
	methods: {
		addShopCart() {
			let obj = this.goods.find(item => item.result_items[0].item_id === this.goodsOne.result_items[0].item_id);
			if(obj){
				obj.result_items[0].count++
				obj.result_items[0].isChecked = true
			}else{
				// 如果没有，那么我们要把当前这个商品信息构造成购物车信息，添加到购物车数组
				obj = this.goodsOne
				this.$set(obj.result_items[0],'count',1)
				this.$set(obj.result_items[0],'isChecked',true)
				// obj.count = 1
				// obj.isChecked = true
				this.goods.push(obj)
			}
			
			wx.showToast({
			  title: '添加购物车成功',
			  icon: 'success',
			  duration: 2000
			})
		}
	},
	computed: {
		...mapState('detail', ['goods'])
	}
};
</script>

<style lang="stylus">
.detailContainer
	width 100%
	display flex
	flex-direction column
	.header
		height 90upx
		line-height 90upx
		background #FFFFFF
		display flex
		text-align center
		.iconfont
			width 90upx
			height 90upx
			font-size 50upx
		text
			flex 1
		.shopCart
			position relative
			.count
				color red
				position absolute
				top -25upx
				right 5upx
				font-size 26upx
	.content
		height calc(100vh - 190upx)
		.detailImg
			width 100%
			height 750upx
		.tag
			width 90%
			height 100upx
			line-height 100upx
			text-align center
			font-size 32upx
			color #FFFFFF
			margin 20upx auto
			background #BB2C08
			border-radius 10upx
		.price
			font-size 50upx
			color #DD1A21
			line-height 70upx
			margin-left 5%
		.info
			font-size 28upx
			color #333
			margin-left 5%
	.detailFooter
		position fixed
		bottom 0
		left 0
		height 100upx
		line-height 100upx
		border-top 1upx solid #EEEEEE
		display flex
		background #fff
		justify-content space-between
		width 100%
		.shop
			display flex
			flex-direction column
			align-items center
			height 100rpx
			margin -10rpx 10rpx 0 20px
			.iconfont
				height 30rpx
				font-size 38rpx
			.shopText
				height 50rpx
				font-size 26rpx
		.service
			width 60upx
			height 60upx
			margin 20upx 40upx
		.btn
			width 180upx
			height 100%
			text-align center
			font-size 28upx
			&.buyNow
				color #333
				border-left 1upx solid #eee
			&.addShopCart
				background #DD1A21
				color #fff
</style>
