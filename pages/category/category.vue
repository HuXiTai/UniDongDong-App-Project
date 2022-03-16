<template>
	<view class="categoryContainer">
		<search />
		<view class="body">
			<view class="left">
				<text  v-for="(category,inde) of categoryData" @click="changeIndex(inde)" :key="category.content.page_id" class="text" :class="{active:inde===index}">{{category.title}}</text>
			</view>

			<scroll-view scroll-y="true" enable-flex class="right">
				<view class="categoryList" v-for="category of categoryData[index].pile">
					<text class="title">{{category.name}}</text>
					<view class="rightList">
						<view class="rightItem" v-for="item of category.list">
							<image :src="item.icon" class="rightImg"></image>
							<text class="rightText">{{item.title}}</text>
						</view>
					</view>
				</view>
			</scroll-view>
		</view>
	</view>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
export default {
	data() {
		return {
			index:0
		};
	},
	mounted() {
		this.getCategoryData();
	},
	methods:{
		...mapActions("category",["getCategoryData"]),
		changeIndex(index){
			this.index=index
		}
	},
	computed:{
		...mapState("category",["categoryData"])
	}
};
</script>

<style lang="stylus">
.categoryContainer
	padding 20rpx
	box-sizing border-box
	background-color #eee
	.body
		height 100%
		display flex
		justify-content space-between
		.left
			padding 30rpx 0
			width 23%
			background-color #fff
			display flex
			flex-direction column
			.text
				text-align center
				width 100%
				height 94rpx
				line-height 94rpx
				font-size 28rpx
				&.active
					color red
					background-color #eee
		.right
			height calc(100vh - 156rpx)
			width 77%
			padding 20rpx 16rpx 0 20rpx
			box-sizing border-box
			.categoryList
				padding 20rpx
				border-radius 20rpx
				margin-top 20rpx
				background-color #fff
				.title
					font-weight bolder
					font-size 28rpx
					display block
					margin 20rpx 0
				.rightList
					display flex
					flex-wrap wrap
					.rightItem
						width 33.333333%
						padding 8rpx
						box-sizing border-box
						text-align center
						.rightImg
							width 144rpx
							height 144rpx
						.rightText
							font-size 24rpx
</style>
