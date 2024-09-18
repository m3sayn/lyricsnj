import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import DittoView from '@/views/DittoView.vue'
import HypeboyView from '@/views/HypeboyView.vue'
import SupershyView from '@/views/SupershyView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/ditto',
    name: 'ditto',
    component: DittoView
  },
  {
    path: '/hypeboy',
    name: 'hypeboy',
    component: HypeboyView
  },
  {
    path: '/supershy',
    name: 'supershy',
    component: SupershyView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
