<template>
  <aside class="top-anime">
    <h3>Top Anime</h3>
    <div class="filter">
      <label for="top-anime-filter">Filter:</label>
      <select id="top-anime-filter" v-model="topAnimeFilter" @change="filterTopAnime">
        <option value="today">Today</option>
        <option value="weekend">Weekend</option>
        <option value="year">Year</option>
      </select>
    </div>
    <ol class="top-anime-list">
      <li v-for="anime in filteredTopAnime" :key="anime.id" class="top-anime-item">
        <img :src="anime.image" :alt="anime.title">
        <div class="top-anime-info">
          <h4>{{ anime.title }}</h4>
          <p>Score: {{ anime.score }}</p>
        </div>
      </li>
    </ol>
  </aside>
</template>

<script>
export default {
  name: 'TopAnime',
  props: {
    topAnime: Array
  },
  data() {
    return {
      topAnimeFilter: 'today',
      filteredTopAnime: []
    };
  },
  methods: {
    filterTopAnime() {
      this.filteredTopAnime = this.topAnime.filter(anime => anime.filter === this.topAnimeFilter);
    }
  },
  mounted() {
    this.filterTopAnime();
  }
}
</script>

<style scoped>
.top-anime {
  flex: 1;
  padding: 20px;
  background-color: #333;
  color: white;
}

.top-anime h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.top-anime .filter {
  margin-bottom: 20px;
}

.top-anime-list {
  list-style-position: inside;
  padding: 0;
}

.top-anime-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  background-color: #444;
  padding: 10px;
  border-radius: 5px;
}

.top-anime-item img {
  width: 60px;
  height: 90px;
  object-fit: cover;
  margin-right: 15px;
}

.top-anime-info {
  flex-grow: 1;
}

.top-anime-info h4 {
  margin: 0 0 5px 0;
  font-size: 1rem;
}

.top-anime-info p {
  margin: 0;
  font-size: 0.9rem;
  color: #ccc;
}
</style>