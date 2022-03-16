import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import search from "./pages/componens/search/search.vue"
import store from "./store"
Vue.config.productionTip = false
Vue.component("search", search)
// Vue 
App.mpType = 'app'
const app = new Vue({
	...App,
	store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
