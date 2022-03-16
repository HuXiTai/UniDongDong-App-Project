<template>
	<view class="seckillContainer">
		<view class="momentSeckill">
			<view class="title">
				<image src="../../static/images/seckill.png" class="titleImg"></image>
				<text class="titleText">更多></text>
			</view>
		</view>
		
		<scroll-view scroll-x="true" enable-flex class="seckillList">
			<view class="seckillItem" v-for="item of seckill" :key="item.productId">
				<image :src="item.productImageUrl" class="seckillImg"></image>
				<text class="text1">{{item.productName}}</text>
				<text class="text2">￥{{item.salePrice}}</text>
				<text class="text3">￥{{item.originPrice}}</text>
			</view>
			
			<view class="more">
					查看更多<text class="iconfont icon-xiangyou3fill:before"></text>
			</view>
		</scroll-view>
		
		<view class="ranking" v-for="(item,index) of goodValueData" :key="item.productId">
			<view class="title">
				<text class="best">畅销榜第{{index+1}}名</text>
				<text class="more">更多></text>
			</view>
			<view class="body">
				<view class="left">
					<image :src="item.productImageUrl" class="leftImg"></image>
				</view>
				<view class="right">
					<text class="leftText">{{item.productName}}</text>
					<view class="leftPrice">
						<text class="text1">￥{{item.salePrice}}</text>
						<text class="text2">￥{{item.originPrice}}</text>
					</view>
					<view class="comment">
						<view class="commentNum">
							<text class="iconfont icon-pinglun"></text>
							<text class="text1">{{item.saleNum}}</text>
						</view>
						
						<view class="collectionNum">
							<text class="iconfont icon-shoucangxuanzhong"></text>
							<text class="text2">{{item.commentCount}}</text>
						</view>
						
						<text class="iconfont .icon-gouwuchekong abc"></text>
					</view>
				</view>
			</view>
		</view>
		
		
		
		
	</view>
</template>

<script>
	import {mapActions,mapGetters,mapState} from "vuex"
export default {
	data() {
		return {};
	},
	mounted(){
		this.getDeserveData()
	},
	methods: {
		...mapActions("goodvalue",["getDeserveData"])
	},
	computed:{
		...mapState("goodvalue",["seckill","goodValueData"])
	}
};
</script>

<style lang="stylus">
.seckillContainer
	position relative
	background-color #eee
	.momentSeckill
		margin-bottom 100rpx
		position relative
		width 100%
		height 400rpx
		background-image: linear-gradient(to right,#ff5151 30%,#fe7a45 70%);
		border-bottom-left-radius 30%
		border-bottom-right-radius 30%
		padding-top 20rpx
		box-sizing:border-box
		.title
			display flex
			margin-bottom 20rpx
			align-items center
			justify-content center
			.titleImg
				width 268rpx
				height 36rpx
			.titleText
				position absolute
				font-size 24rpx
				right 30rpx
				color #fff
	.seckillList
		display flex
		position absolute
		top 90rpx
		height 400rpx
		.seckillItem
			margin 0 10rpx
			width 208rpx
			height 358rpx
			display flex
			flex-direction column
			align-items center
			background-color #fff
			box-shadow -2rpx 3rpx 3rpx #ccc
			.seckillImg
				width 208rpx
				height 216rpx
			.text1
				width 80%
				font-size 26rpx
				display -webkit-box
				-webkit-box-orient vertical
				-webkit-line-clamp 1
				overflow hidden
			.text2
				font-size 28rpx
				color red
			.text3
				font-size 24rpx
				text-decoration line-through
		.more
			display flex
			align-items center
			justify-content center
			flex-shrink:0
			width 208rpx
			height 358rpx
	.ranking
		background-color #fff
		border-radius 20rpx
		margin-top 20rpx
		.title
			padding 0 20rpx
			display flex
			align-items center
			justify-content space-between
			.best
				background-color #ef4845
				border-bottom-right-radius 20rpx
				padding 0 10rpx
				color #fff
				font-size 28rpx
			.more
				font-size 24rpx
		.body
			padding 20rpx
			display flex
			.left
				height 228rpx
				margin-right 20rpx
				.leftImg
					width 228rpx
					height 228rpx
			.right
				display flex
				flex-direction column
				justify-content space-around
				.leftText
					font-size 28rpx
					display -webkit-box
					-webkit-box-orient vertical
					-webkit-line-clamp 1
					overflow hidden
				.leftPrice
					.text1
						font-size 28rpx
						color red
					.text2
						font-size 22rpx
						text-decoration lin-through
						
				.comment
					display flex
					justify-content space-around
					align-items center
					.commentNum
						font-size 22rpx
					.collectionNum
						font-size 22rpx
					.abc
						display block
						height 50rpx
						width 50rpx
						text-align center
						line-height 50rpx
						border-radius 20rpx
						border 2rpx solid #ccc 
						
			
</style>
