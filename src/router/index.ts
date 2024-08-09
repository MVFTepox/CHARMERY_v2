import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/prueba.vue'
import Home from '@/views/Home.vue'
import registro from '@/views/registro.vue'
import Formulario from '@/views/Formulario.vue'
import SobreNosotros from '@/views/SobreNosotros.vue'
import vistaProducto from '@/views/vistaProducto.vue'
import login from '@/views/Login.vue'
import account from '@/views/account.vue'
import Navbarr from '@/components/Navbarr.vue'
import MiCuenta from '@/components/MiCuenta.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: HomeView
    },
    {
      path: '/registro',
      name: 'registro',
      component: registro
    },
    {
      path: '/formulario',
      name: 'formulario',
      component: Formulario
    },
    {
      path: '/sobrenosotros',
      name: 'sobrenosotros',
      component: SobreNosotros
    },
    {
      path: '/vistaproducto',
      name: 'vistaproducto',
      component: vistaProducto
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/account',
      name: 'account',
      component: account
    },
    {
      path: '/navbarr',
      name: 'navbarr',
      component: Navbarr
    },
    {
      path: '/MiCuenta',
      name: 'MiCuenta',
      component: MiCuenta
    }
  ]
})

export default router
