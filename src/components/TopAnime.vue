<template>
  <div class="filter-container">
    <h3>Filtrar Top Anime</h3>
    <select v-model="selectedFilter" class="filter-select" @change="filterAnimes">
      <option value="today">Today</option>
      <option value="weekend">Weekend</option>
      <option value="year">Year</option>
    </select>
    <ul class="anime-list">
      <li v-for="anime in filteredAnimes" :key="anime.id" class="anime-item" :style="{ backgroundImage: `url(${anime.image})` }">
        <div class="anime-title">{{ anime.title }}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import anim1 from '@/assets/anim1.jpeg';
import anim2 from '@/assets/anim2.jpeg';
import anim3 from '@/assets/anim3.jpeg';
import anim4 from '@/assets/anim4.jpeg';

export default {
  name: 'TopAnime',
  data() {
    return {
      selectedFilter: 'today', // Valor por defecto
      animes: [
        { id: 1, title: 'Anime 1', filter: 'today', image: anim1 },
        { id: 2, title: 'Anime 2', filter: 'today', image: anim2 },
        { id: 3, title: 'Anime 3', filter: 'today', image: anim3 },
        { id: 4, title: 'Anime 4', filter: 'weekend', image: anim4 },
        { id: 5, title: 'Anime 5', filter: 'weekend', image: anim1 },
        { id: 6, title: 'Anime 6', filter: 'weekend', image: anim2 },
        { id: 7, title: 'Anime 7', filter: 'year', image: anim3 },
        { id: 8, title: 'Anime 8', filter: 'year', image: anim4 },
        { id: 9, title: 'Anime 9', filter: 'year', image: anim1 },
      ],
      filteredAnimes: []
    };
  },
  methods: {
    filterAnimes() {
      this.filteredAnimes = this.animes.filter(anime => anime.filter === this.selectedFilter);
    }
  },
  mounted() {
    this.filterAnimes(); // Filtra los animes al cargar el componente
  }
}
</script>

<style scoped>
.filter-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.filter-select {
  width: 220px;
  height: 50px;
  background-color: rgba(36, 40, 50, 1);
  color: #fff;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 0 20px;
  cursor: pointer;
  appearance: none; /* Elimina el estilo predeterminado del select */
  background-image: linear-gradient(to right, #2d3750, #2d3750), linear-gradient(to right, #435dd8, #435dd8);
  background-size: 100% 100%, 0 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease;
}

.filter-select:hover {
  background-size: 100% 100%, 100% 100%; /* Efecto de hover */
}

.filter-select:focus {
  outline: none; /* Elimina el contorno predeterminado */
  border-color: #435dd8; /* Cambia el color del borde al enfocar */
}

.anime-list {
  list-style-type: none;
  padding: 0;
}

.anime-item {
  color: #fff;
  padding: 20px;
  margin: 10px 0;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  height: 100px; /* Ajusta la altura según sea necesario */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.anime-title {
  position: relative;
  z-index: 1; /* Asegura que el texto esté por encima de la imagen de fondo */
  font-size: 1.2rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Sombra para mejorar la legibilidad */
}
</style>