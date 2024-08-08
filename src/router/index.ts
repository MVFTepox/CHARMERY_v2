import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/prueba.vue'
import Home from '@/views/Home.vue'
import registro from '@/views/Registro.vue'
import Formulario from '@/views/Formulario.vue'
import SobreNosotros from '@/views/SobreNosotros.vue'
import vistaProducto from '@/views/vistaProducto.vue'
import login from '@/views/Login.vue'





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/prueba',
      name: 'prueba',
      component: HomeView
    },
    {
      path: '/registrarse',
      name: 'registrarse',
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

  ]
})

export default router
