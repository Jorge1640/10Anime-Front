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
      selectedFilter: 'today',
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
    this.filterAnimes();
  }
}
</script>

<style scoped>
.filter-container {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
}

h3 {
  text-align: center;
  color: #fff;
}

.filter-select {
  width: 100%;
  max-width: 220px;
  height: 50px;
  background-color: rgba(36, 40, 50, 1);
  color: #fff;
  border: 2px solid transparent;
  border-radius: 10px;
  padding: 0 20px;
  cursor: pointer;
  appearance: none;
  background-image: linear-gradient(to right, #2d3750, #2d3750), linear-gradient(to right, #435dd8, #435dd8);
  background-size: 100% 100%, 0 100%;
  background-position: center;
  background-repeat: no-repeat;
  transition: background-size 0.3s ease;
  align-self: center;
}

.filter-select:hover {
  background-size: 100% 100%, 100% 100%;
}

.filter-select:focus {
  outline: none;
  border-color: #435dd8;
}

.anime-list {
  list-style-type: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.anime-item {
  color: #fff;
  padding: 20px;
  border-radius: 10px;
  background-size: cover;
  background-position: center;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: transform 0.3s ease;
}

.anime-item:hover {
  transform: scale(1.05);
}

.anime-title {
  position: relative;
  z-index: 1;
  font-size: 1.2rem;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
}

@media (max-width: 768px) {
  .anime-list {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
}

@media (max-width: 480px) {
  .anime-list {
    grid-template-columns: 1fr;
  }

  .anime-item {
    height: 120px;
  }
}
</style>