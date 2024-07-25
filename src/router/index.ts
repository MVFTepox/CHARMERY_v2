import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/prueba.vue'
import Home from '@/views/Home.vue'
import registro from '@/views/registro.vue'
import Formulario from '@/views/Formulario.vue'
import SobreNosotros from '@/views/SobreNosotros.vue'



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

  ]
})

export default router
