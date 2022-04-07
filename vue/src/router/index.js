import Vue from 'vue'
import Router from 'vue-router'

import itemContainer from '../containers/itemContainer.vue'
import login from '../components/login.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'itemContainer',
            component: itemContainer,

        },
        {
            path: '/item',
            name: 'item',
            component: itemContainer,

        },
        {
            path: '/login',
            name: 'login',
            component: login
        }
    ]
})
