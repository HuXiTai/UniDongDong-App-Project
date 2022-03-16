<template>
	<view class="homeContainer">
		<!-- <view class="header">
			<image src="../../static/images/logo.png" class="logo"></image>
			<view class="search">
				<text class="iconfont icon-sousuo:before "></text>
				<input type="text" class="searchIpt" placeholder="搜索商品/店铺/总类" />
			</view>
			<image src="../../static/images/hamburger.png" class="hamburger"></image>
		</view> -->

		<search />

		<scroll-view class="scrollList" scroll-y="true" enable-flex>
			<view class="banner" @click="toCategory">
				<swiper circular class="bannerList" indicator-active-color="red" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
					<swiper-item class="bannerItem" v-for="(banner, index) of bannerList" :key="banner.imgUrl"><image :src="banner.imgUrl" class="bannerImg"></image></swiper-item>
				</swiper>
			</view>

			<swiper circular class="typeList" :indicator-dots="false" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item class="typeItem">
					<image v-for="indexBanner1 of indexBannerList.banner1" :key="indexBanner1.imgUrl" class="typeImg" :src="indexBanner1.imgUrl"></image>
				</swiper-item>

				<swiper-item class="typeItem">
					<image v-for="indexBanner2 in indexBannerList.banner2" :key="indexBanner2.imgUrl" class="typeImg" :src="indexBanner2.imgUrl"></image>
				</swiper-item>
			</swiper>

			<view class="brandRush">
				<view class="header">
					<text class="text">限时抢购</text>
					<image src="../../static/images/flashSale.png" class="headerImg"></image>
				</view>

				<scroll-view class="body" scroll-x="true" enable-flex>
					<view v-for="brand of indexBrand"><image :src="brand.bigImgUrl" class="bodyImg"></image></view>
					<view class="more">
						<text class="text">查看更多</text>
						<text class="iconfont icon-xiangyou3fill"></text>
					</view>
				</scroll-view>
			</view>

			<view class="library">
				<view class="libraryTitle">当当书屋</view>

				<view class="libraryBody">
					<view class="libraryItem">
						<view class="library" v-for="book of indexBooks.book1" :key="book.pid">
							<text class="libraryText1">{{ book.mainTitle }}</text>
							<text class="libraryText2">{{ book.subTitle }}</text>
							<image :src="book.imgUrl" class="libraryImg"></image>
						</view>
					</view>

					<view class="libraryItem">
						<view class="library" v-for="book of indexBooks.book2" :key="book.pid">
							<text class="libraryText1">{{ book.mainTitle }}</text>
							<text class="libraryText2">{{ book.subTitle }}</text>
							<image :src="book.imgUrl" class="libraryImg"></image>
						</view>
					</view>
				</view>
			</view>

			<view class="recommend">
				<view class="title">
					<view class="titleItem">
						<text class="text1" :class="{ active: isShowRecommend }" @click="isShowRecommend = true">为您服务</text>
						<text class="text2 active" v-show="isShowRecommend">猜您喜欢</text>
					</view>

					<view class="titleItem">
						<text class="text1 " :class="{ active: !isShowRecommend }" @click="isShowRecommend = false">精品书屋</text>
						<text class="text2 active" v-show="!isShowRecommend">高端精选</text>
					</view>
				</view>

				<view class="recommendList">
					<view
						class="recommendItem"
						v-for="recommend of indexRecommend.recommend"
						:key="recommend.result_items[0].shop_id"
						v-show="isShowRecommend"
						@click="toDetail(recommend)"
					>
						<image :src="recommend.result_items[0].item_img" class="recommendImg"></image>
						<text class="recommendText">{{ recommend.result_items[0].item_title }}</text>
						<view class="recommendPrice">
							<text class="price">￥{{ recommend.result_items[0].price_orig }}</text>
							<text class="similar">找相似</text>
						</view>
					</view>

					<view
						class="recommendItem"
						v-for="boutique of indexRecommend.boutique"
						:key="boutique.result_items[0].shop_id"
						v-show="!isShowRecommend"
						@click="toDetail(boutique)"
					>
						<image :src="boutique.result_items[0].item_img" class="recommendImg"></image>
						<text class="recommendText">{{ boutique.result_items[0].item_title }}</text>
						<view class="recommendPrice">
							<text class="price">￥{{ boutique.result_items[0].price_orig }}</text>
							<text class="similar">找相似</text>
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
	data() {
		return {
			title: 'Hello',
			isShowRecommend: true
		};
	},
	mounted() {
		this.getBannerList();
		this.getIndexBannerList();
		this.getIndexBrand();
		this.getIndexBooks();
		this.getIndexRecommend();
	},
	methods: {
		...mapActions('home', ['getBannerList']),
		...mapActions('home', ['getIndexBannerList']),
		...mapActions('home', ['getIndexBrand']),
		...mapActions('home', ['getIndexBooks']),
		...mapActions('home', ['getIndexRecommend']),
		toDetail(goods) {
			wx.navigateTo({
				url: `/pages/detail/detail`
			});
			
			wx.setStorageSync("goods_key",goods)
		},
		
		toCategory() {
			wx.reLaunch({ url: '/pages/category/category' });
		}
	},
	computed: {
		...mapState('home', ['bannerList']),
		...mapState('home', ['indexBannerList']),
		...mapState('home', ['indexBrand']),
		...mapState('home', ['indexBooks']),
		...mapState('home', ['indexRecommend'])
	}
};
</script>

