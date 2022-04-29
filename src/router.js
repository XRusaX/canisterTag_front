import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/main',
            component: () => import('./components/pages/CanisterProductionPage.vue')
        },
        {
            path: '/agents',
            component: () => import('./components/pages/AgentsPage.vue')
        },
        {
            path: '/log',
            component: () => import('./components/pages/LogPage.vue')
        },
        {
            path: '/users',
            component: () => import('./components/pages/UsersPage.vue')
        },
        {
            path: '/connections',
            component: () => import('./components/pages/ConnectionsPage.vue')
        },
        {
            path: '/settings',
            component: () => import('./components/pages/SettingsPage.vue')
        },
    ]
})
