<template>
  <div class="anime-list-page">
    <FilterSection :filters="filters" @apply-filters="applyFilters" @reset-filters="resetFilters" />
    <AnimeList :animes="filteredAnimes" />
  </div>
</template>

<script>
import FilterSection from '@/components/FilterSection.vue';
import AnimeList from '@/components/AnimeList.vue';

export default {
  name: 'AnimeListPage',
  components: {
    FilterSection,
    AnimeList
  },
  data() {
    return {
      filters: [
        { id: 'genre', label: 'Género', options: [
          { value: 'action', text: 'Acción' },
          { value: 'comedy', text: 'Comedia' },
          // Añade más géneros aquí
        ]},
        { id: 'country', label: 'País', options: [
          { value: 'japan', text: 'Japón' },
          { value: 'korea', text: 'Corea' },
          // Añade más países aquí
        ]},
        { id: 'season', label: 'Temporada', options: [
          { value: 'spring', text: 'Primavera' },
          { value: 'summer', text: 'Verano' },
          { value: 'fall', text: 'Otoño' },
          { value: 'winter', text: 'Invierno' }
        ]},
        { id: 'year', label: 'Año', options: [
          { value: '2023', text: '2023' },
          { value: '2022', text: '2022' },
          // Añade más años aquí
        ]},
        { id: 'type', label: 'Tipo', options: [
          { value: 'tv', text: 'TV' },
          { value: 'movie', text: 'Película' },
          { value: 'ova', text: 'OVA' }
        ]},
        { id: 'status', label: 'Estado', options: [
          { value: 'airing', text: 'En emisión' },
          { value: 'completed', text: 'Completado' }
        ]},
        { id: 'language', label: 'Idioma', options: [
          { value: 'japanese', text: 'Japonés' },
          { value: 'english', text: 'Inglés' }
        ]},
        { id: 'sort', label: 'Ordenar por', options: [
          { value: 'popularity', text: 'Popularidad' },
          { value: 'rating', text: 'Calificación' }
        ]}
      ],
      allAnimes: [
        { id: 1, title: "Naruto", image: "path-to-image-1.jpg", genre: "Acción" },
        { id: 2, title: "Bleach", image: "path-to-image-2.jpg", genre: "Acción" },
        { id: 3, title: "One Piece", image: "path-to-image-3.jpg", genre: "Aventura" },
        { id: 4, title: "Attack on Titan", image: "path-to-image-4.jpg", genre: "Acción" },
        { id: 5, title: "My Hero Academia", image: "path-to-image-5.jpg", genre: "Acción" }
      ],
      selectedFilters: {},
      filteredAnimes: []
    };
  },
  methods: {
    applyFilters(selectedFilters) {
      this.selectedFilters = selectedFilters;
      this.filterAnimes();
    },
    resetFilters() {
      this.selectedFilters = {};
      this.filteredAnimes = this.allAnimes;
    },
    filterAnimes() {
      this.filteredAnimes = this.allAnimes.filter(anime => {
        return Object.keys(this.selectedFilters).every(key => {
          return this.selectedFilters[key] === '' || anime[key] === this.selectedFilters[key];
        });
      });
    }
  },
  mounted() {
    this.filteredAnimes = this.allAnimes;
  }
}
</script>

<style scoped>
.anime-list-page {
  display: flex;
  flex-direction: column;
  padding: 20px;
}

@media (max-width: 768px) {
  .anime-list-page {
    padding: 10px;
  }
}
</style>


