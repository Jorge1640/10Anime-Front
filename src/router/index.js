// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomesView from '@/views/HomesView.vue';
import AzPage from '@/views/AzPage.vue';
import AnimeListPage from '@/views/AnimeListPage.vue';
import LoginPage from '../views/LoginPage.vue'; // Asegúrate de que la ruta sea correcta
import TestView from '@/views/TestView.vue'; // Asegúrate de que la ruta sea correcta

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomesView
  },
  {
    path: '/az',
    name: 'AzPage',
    component: AzPage,
    props: route => ({ letter: route.query.letter }) // Permite pasar el query param como prop
  },
  {
    path: '/anime-list',
    name: 'AnimeListPage',
    component: AnimeListPage,
    props: route => ({ ...route.query })
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginPage
  },  {
    path: '/test',
    name: 'test-view', // Cambiado a un nombre de ruta más descriptivo
    component: TestView,
  },
  // Otras rutas...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
