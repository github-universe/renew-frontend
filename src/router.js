import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Favorite',
            component: () => import(/* webpackChunkName: "home" */ '@/pages/Favorite'),
        }, {
            path: '/detail/:id',
            name: 'Detail',
            component: () => import(/* webpackChunkName: "home" */ '@/pages/Detail'),
        }, {
            path: '*',
            redirect: '/',
        },
    ],
})

export default router
