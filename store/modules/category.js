import request from "../../utils/request.js"

const state = {
	categoryData: []
}

const actions = {
	async getCategoryData({
		commit
	}) {
		const re = await request("/getCategoryData")
		commit("SET_CATEGORY_DATA",re)
	}
}

const mutations = {
	SET_CATEGORY_DATA(state,value){
		state.categoryData=value
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
