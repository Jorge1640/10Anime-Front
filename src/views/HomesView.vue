<template>
  <div class="home">
    <CarrouseleComponent />
    <section class="content-container">
      <div class="anime-list-container">
        <AnimeList :animes="allAnimes" />
        <TopAnime :topAnime="topAnime" />
      </div>
      <div class="filter-section-container">
        <FilterSection :filters="filters" @apply-filters="applyFiltersAndRedirect" @reset-filters="resetFilters" />
      </div>
    </section>
    <AlphabetFooter />
  </div>
</template>

<script>
import CarrouseleComponent from '@/components/CarrouseleComponent.vue';
import AnimeList from '@/components/AnimeList.vue';
import TopAnime from '@/components/TopAnime.vue';
import FilterSection from '@/components/FilterSection.vue';
import AlphabetFooter from '@/components/AlphabetFooter.vue';

export default {
  name: "HomesView",
  components: {
    CarrouseleComponent,
    AnimeList,
    TopAnime,
    FilterSection,
    AlphabetFooter
  },
  data() {
    return {
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
      selectedFilters: {}
    };
  },
  methods: {
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
    }
  }
}
</script>

<style scoped>
.home {
  background-color: #222;
  padding: 20px;
}

.content-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.anime-list-container {
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.filter-section-container {
  flex: 1;
  margin-left: 20px;
  background-color: #333;
  padding: 15px;
  border-radius: 5px;
}

.filter-section-small {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-section-small button {
  padding: 10px 20px;
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.filter-section-small button:hover {
  background-color: #3a9d70;
}
</style>