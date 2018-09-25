import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home/Home.vue'
import City from './views/city/City'
import Detail from './views/detail/detail'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/city',
            name: 'city',
            component: City
        },
        /*动态路由*/
        {
            path: '/detail/:id',
            name: 'detail',
            component: Detail
        }
    ]
})
