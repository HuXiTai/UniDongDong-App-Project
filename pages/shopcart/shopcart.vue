<template>
	<view class="cartContainer">
		<view class="title">
			<text class="text1">购物车</text>
			<text class="text2">编辑</text>
		</view>
		<!-- 购物车列表 -->
		<scroll-view scroll-y="true" class="scroll-view" >
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
						<text class="add" @click="changeNum(1,item,index)">+</text>
						<text class="count">{{ item.result_items[0].count }}</text>
						<text class="del" @click="changeNum(-1,item,index)">-</text>
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
</template>

<script>
import { mapState } from 'vuex';
export default {
	data() {
		return {
			checkNum: 0,
			checkedNum: 0
		};
	},
	computed: {
		...mapState('detail', ['goods']),
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
		changeNum(num,item,index) {
			item.result_items[0].count += num;
			if(item.result_items[0].count <= 0){
				wx.showModal({
				  title: '提示',
				  content: `你确定要删除它吗？`,
				  success: (res) => {
				    if (res.confirm) {
				      this.goods.splice(index,1)
				    } else if (res.cancel) {
				      console.log('用户点击取消')
				    }
				  }
				})
			}
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
