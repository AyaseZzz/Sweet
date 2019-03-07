import Vue from 'vue'
// 1.1 导入路由的包
import VueRouter from 'vue-router'
// 1.2 安装路由
Vue.use(VueRouter)
import Vuex from 'vuex'

Vue.use(Vuex)
import router from './router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'


Vue.use(ElementUI)
var store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {}
})
var vm = new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})

