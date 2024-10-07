<template>
  <div class="anime-list">
    <div v-for="anime in animes" :key="anime.id" class="card">
      <div class="card__front" :style="{ backgroundImage: `url(${anime.image})` }">
        <h3 class="card__title">{{ anime.title }}</h3> <!-- Título en la parte frontal -->
      </div>
      <div class="card__content">
        <p class="card__description">{{ anime.description }}</p>
        <p class="card__release-date">Released: {{ anime.releaseDate }}</p>
      </div>

      <!-- Carta flotante que aparece al hacer hover -->
      <div class="card__hover-details">
        <h3>{{ anime.title }}</h3>
        <p>Score: 8.18</p>
        <p>Date Aired: {{ anime.releaseDate }}</p>
        <p>Genres: Adventure, Mystery</p>
        <button class="play-button" @click="handleButtonClick(anime)">Watch Now!</button>
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
  gap: 20px;
  justify-content: center; /* Centra los elementos en la fila */
}

.card {
  position: relative;
  width: 100%; 
  max-width: 450px; /* Aumentar el ancho máximo a un tamaño intermedio */
  height: 300px; /* Aumentar la altura a un tamaño intermedio */
  background: linear-gradient(-45deg, #f89b29 0%, #ff0f7b 100%);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
}

.card:hover {
  transform: scale(1.05); /* Ajustar el efecto de hover */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card__front {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: flex-end; /* Alinea el título al fondo */
  justify-content: center; /* Centra el título horizontalmente */
  color: white; /* Color del texto del título */
  padding: 10px; /* Espaciado alrededor del título */
}

.card__title {
  margin: 0;
  font-size: 20px; /* Ajustar el tamaño de fuente del título */
  color: #fff; /* Color del título en la parte frontal */
  font-weight: 700;
}

.card__content {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.8);
  opacity: 1;
  transition: opacity 0.3s ease;
}

.card__hover-details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.8);
  color: white;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover .card__hover-details {
  opacity: 1;
}

.card__description {
  margin: 10px 0 0;
  font-size: 14px; /* Ajustar el tamaño de fuente de la descripción */
  color: #777;
}

.card__release-date {
  margin: 5px 0 0;
  font-size: 12px; /* Ajustar el tamaño de fuente de la fecha */
  color: #999;
}

.play-button {
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  border: .25em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 15px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em .25em var(--glow-color),
              0 0 4em 1em var(--glow-spread-color),
              inset 0 0 .75em .25em var(--glow-color);
  text-shadow: 0 0 .5em var(--glow-color);
  position: relative;
  transition: all 0.3s;
}

.play-button:hover {
  color: var(--btn-color);
  background-color: var(--glow-color);
  box-shadow: 0 0 1em .25em var(--glow-color),
              0 0 4em 2em var(--glow-spread-color),
              inset 0 0 .75em .25em var(--glow-color);
}

.play-button:active {
  box-shadow: 0 0 0.6em .25em var(--glow-color),
              0 0 2.5em 2em var(--glow-spread-color),
              inset 0 0 .5em .25em var(--glow-color);
}

/* Media Queries para Responsividad */
@media (max-width: 768px) {
  .card {
    max-width: 90%; /* Tarjetas ocupan el ancho completo en pantallas pequeñas */
    height: 250px; /* Ajustar altura en pantallas pequeñas */
  }

  .card__title {
    font-size: 18px; /* Ajustar el tamaño de fuente del título */
  }

  .card__description {
    font-size: 12px; /* Ajustar el tamaño de fuente de la descripción */
  }

  .card__release-date {
    font-size: 10px; /* Ajustar el tamaño de fuente de la fecha */
  }
}
</style>