<style lang="stylus">
.homeContainer
	background-color #eee
	padding 20rpx
	box-sizing border-box
	.scrollList
		height calc(100vh - 116rpx)
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
			background-color #FFF
			border-radius 20rpx
			margin-top 20rpx
			.typeItem
				display flex
				flex-wrap wrap
				width 300rpx
				.typeImg
					height 156rpx
					width 20%
		.brandRush
			background-color #FFF
			border-radius 20rpx
			margin-top 20rpx
			height 258rpx
			width 100%
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
				height 178rpx
				width 100%
				display flex
				view
					width 158rpx
					height 158rpx
					.bodyImg
						width 158rpx
						height 158rpx
						
				.more
					display flex
					flex-direction column
					align-items center
					width 158rpx
					height 158rpx
					flex-shrink:0
					.text
						color #666
						font-size 24rpx
						width 26rpx
					.iconfont
						color #666
						
		.library
			background-color #FFF
			border-radius 20rpx
			margin-top 20rpx
			.libraryTitle
				text-align center
				margin 30rpx 0
				font-weight bolder
			.libraryBody
				height 536rpx
				.libraryItem
					display flex
					justify-content space-between
					.library
						text-align center
						display flex
						flex-direction column
						.libraryText1
							font-weight bolder
							font-size 30rpx
						.libraryText2
							font-size 26rpx
						.libraryImg
							height 164rpx
							width 164rpx
		.recommend
			background-color #FFF
			border-radius 20rpx
			margin-top 20rpx
			margin 40rpx 0
			.title
				display flex
				justify-content space-around
				position sticky
				top 0
				background-color #fff
				.titleItem
					display flex
					flex-direction column
					text-align center
					.text1
						font-size 38rpx
						&.active
							font-weight bolder
					.text2
						font-size 26rpx
						&.active
							background-color #d7b27a
							border-radius 20rpx
			.recommendList
				display flex
				flex-wrap wrap
				.recommendItem
					margin 20rpx 0
					width 354rpx
					.recommendImg
						width 354rpx
						height 354rpx
				.recommendText
					display -webkit-box
					-webkit-box-orient vertical
					-webkit-line-clamp 2
					overflow hidden
					font-size 28rpx
				.recommendPrice
					display flex
					justify-content space-between
					align-items center
					.price
						font-weight bolder
					.similar
						width 100rpx
						height 26rpx
						text-align center
						margin-top 8rpx
						line-height 26rpx
						border 2rpx solid #ccc
						font-size 20rpx
						border-radius 20rpx
</style>
