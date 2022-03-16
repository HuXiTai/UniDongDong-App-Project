<template>
	<view class="header">
		<image src="../../../static/images/logo.png" class="logo" @click="toIndex"></image>
		<view class="search">
			<text class="iconfont icon-sousuo:before "></text>
			<input type="text" class="searchIpt" placeholder="搜索商品/店铺/总类" />
		</view>
		<image src="../../../static/images/hamburger.png" class="hamburger" @click="toCategory"></image>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {
		toIndex() {
			wx.reLaunch({ url: '/pages/index/index' });
		},
		toCategory() {
			wx.reLaunch({ url: '/pages/category/category' });
		}
	}
};
</script>

<style lang="stylus">
.header
	display flex
	align-items center
	.logo
		width 64rpx
		height 76rpx
	.search
		display flex
		flex 1
		align-items center
		background-color #f6f6f6
		margin 0 20rpx
		border-radius 10rpx
		.iconfont
			margin 0 30rpx 0 20rpx
	.hamburger
		width 44rpx
		height 76rpx
</style>
