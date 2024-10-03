import { createRouter, createWebHistory } from 'vue-router';
import HomesView from '@/views/HomesView.vue';
import AzPage from '@/views/AzPage.vue';
import AnimeListPage from '@/views/AnimeListPage.vue'; // Asumiendo que tienes esta ruta

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomesView // Ruta principal que carga HomesView
  },
  {
    path: '/az',
    name: 'AzPage',
    component: AzPage, // Ruta para AzPage
    props: route => ({ letter: route.query.letter }) // Permite pasar el query param como prop
  },
  {
    path: '/anime-list',
    name: 'AnimeListPage',
    component: AnimeListPage, // Ruta para AnimeListPage
    props: route => ({ ...route.query }) // Permite pasar todos los query params como props
  },
  // Otras rutas...
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL), // Configuración del historial
  routes // Rutas definidas
});

export default router;