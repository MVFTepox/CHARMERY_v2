import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import account from '@/views/MiCuenta.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/account',
      name: 'account',
      component: account
    }
  ]
})

export default router
