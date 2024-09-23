import { createRouter, createWebHistory } from 'vue-router';
import InicioSesion from './components/InicioSesion.vue';
import Registrarse from './components/Registrarse.vue';






const routes = [
  {
    path: '/',
    name: 'InicioSesion',
    component: InicioSesion
  },
  {
    path: '/registrarse',
    name: 'Registrarse',
    component: Registrarse
  },
 
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
