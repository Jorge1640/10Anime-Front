<template>
  <div :class="{ 'home-container': true, 'sidebar-open': isSidebarOpen }">
    <div class="home">
      <SideBar @toggle-sidebar="toggleSidebar"/>
      <div class="main-content">
        <section class="section carousel-section">
          <h2 class="section-title">Carrusel de Animes</h2>
          <CarrouseleComponent />
        </section>
        <div class="content-and-filter-container">
          <section class="section anime-list-section">
            <h2 class="section-title">Lista de Animes</h2>
            <div class="anime-list-container">
              <AnimeList :animes="allAnimes" />
            </div>
          </section>
          <div class="filter-and-top-anime-container">
            <section class="section filter-section">
              <h2 class="section-title">Filtros</h2>
              <div class="filter-section-container">
                <FilterSection :filters="filters" @apply-filters="applyFiltersAndRedirect" @reset-filters="resetFilters" />
              </div>
            </section>
            <section class="section top-anime-section">
              <h2 class="section-title">Top Animes</h2>
              <TopAnime :topAnime="topAnime" />
            </section>
          </div>
        </div>
        <section class="section alphabet-footer-section">
          <h2 class="section-title">Búsqueda por Letra</h2>
          <AlphabetFooter @letter-clicked="redirectToAzPage" />
        </section>
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
  margin-left: 250px;
}

.home {
  display: flex;
  background: linear-gradient(to bottom, #000000 70%, #1a0033);
  padding: 20px;
  flex-grow: 1;
  transition: margin-left 0.3s ease;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #fff;
  font-size: 1.5em;
  margin-bottom: 15px;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
}

.content-and-filter-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
}

.anime-list-section {
  flex: 3;
}

.filter-and-top-anime-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.anime-list-container, .filter-section-container {
  background-color: rgba(51, 51, 51, 0.5);
  border-radius: 5px;
  padding: 15px;
}

/* Media Queries para responsividad */
@media (max-width: 1024px) {
  .content-and-filter-container {
    flex-direction: column;
  }
  
  .filter-and-top-anime-container {
    flex-direction: row;
  }
  
  .filter-section, .top-anime-section {
    flex: 1;
  }
}

@media (max-width: 768px) {
  .home {
    padding: 10px;
  }
  
  .sidebar-open .home {
    margin-left: 0;
  }
  
  .filter-and-top-anime-container {
    flex-direction: column;
  }
  
  .section-title {
    font-size: 1.2em;
  }
}

@media (max-width: 480px) {
  .home {
    padding: 5px;
  }
  
  .section {
    padding: 10px;
  }
  
  .section-title {
    font-size: 1em;
  }
}
</style>