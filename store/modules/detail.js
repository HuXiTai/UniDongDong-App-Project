import request from "../../utils/request.js"

const state = {
	goods: [
				{
					"result_items": [{
						"item_id": "25207583",
						"item_img": "http://img3x3.ddimg.cn/5/1/25207583-1_h_8.jpg",
						"item_title": "人世间（第十届茅盾文学奖获奖作品，雷佳音、辛柏青、宋佳、殷桃、萨日娜、宋春丽、张凯丽等主演）",
						"pub_nm": "中国青年出版社",
						"price_effect": "154.69",
						count: 4,
						isChecked: true,
					}]
				},
				{
					"result_items": [{
						"item_id": "28992419",
						"item_img": "http://img3x9.ddimg.cn/71/33/28992419-1_h_50.jpg",
						"item_title": "蛤蟆先生去看心理医生（年销200万册！英国经典心理咨询入门书，知名心理学家李松蔚强烈推荐）",
						"pub_nm": "天津人民出版社",
						"price_effect": "38.00",
						count: 8,
						isChecked: true,
				},
			]
		}
	]
}

const actions = {
	
}

const mutations = {
	UPDATE_DATA(state){
		state.goods = state.goods.filter(item=>{
			return !item.result_items[0].isChecked
		})
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
