<template>
  <div class="all-animes">
    <h3>Animes</h3>
    <ol class="anime-list">
      <li v-for="anime in animes" :key="anime.id" class="anime-item">
        <img :src="anime.image" :alt="anime.title">
        <div class="anime-info">
          <h4>{{ anime.title }}</h4>
          <p>{{ anime.genre }}</p>
        </div>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'AnimeList',
  props: {
    animes: Array
  }
}
</script>

<style scoped>
.all-animes {
  flex: 3;
  padding: 20px;
  background-color: #333;
}

.all-animes h3 {
  font-size: 1.5rem;
  margin-bottom: 20px;
}

.all-animes .anime-list {
  list-style-position: inside;
  padding: 0;
}

.all-animes .anime-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
}

.all-animes .anime-item img {
  width: 100px;
  height: 150px;
  object-fit: cover;
  margin-right: 20px;
}

.all-animes .anime-info {
  flex-grow: 1;
}

.all-animes .anime-info h4 {
  margin: 0 0 5px 0;
  font-size: 1.2rem;
}

.all-animes .anime-info p {
  margin: 0;
  color: #666;
}
</style>