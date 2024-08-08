import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/prueba.vue'
import Home from '@/views/homeverdadero.vue'
import registro from '@/views/registro.vue'
import Formulario from '@/views/Formulario.vue'
import SobreNosotros from '@/views/SobreNosotros.vue'
import vistaProducto from '@/views/vistaProducto.vue'
import login from '@/views/Login.vue'
import confirmationPage from '@/views/pedidoConfirmado.vue'






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
    {
      path: '/pedidoConfirm',
      name: 'pedidoConfirm',
      component: confirmationPage
    }
  ]
})

export default router
