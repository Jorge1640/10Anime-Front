<template>
  <div class="anime-list-page">
    <SideBar @toggle-sidebar="toggleSidebar" />
    <div class="conten1">
      <AnimeList :animes="filteredAnimes" />
    </div>
    <div class="content2">
      <FilterSection :filters="filters" @apply-filters="applyFilters" @reset-filters="resetFilters" />
    </div>
  </div>
</template>

<script>
import FilterSection from '@/components/FilterSection.vue';
import AnimeList from '@/components/AnimeList.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: 'AnimeListPage',
  components: {
    FilterSection,
    AnimeList,
    SideBar
  },
  data() {
    return {
      filters: [
        { id: 'genre', label: 'Género', options: [
          { value: 'action', text: 'Acción' },
          { value: 'comedy', text: 'Comedia' },
          { value: 'adventure', text: 'Aventura' }
        ]},
        { id: 'country', label: 'País', options: [
          { value: 'japan', text: 'Japón' },
          { value: 'korea', text: 'Corea' }
        ]},
        { id: 'season', label: 'Temporada', options: [
          { value: 'spring', text: 'Primavera' },
          { value: 'summer', text: 'Verano' },
          { value: 'fall', text: 'Otoño' },
          { value: 'winter', text: 'Invierno' }
        ]},
        { id: 'year', label: 'Año', options: [
          { value: '2023', text: '2023' },
          { value: '2022', text: '2022' }
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
        { id: 1, title: "Naruto", image: "path-to-image-1.jpg", genre: "action", country: "japan", season: "spring", year: "2023", type: "tv", status: "airing", language: "japanese" },
        { id: 2, title: "Bleach", image: "path-to-image-2.jpg", genre: "action", country: "japan", season: "summer", year: "2022", type: "tv", status: "completed", language: "japanese" },
        { id: 3, title: "One Piece", image: "path-to-image-3.jpg", genre: "adventure", country: "japan", season: "fall", year: "2023", type: "tv", status: "airing", language: "japanese" }
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
      this.filteredAnimes = this.allAnimes; // Restablece a todos los animes
    },
    filterAnimes() {
      this.filteredAnimes = this.allAnimes.filter(anime => {
        return Object.keys(this.selectedFilters).every(key => {
          const filterValue = this.selectedFilters[key];
          return filterValue === '' || filterValue === undefined || anime[key] === filterValue;
        });
      });
    }
  },
  mounted() {
    this.filteredAnimes = this.allAnimes; // Inicializa la lista filtrada
  }
}
</script>

<style scoped>
.anime-list-page {
  display: flex;
  padding: 20px;
  justify-content: space-between; /* Distribuye espacio entre los elementos */
}

.content2 {
  width: 300px; /* Define un ancho fijo para la sección de filtros */
  display: flex;
  flex-direction: column;
}

.conten1 {
  flex: 1; /* La lista de animes ocupa el espacio restante */
  padding: 50px;
}

/* Media Queries para Responsividad */
@media (max-width: 768px) {
  .anime-list-page {
    flex-direction: column;
  }
  .conten1 {
    padding: 20px;
  }
}
</style>
