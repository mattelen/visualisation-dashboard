import Vue from 'vue'
import VueRouter from 'vue-router'
import PieCharts from '../views/PieCharts.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'PieCharts',
        component: PieCharts
    },
    {
        path: '/bar',
        name: 'BarCharts',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "BarCharts" */ '../views/BarCharts.vue')
    },
    {
        path: '/editor',
        name: 'Editor',
        component: () => import(/* webpackChunkName: "Editor" */ '../views/Editor.vue')
    },
  {
    path: '/map',
    name: 'Map',
    component: () => import(/* webpackChunkName: "Map" */ '../views/Map.vue')
  }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
