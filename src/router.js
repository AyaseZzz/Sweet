import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueRouter)
Vue.use(VueResource)

import index from './components/index.vue'
import college from './components/college.vue'
import customized from './components/customized.vue'
import works from './components/works.vue'
import blog from './components/blog.vue'
import FAQ from './components/FAQ.vue'

var router = new VueRouter({
    routes: [ // 配置路由规则
        {path: '/', redirect: '/index'},
        {path: '/index', component: index},
        {path: '/customized', component: customized},//高级定制
        {path: '/college', component: college},//蛋糕学院
        {path: '/works', component: works},//作品图集
        {path: '/blog', component: blog},//数据接口
        {path: '/FAQ', component: FAQ}
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }

})
export default router