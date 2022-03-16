import request from "../../utils/request.js"

const state = {
	seckill: [],
	goodValueData: []
}

const actions = {
	async getDeserveData({
		commit
	}) {
		const re = await request("/getDeserveData")
		commit("SET_DESERVE_DATA", (((re.result || {}).columns || [])[0].preferential||{}).infos || [])
		commit("SET_GOODVALUE_DATA", (((re.result || {}).columns || [])[2].preferential||{}).infos || [])
	},
}

const mutations = {
	SET_DESERVE_DATA(state, value) {
		state.seckill = value
	},
	
	SET_GOODVALUE_DATA(state, value) {
		state.goodValueData = value
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
