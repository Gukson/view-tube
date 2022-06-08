import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from "@/store";
// import STORED_API_KEY from '/src/API_KEYS.txt'

// HANDLE API KEY
// const API_KEY = STORED_API_KEY

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/movie/:id',
    component: () => import('../views/WatchView.vue'),
    name: 'watch',
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach(() => {
  // store.commit('setAPIKey', { key: API_KEY })
  store.commit('purgeState', { toPurge: 'movies'})
})
export default router
