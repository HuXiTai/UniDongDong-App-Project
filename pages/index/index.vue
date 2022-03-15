<template>
	<view class="homeContainer">
		<view class="header">
			<image src="../../static/images/logo.png" class="logo"></image>
			<view class="search">
				<text class="iconfont icon-sousuo:before "></text>
				<input type="text" class="searchIpt" placeholder="搜索商品/店铺/总类" />
			</view>
			<image src="../../static/images/hamburger.png" class="hamburger"></image>
		</view>
		
		<scroll-view class="scrollList" scroll-y="true" enable-flex >
			<view class="banner">
				<swiper class="bannerList" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item class="bannerItem">
						<image src="../../static/images/mylove.jpg" class="bannerImg"></image>
					</swiper-item>
				</swiper>
			</view>
			
			<swiper class="typeList" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item class="typeItem">
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>				
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
				</swiper-item>
				
				<swiper-item class="typeItem">
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>				
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
					<image class="typeImg" src="../../static/images/mylove.jpg" mode=""></image>
				</swiper-item>
			</swiper>
			
			<view class="brandRush">
				<view class="header">
					<text class="text">限时抢购</text>
					<image src="../../static/images/flashSale.png" class="headerImg"></image>
				</view>
				<view class="body">
					<image src="../../static/images/mylove.jpg" class="bodyImg"></image>
					<image src="../../static/images/mylove.jpg" class="bodyImg"></image>
					<image src="../../static/images/mylove.jpg" class="bodyImg"></image>
					<image src="../../static/images/mylove.jpg" class="bodyImg"></image>
				</view>
			</view>
			
			
			
		</scroll-view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		}
	}
</script>

<style lang="stylus">
	.homeContainer
		padding 20rpx
		box-sizing border-box
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
		.scrollList
			height calc(100vh - 156rpx)
			.banner
				.bannerList
					width 100%
					height 216rpx
					.bannerItem
						width 100%
						height 216rpx
						.bannerImg
							margin-top 20rpx
							width 100%
							height 216rpx
			.typeList
				margin-top 20rpx
				.typeItem
					display flex
					flex-wrap wrap
					width 300rpx
					.typeImg
						height 156rpx
						width 20%
			.brandRush
				.header
					height 80rpx
					display flex
					align-items center
					.text
						line-height 80rpx
						margin 0 20rpx
					.headerImg
						margin-top 5rpx
						width 144rpx
						height 32rpx
						vertical-align middle
				.body
					display flex
					justify-content space-evenly
					.bodyImg
						width 158rpx
						height 158rpx
						
</style>
