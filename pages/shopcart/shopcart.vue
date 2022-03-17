<template>
	<view class="cartContainer">
		<view class="nogoods" v-if="goods.length <= 0">
			<image src="../../static/images/nogoods.JPG" class="nogoodsImg"></image>
			<text class="nogoodsText">您还没有任何商品</text>
			<view class="button">
				<text class="button1" @click="toCategory">逛一逛</text>
				<text class="button2" @click="toIndex">回到首页</text>
			</view>
		</view>

		<view class="nogoods" v-else-if="goods.length > 0 && !userInfo">
			<image src="../../static/images/nogoods.JPG" class="nogoodsImg"></image>
			<text class="nogoodsText">请先登录</text>
			<view class="button">
				<text class="button1" @click="toCategory">逛一逛</text>
				<text class="button2" @click="toCenter">登录</text>
			</view>
		</view>

		<view class="gooosList" v-else>
			<view class="title">
				<text class="text1">{{ userInfo.nickName || '' }}购物车</text>
				<text class="text3" v-show="isEdit" @click="UPDATE_DATA">删除</text>
				<text class="text2" :class="{ active: isEdit }" @click="isEdit = !isEdit">编辑</text>
			</view>
			<!-- 购物车列表 -->
			<scroll-view scroll-y="true" class="scroll-view">
				<view class="cartList">
					<view class="cartItem" v-for="item of goods">
						<text class="iconfont icon-xuanzhong31" :class="{ selected: item.result_items[0].isChecked }" @click="checkedOne(item)"></text>
						<view class="shopItem">
							<image class="shopImg" :src="item.result_items[0].item_img"></image>
							<view class="shopInfo">
								<text>{{ item.result_items[0].item_title }}</text>
								<text class="price">价格:￥{{ item.result_items[0].price_effect }}</text>
							</view>
						</view>
						<!-- 控制数量 -->
						<view class="countCtrl">
							<text class="add" @click="changeNum(1, item, index)">+</text>
							<text class="count">{{ item.result_items[0].count }}</text>
							<text class="del" @click="changeNum(-1, item, index)">-</text>
						</view>
					</view>
				</view>
			</scroll-view>

			<!-- 底部下单 -->
			<view class="cartFooter">
				<text class="iconfont icon-xuanzhong31" :class="{ selected: isCheckedAll }" @click="checkedAll"></text>
				<text class="allSelected">已选{{ cecked }}</text>
				<view class="right">
					<text class="totalPrice">合计:￥{{ sum }}</text>
					<text class="preOrder">下单{{ cecked }}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {
			checkNum: 0,
			checkedNum: 0,
			isEdit: false
		};
	},
	computed: {
		...mapState('detail', ['goods']),
		...mapState(['userInfo']),
		isCheckedAll() {
			const re = this.goods.reduce((p, c) => {
				c.result_items[0].isChecked ? p++ : p;
				return p;
			}, 0);
			this.checkedNum = re;
			return re === (this.goods.length || true);
		},
		sum() {
			return this.goods.reduce((p, c) => {
				c.result_items[0].isChecked ? (p += c.result_items[0].price_effect * c.result_items[0].count) : p;
				return p;
			}, 0);
		},
		cecked() {
			return this.goods.reduce((p, c) => {
				c.result_items[0].isChecked ? (p += c.result_items[0].count) : p;
				return p;
			}, 0);
		}
	},
	methods: {
		checkedOne(item) {
			item.result_items[0].isChecked = !item.result_items[0].isChecked;
		},
		checkedAll() {
			let statu = !this.isCheckedAll;
			this.goods.forEach(item => (item.result_items[0].isChecked = statu));
		},
		changeNum(num, item, index) {
			item.result_items[0].count += num;
			if (item.result_items[0].count <= 0) {
				wx.showModal({
					title: '提示',
					content: `你确定要删除它吗？`,
					success: res => {
						if (res.confirm) {
							this.goods.splice(index, 1);
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			}
		},
		...mapMutations('detail', ['UPDATE_DATA']),
		toCategory() {
			wx.reLaunch({ url: '/pages/category/category' });
		},
		toCenter() {
			wx.reLaunch({ url: '/pages/center/center' });
		},
		toIndex() {
			wx.reLaunch({ url: '/pages/index/index' });
		}
	}
};
</script>

<style lang="stylus">
/* iconfont 公共样式 */
.cartImg
	display block
	width 248upx
	height 248upx
	margin 300upx auto 50upx
.cartContainer
	position relative
	background #f4f4f4
	height 100%
	.nogoods
		display flex
		flex-direction column
		align-items center
		.nogoodsImg
			width 600rpx
			height 400rpx
		.nogoodsText
			font-size 28rpx
			margin 20rpx 0
		.button
			display flex
			.button1
				width 150rpx
				height 60rpx
				margin 0 20rpx
				text-align center
				line-height 60rpx
				color #666
				border 2rpx solid #666
				border-radius 20rpx
			.button2
				width 150rpx
				height 60rpx
				margin 0 20rpx
				text-align center
				line-height 60rpx
				color #666
				border 2rpx solid #666
				border-radius 20rpx
	.gooosList
		.title
			display flex
			justify-content space-between
			.text1
				font-size 32upx
				line-height 80upx
				margin-left 30upx
			.text2
				font-size 26upx
				line-height 80upx
				margin-right 30upx
				&.active
					color red
			.text3
				margin-top 20rpx
				width 200rpx
				height 50rpx
				background-color red
				color #fff
				text-align center
				left 50rpx
		.header
			display flex
			background #eee
			text
				width 33.333%
				height 80upx
				line-height 80upx
				text-align center
				font-size 26upx
		.contentContainer
			button
				width 480upx
				height 92upx
				background #DD1A21
				color #fff
				font-size 32upx
				line-height 92upx
			.addMore
				text-align center
				font-size 26upx
				color #7f7f7f
				line-height 60rpx
		.scroll-view
			height calc(100vh - 80rpx - 96rpx)
			.cartList
				.cartItem
					position relative
					display flex
					height 172upx
					background #fff
					margin-top 50upx
					padding 20upx
					.iconfont
						font-size 40upx
						line-height 172upx
						margin 0 40upx
						color #999
						&.selected
							color #BB2C08
					.shopItem
						display flex
						.shopImg
							width 172upx
							height 172upx
							background #eee
						.shopInfo
							font-size 22upx
							display flex
							flex-direction column
							margin-left 20upx
							text
								line-height 60upx
								display -webkit-box
								-webkit-box-orient vertical
								-webkit-line-clamp 2
								overflow hidden
							.price
								color #BB2C08
					.countCtrl
						position absolute
						right 20upx
						bottom 30upx
						text
							display inline-block
							width 60upx
							height 50upx
							text-align center
							line-height 50upx
							border 1upx solid #EEEEEE
							&:nth-child(2)
								border none
								border-top 1upx solid #EEEEEE
								border-bottom 1upx solid #EEEEEE
		.cartFooter
			position absolute
			display flex
			bottom 2rpx
			height 96upx
			line-height 96upx
			width 100%
			background #fff
			font-size 30upx
			.iconfont
				font-size 40upx
				margin 0 20upx
				color #999
				&.selected
					color #BB2C08
			.right
				height 96upx
				position absolute
				right 0
				.totalPrice
					display inline-block
					height 96upx
					line-height 96upx
				.preOrder
					display inline-block
					background #DD1A21
					width 225upx
					height 96upx
					line-height 96upx
					text-align center
					font-size 28upx
					color #fff
					margin-left 30upx
		.hint
			text-align center
			font-size 28upx
</style>
