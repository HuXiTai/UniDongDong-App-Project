<template>
	<view>
		<view class="serverList">
			<view class="serverItem">
				<view class="title">
					<image src="../../../static/images/myOrder.png" class="serVerImg"></image>
					<text class="text1">我的订单</text>
				</view>
				<text class="text2">查看全部购买商品></text>
			</view>
			
			<view class="lookState">
				<view class="lookStateItem">
					<text class="iconfont icon-daifukuan"></text>
					<text class="text">收付款</text>
				</view>
				
				<view class="lookStateItem">
					<text class="iconfont icon-31daishouhuo"></text>
					<text class="text">待收货</text>
				</view>
				
				<view class="lookStateItem">
					<text class="iconfont icon-tuihuanhuo"></text>
					<text class="text">退还货</text>
				</view>
			</view>
		</view>
		
		<view class="serverList">
			<view class="serverItem">
				<view class="title">
					<image src="../../../static/images/member.png" class="serVerImg"></image>
					<text class="text1">会员中心</text>
				</view>
				<text class="text2">></text>
			</view>
		</view>
		
		<view class="serverList">
			<view class="serverItem">
				<view class="title">
					<image src="../../../static/images/certificate.png" class="serVerImg"></image>
					<text class="text1">我的礼券</text>
				</view>
				<text class="text2">></text>
			</view>
			
			<view class="serverItem">
				<view class="title">
					<image src="../../../static/images/integral.png" class="serVerImg"></image>
					<text class="text1">积分低现</text>
				</view>
				<text class="text2">></text>
			</view>
			
			<view class="serverItem">
				<view class="title">
					<image src="../../../static/images/e-book.png" class="serVerImg"></image>
					<text class="text1">我的电子书</text>
				</view>
				<text class="text2">></text>
			</view>
			
			<view class="serverItem">
				<view class="title">
					<image src="../../../static/images/gifCard.png" class="serVerImg"></image>
					<text class="text1">我的礼品卡</text>
				</view>
				<text class="text2">></text>
			</view>
			
			<view class="serverItem">
				<view class="title">
					<image src="../../../static/images/address.png" class="serVerImg"></image>
					<text class="text1">收货地址</text>
				</view>
				<text class="text2">></text>
			</view>
		</view>
		
		<view class="serverList">
			<view class="serverItem">
				<view class="title">
					<image src="../../../static/images/customerService.png" class="serVerImg"></image>
					<text class="text1">客服反馈</text>
				</view>
				<text class="text2">></text>
			</view>
		</view>
	</view>
	
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>

<style lang="stylus">
.serverList
	margin-top 20rpx
	padding 20rpx
	background-color #fff
	.serverItem
		display flex
		align-items center
		justify-content space-between
		.title
			margin 20rpx 0
			display flex
			align-items center
			.serVerImg
				margin-right 10rpx
				width 44rpx
				height 44rpx
			.text1
				font-size 28rpx
		.text2
			font-size 22rpx
	.lookState
		display flex
		justify-content space-around
		.lookStateItem
			display flex
			flex-direction column
			align-items center
			
			.iconfont
				margin 20rpx 0 10rpx 0
				font-size 50rpx
			.text
				font-size 26rpx
</style>
