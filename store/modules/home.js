import request from "../../utils/request.js"

const state = {
	bannerList: [],
	indexBannerList:{
		banner1:[],
		banner2:[]
	},
	indexBrand:[],
	indexBooks:{
		book1:[],
		book2:[],
	},
	indexRecommend:{
		recommend:[],
		boutique :[]
	}
}

const actions = {
	async getBannerList({
		commit
	}) {
		const re = await request("/getIndexBanner")
		commit("SET_BANNER_LIST", ((re.data || {})[63290] || {}).pitContent || [])

	},
	
	async getIndexBannerList({
		commit
	}) {
		const re = await request("/getIndexBannerList")
		commit("SET_INDEX_BANNER_LIST",re.data)
	
	},
	
	async getIndexBrand({
		commit
	}) {
		const re = await request("/getIndexBrand")
		commit("SET_INDEX_BRAND",re.data||{})
	},
	
	async getIndexBooks({
		commit
	}) {
		const re = await request("/getIndexBooks")
		commit("GET_INDEX_BOOKS",re.data||{})
	},
	
	async getIndexRecommend({
		commit
	}) {
		const re = await request("/getIndexRecommend")
		commit("GET_INDEX_RECOMMEND",re.data||{})
	},
	
}

const mutations = {
	SET_BANNER_LIST(state, value) {
		state.bannerList = value
	},
	
	SET_INDEX_BANNER_LIST(state,value){
		state.indexBannerList.banner1=(((value||{})[46828]||{}).pitContent||[]).splice(0,10),
		state.indexBannerList.banner2=state.indexBannerList.banner1
	},
	
	SET_INDEX_BRAND(state,value){
		state.indexBrand=(value[63355]||{}).pitContent
	},
	
	GET_INDEX_BOOKS(state,value){
		state.indexBooks.book1=(((value||{})[62987]||{}).pitContent[0]||{}).pitInfo.concat((((value||{})[62987]||{}).pitContent[1]||{}).pitInfo)
		state.indexBooks.book2=(((value||{})[62989]||{}).pitContent[0]||{}).pitInfo.concat((((value||{})[62989]||{}).pitContent[1]||{}).pitInfo)
	},
	
	GET_INDEX_RECOMMEND(state,value){
		state.indexRecommend.recommend = value.result_list.splice(0,20)
		state.indexRecommend.boutique= value.result_list.splice(19,20)
	}
}

const getters = {}

export default {
	state,
	actions,
	mutations,
	getters,
	namespaced: true
}
