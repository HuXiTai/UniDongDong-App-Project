<template>
	<view class="detailContainer">

		<!-- 内容区 -->
		<scroll-view class="content" scroll-y="true">
			<image class="detailImg" :src="goodsOne.result_items[0].item_img"></image>
			
			<view class="body">
				<view class="title">
					<text class="titleFlag">当当自营</text>
					<view class="info">{{ goodsOne.result_items[0].item_title }}</view>
				</view>
				
				<view class="priceList">
					<view class="nowPrice">
						<text class="priceText">￥{{goodsOne.result_items[0].price_effect}}</text>
						<text class="discount">({{goodsOne.result_items[0].discount_effect}})</text>
					</view>
					<view class="originalPrice">
						定价<text class="originaText">￥{{goodsOne.result_items[0].price_orig}}</text>
					</view>
				</view>
			</view>
			
			
			
			<view class="detail">
				<view class="detailItem">
					<text class="detailTitle">作者</text>
					<text class="name">{{goodsOne.result_items[0].auth_nm}}</text>
					<text class="text">查看作品></text>
				</view>
				
				<view class="detailItem">
					<text class="detailTitle">出版</text>
					<text class="name">{{goodsOne.result_items[0].pub_nm}}</text>
					<text class="text">查看作品></text>
				</view>
				
				<view class="detailItem">
					<text class="detailTitle">排名</text>
					<text class="name">小说销售榜排第{{goodsOne.result_items[0].ebook_subtype}}位</text>
					<text class="text">查看作品></text>
				</view>
				
				<view class="detailItem">
					<text class="detailTitle">分类</text>
					<text class="name">{{goodsOne.result_items[0].item_tags[1].tag_title}}</text>
				</view>
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
	background-color #eee
	
	
	.content
		padding 20rpx
		height calc(100vh - 101upx)
		box-sizing:border-box
		.detailImg
			width 100%
			height 750upx
		.body
			margin-top 15rpx
			background-color #fff
			padding 20rpx
			box-sizing:border-box
			.title
				padding-top 20rpx
				background-color #fff
				.titleFlag
					float left
					font-size 22rpx
					width 120rpx
					height 24rpx
					text-align center
					line-height 24rpx
					background-color #ff4736
					color #fff
					border-radius 20rpx
					margin 6rpx 10rpx 0 10rpx
				.info
					font-size 28rpx
			.priceList
				margin-top 20rpx
				background-color #fff
				.nowPrice
					.priceText
						color red
						margin 0 20rpx 20rpx 0
					.discount
						font-size 22rpx
						color #999
				.originalPrice
					font-size 22rpx
					color #999
					.originaText
						text-decoration lin-through
		.detail
			margin-top 20rpx
			background-color #FFFFFF
			border-radius 20rpx
			.detailItem
				display flex
				align-items center
				height 80rpx
				font-size 26rpx
				padding 20rpx
				box-sizing:border-box
				border-bottom 2rpx solid #999
				.detailTitle
					width 100rpx
					color #999
				.name
					flex 1
					color #333333
				.text
					width 150rpx
					color #999
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
				color #999
			.shopText
				height 50rpx
				font-size 26rpx
				color #999
		.service
			width 60upx
			height 60upx
			margin 20upx 40upx
		.btn
			width 220upx
			height 100%
			text-align center
			font-size 28upx
			&.buyNow
				color #fff
				background-color #ffbe23
			&.addShopCart
				background-color #f3554b
				color #fff
</style>
