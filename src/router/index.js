import { createRouter, createWebHistory } from 'vue-router';
import HomesView from '@/views/HomesView.vue';
import AnimeListPage from '@/views/AnimeListPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomesView
  },
  {
    path: '/anime-list',
    name: 'AnimeListPage',
    component: AnimeListPage
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;