<template>
  <div :class="{ 'home-container': true, 'sidebar-open': isSidebarOpen }">
    <div class="home">
      <SideBar @toggle-sidebar="toggleSidebar"/>
      <div class="main-content">
        <CarrouseleComponent />
        <div class="content-and-filter-container">
          <div class="anime-list-container">
            <AnimeList :animes="allAnimes" />
          </div>
          <div class="filter-and-top-anime-container">
            <div class="filter-section-container">
              <FilterSection :filters="filters" @apply-filters="applyFiltersAndRedirect" @reset-filters="resetFilters" />
            </div>
            <TopAnime :topAnime="topAnime" />
          </div>
        </div>
        <AlphabetFooter @letter-clicked="redirectToAzPage" />
      </div>
    </div>
  </div>
</template>

<script>
import CarrouseleComponent from '@/components/CarrouseleComponent.vue';
import AnimeList from '@/components/AnimeList.vue';
import TopAnime from '@/components/TopAnime.vue';
import FilterSection from '@/components/FilterSection.vue';
import AlphabetFooter from '@/components/AlphabetFooter.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: "HomesView",
  components: {
    CarrouseleComponent,
    AnimeList,
    TopAnime,
    FilterSection,
    AlphabetFooter,
    SideBar
  },
  data() {
    return {
      isSidebarOpen: false,
      allAnimes: [
        { id: 1, title: "Fullmetal Alchemist: Brotherhood", image: "path-to-image", genre: "Action, Adventure", country: "japan", season: "spring", year: "2023", type: "tv", status: "completed", language: "japanese" },
        { id: 2, title: "Death Note", image: "path-to-image", genre: "Mystery, Supernatural", country: "japan", season: "fall", year: "2022", type: "tv", status: "completed", language: "japanese" },
        { id: 3, title: "Steins;Gate", image: "path-to-image", genre: "Sci-Fi, Thriller", country: "japan", season: "summer", year: "2022", type: "tv", status: "completed", language: "japanese" },
        { id: 4, title: "Hunter x Hunter", image: "path-to-image", genre: "Action, Adventure", country: "japan", season: "winter", year: "2023", type: "tv", status: "airing", language: "japanese" },
        { id: 5, title: "Code Geass", image: "path-to-image", genre: "Mecha, Sci-Fi", country: "japan", season: "spring", year: "2022", type: "tv", status: "completed", language: "japanese" },
        { id: 6, title: "Haikyuu!!", image: "path-to-image", genre: "Sports, Comedy", country: "japan", season: "fall", year: "2023", type: "tv", status: "airing", language: "japanese" },
        { id: 7, title: "Neon Genesis Evangelion", image: "path-to-image", genre: "Mecha, Psychological", country: "japan", season: "summer", year: "2022", type: "tv", status: "completed", language: "japanese" },
        { id: 8, title: "Your Lie in April", image: "path-to-image", genre: "Drama, Music", country: "japan", season: "spring", year: "2023", type: "tv", status: "completed", language: "japanese" },
        { id: 9, title: "One Punch Man", image: "path-to-image", genre: "Action, Comedy", country: "japan", season: "fall", year: "2022", type: "tv", status: "completed", language: "japanese" },
        { id: 10, title: "Cowboy Bebop", image: "path-to-image", genre: "Space Western, Sci-Fi", country: "japan", season: "winter", year: "2023", type: "tv", status: "completed", language: "japanese" }
      ],
      topAnime: [
        { id: 1, title: "Fullmetal Alchemist: Brotherhood", image: "path-to-image", score: 9.2, filter: "today" },
        { id: 2, title: "Death Note", image: "path-to-image", score: 9.0, filter: "today" },
        { id: 3, title: "Attack on Titan", image: "path-to-image", score: 8.9, filter: "today" },
        { id: 4, title: "One Punch Man", image: "path-to-image", score: 8.8, filter: "weekend" },
        { id: 5, title: "My Hero Academia", image: "path-to-image", score: 8.7, filter: "weekend" },
        { id: 6, title: "Demon Slayer", image: "path-to-image", score: 8.6, filter: "weekend" },
        { id: 7, title: "Steins;Gate", image: "path-to-image", score: 9.1, filter: "year" },
        { id: 8, title: "Code Geass", image: "path-to-image", score: 8.9, filter: "year" },
        { id: 9, title: "Hunter x Hunter", image: "path-to-image", score: 9.1, filter: "year" },
        { id: 10, title: "Haikyuu!!", image: "path-to-image", score: 8.7, filter: "year" }
      ],
      filters: [
        { id: 'genre', label: 'Género', options: [
          { value: 'action', text: 'Acción' },
          { value: 'comedy', text: 'Comedia' },
        ]},
        { id: 'country', label: 'País', options: [
          { value: 'japan', text: 'Japón' },
          { value: 'korea', text: 'Corea' },
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
      selectedFilters: {}
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    applyFilters(selectedFilters) {
      this.selectedFilters = selectedFilters;
      // Aquí puedes manejar los filtros aplicados en la página principal
    },
    resetFilters() {
      this.selectedFilters = {};
      // Aquí puedes manejar el reseteo de filtros en la página principal
    },
    applyFiltersAndRedirect(selectedFilters) {
      this.applyFilters(selectedFilters);
      this.$router.push({ name: 'AnimeListPage', query: this.selectedFilters });
    },
    redirectToAzPage(letter) {
      console.log('Redirigiendo a AzPage con letra:', letter);
      this.$router.push({ name: 'AzPage', query: { letter } });
    }
  }
}
</script>

<style scoped>
.home-container {
  display: flex;
  flex-direction: row;
  transition: all 0.3s ease;
}

.sidebar-open .home {
  margin-left: 250px; /* Ancho del sidebar cuando está abierto */
}

.home {
  display: flex;
  background: linear-gradient(to bottom, #000000 70%, #1a0033); /* Degradado de negro a un morado oscuro ocupando el 30% */
  padding: 20px;
  flex-grow: 1;
  transition: margin-left 0.3s ease;
}


.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.content-and-filter-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.anime-list-container {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-right: 20px;
}

.filter-and-top-anime-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter-section-container {
  background-color: #333;
  padding: 15px;
  border-radius: 5px;
}

/* Estilos para el Sidebar */
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 120px;
  background-color: #333;
  transition: width 0.3s ease;
}

.sidebar.open {
  width: 250px;
}

.sidebar.close {
  width: 70px;
}
</style>