<template>
	<view class="centerContainer">
		<view class="loginOrRegister">
			<view class="button" v-if="!userImg" @click="login">登录/注册</view>
			<view class="afterLogin" v-else>
				<image :src="userImg || '../../static/images/mylove.jpg'" class="userImg" @click="logout"></image>
				<text class="userName">胡熙泰</text>
			</view>
		</view>

		<view class="about">
			<view class="aboutItem">
				<text class="text1">0</text>
				<text class="text2">我的店铺</text>
			</view>

			<view class="aboutItem">
				<text class="text1">0</text>
				<text class="text2">我的店铺</text>
			</view>

			<view class="aboutItem">
				<text class="text1">0</text>
				<text class="text2">我的店铺</text>
			</view>
		</view>

		<serverItem img="" />
	</view>
</template>

<script>
import serverItem from '../componens/serverItem/serverItem.vue';
export default {
	components: {
		serverItem
	},
	data() {
		return {
			userImg: '',
			userName: ''
		};
	},
	methods: {
		login() {
			wx.getUserProfile({
				desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
				success: res => {
					this.userImg = res.userInfo.avatarUrl;
					this.userName = res.userInfo.nickName;
					this.$store.commit('SET_USER_INFO', res.userInfo);
				}
			});
		},
		logout() {
			wx.showModal({
				title: '提示',
				content: '确定退出登录？',
				success: res => {
					this.userImg = '';
					this.userName = '';
					this.$store.commit('SET_USER_INFO', "");
				}
			});
		}
	}
};
</script>

<style lang="stylus">
.centerContainer
	height 100%
	background-color #eee
	.loginOrRegister
		height 240rpx
		width 100%
		background-color #333
		display flex
		justify-content center
		align-items center
		.button
			text-align center
			line-height 80rpx
			width 244rpx
			height 80rpx
			border 2rpx solid #fff
			border-radius 40rpx
			color #fff
		.afterLogin
			display flex
			flex-direction column
			align-items center
			.userImg
				width 80rpx
				height 80rpx
				border-radius 50%
			.userName
				color #fff
				margin-top 10rpx
				font-size 28rpx
	.about
		padding 20rpx 0
		background-color #fff
		display flex
		justify-content space-evenly
		.aboutItem
			border-right 2rpx solid #ccc
			text-align center
			display flex
			flex-direction column
			flex 1
			.text1
				font-size 26rpx
			.text2
				font-size 26rpx
</style>
