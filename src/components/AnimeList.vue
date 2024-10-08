<template>
  <div class="anime-list">
    <div v-for="anime in animes" :key="anime.id" class="card">
      <div class="card__inner">
        <div class="card__front" :style="{ backgroundImage: `url(${anime.image})` }">
          <h3 class="card__title">{{ anime.title }}</h3>
        </div>
        <div class="card__back">
          <div class="card__content">
            <h3 class="card__title">{{ anime.title }}</h3>
            <p class="card__description">{{ anime.description }}</p>
            <p class="card__release-date">Released: {{ anime.releaseDate }}</p>
            <button class="button" @click="handleButtonClick(anime)">Watch Now!</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import anim1 from '@/assets/anim1.jpeg';
import anim2 from '@/assets/anim2.jpeg';
import anim3 from '@/assets/anim3.jpeg';
import anim4 from '@/assets/anim4.jpeg';

export default {
  name: 'AnimeList',
  data() {
    return {
      animes: [
        { id: 1, title: 'Anime 1', description: 'Descripción del Anime 1', releaseDate: '2021-01-01', image: anim1 },
        { id: 2, title: 'Anime 2', description: 'Descripción del Anime 2', releaseDate: '2021-02-01', image: anim2 },
        { id: 3, title: 'Anime 3', description: 'Descripción del Anime 3', releaseDate: '2021-03-01', image: anim3 },
        { id: 4, title: 'Anime 4', description: 'Descripción del Anime 4', releaseDate: '2021-04-01', image: anim4 },
        { id: 5, title: 'Anime 5', description: 'Descripción del Anime 5', releaseDate: '2021-05-01', image: anim1 },
        { id: 6, title: 'Anime 6', description: 'Descripción del Anime 6', releaseDate: '2021-06-01', image: anim2 },
        { id: 7, title: 'Anime 7', description: 'Descripción del Anime 7', releaseDate: '2021-07-01', image: anim3 },
        { id: 8, title: 'Anime 8', description: 'Descripción del Anime 8', releaseDate: '2021-08-01', image: anim4 },
        { id: 9, title: 'Anime 9', description: 'Descripción del Anime 9', releaseDate: '2021-09-01', image: anim1 },
       
      ]
    };
  },
  methods: {
    handleButtonClick(anime) {
      alert(`Reproduciendo ${anime.title}`);
    }
  }
}
</script>

<style scoped>
.anime-list {
  display: flex;
  flex-wrap: wrap;
  gap: 25px; /* Aumenta la separación entre las tarjetas */
  justify-content: center;
}

.card {
  width: 350px;
  height: 450px;
  perspective: 1000px;
}

.card__inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card:hover .card__inner {
  transform: rotateY(180deg);
}

.card__front, .card__back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
}

.card__front {
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 15px;
  color: white;
}

.card__back {
  background: linear-gradient(-45deg, #121212, #1c1c1c); /* Fondo oscuro, estilo anime */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: rotateY(180deg);
  padding: 20px;
}

.card__content {
  text-align: center;
  padding: 20px;
}

.card__title {
  font-size: 18px;
  font-weight: 700;
  color: #fff;
}

.card__description {
  font-size: 14px;
  color: #ddd;
  margin-top: 10px;
}

.card__release-date {
  font-size: 12px;
  color: #bbb;
  margin-top: 10px;
}

/* Botón animado */
.button {
  position: relative;
  width: 120px;
  height: 40px;
  background-color: #000;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  border: none;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 20px;
}

.button::before {
  content: '';
  position: absolute;
  inset: 0;
  left: -4px;
  top: -1px;
  margin: auto;
  width: 128px;
  height: 48px;
  border-radius: 10px;
  background: linear-gradient(-45deg, #e81cff 0%, #40c9ff 100%);
  z-index: -10;
  pointer-events: none;
  transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.button::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  background: linear-gradient(-45deg, #fc00ff 0%, #00dbde 100%);
  transform: translate3d(0, 0, 0) scale(0.95);
  filter: blur(20px);
}

.button:hover::after {
  filter: blur(30px);
}

.button:hover::before {
  transform: rotate(-180deg);
}

.button:active::before {
  scale: 0.7;
}
</style>
