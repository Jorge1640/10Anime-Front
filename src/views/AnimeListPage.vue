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
import axios from 'axios';
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
        { id: 'genre', label: 'Género', options: [{ value: 'action', text: 'Acción' }, { value: 'comedy', text: 'Comedia' }, { value: 'adventure', text: 'Aventura' }] },
        { id: 'country', label: 'País', options: [{ value: 'japan', text: 'Japón' }, { value: 'korea', text: 'Corea' }] },
        { id: 'season', label: 'Temporada', options: [{ value: 'spring', text: 'Primavera' }, { value: 'summer', text: 'Verano' }, { value: 'fall', text: 'Otoño' }, { value: 'winter', text: 'Invierno' }] },
        { id: 'year', label: 'Año', options: [{ value: '2023', text: '2023' }, { value: '2022', text: '2022' }] },
        { id: 'type', label: 'Tipo', options: [{ value: 'tv', text: 'TV' }, { value: 'movie', text: 'Película' }, { value: 'ova', text: 'OVA' }] },
        { id: 'status', label: 'Estado', options: [{ value: 'airing', text: 'En emisión' }, { value: 'completed', text: 'Completado' }] },
        { id: 'language', label: 'Idioma', options: [{ value: 'japanese', text: 'Japonés' }, { value: 'english', text: 'Inglés' }] },
        { id: 'sort', label: 'Ordenar por', options: [{ value: 'popularity', text: 'Popularidad' }, { value: 'rating', text: 'Calificación' }] }
      ],
      allAnimes: [], // Se iniciará como un array vacío
      selectedFilters: {} // Mantiene los filtros seleccionados
    };
  },
  computed: {
    filteredAnimes() {
      return this.allAnimes.filter(anime => {
        return Object.entries(this.selectedFilters).every(([key, value]) => {
          if (value && value !== '') {
            if (key === 'genre') {
              return anime.genre.toLowerCase().includes(value.toLowerCase()); // Filtrado por género
            }
            return anime[key] === value; // Filtrado por otras propiedades
          }
          return true; // Si no hay valor, no filtra
        });
      });
    }
  },
  methods: {
    applyFilters(selectedFilters) {
      this.selectedFilters = { ...selectedFilters }; // Actualiza los filtros seleccionados
      console.log('Selected Filters:', this.selectedFilters); // Verifica los filtros seleccionados
    },
    resetFilters() {
      this.selectedFilters = {}; // Restablece los filtros
    },
    toggleSidebar() {
      // Implementa la lógica para mostrar/ocultar la barra lateral
    },
    fetchAnimes() {
      axios.get('/api/animes')
        .then(response => {
          this.allAnimes = response.data; // Asigna la respuesta a allAnimes
        })
        .catch(error => {
          console.error('Error fetching animes:', error); // Muestra un error si ocurre
        });
    }
  },
  mounted() {
    this.fetchAnimes(); // Llama a la función para obtener los datos de animes al montar el componente
  }
}
</script>

<style scoped>
.anime-list-page {
  display: flex;
  padding: 20px;
  justify-content: space-between;
}

.content2 {
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: rgba(28, 28, 30, 0.7); /* Ajusta la opacidad aquí (0.7 es más transparente que 0.8) */
  border-radius: 10px; /* Añade bordes redondeados si lo deseas */
  padding: 20px; /* Añade un poco de padding para que el contenido no esté pegado a los bordes */
}

.conten1 {
  flex: 1;
  padding: 50px;
}

@media (max-width: 768px) {
  .anime-list-page {
    flex-direction: column;
  }
  .conten1 {
    padding: 20px;
  }
}
</style>
