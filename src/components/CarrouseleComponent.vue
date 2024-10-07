<template>
  <!-- Carrusel de animes -->
  <div class="carousel-container" @mouseover="hovering = true" @mouseleave="hovering = false">
    <button class="carousel-btn left" @click="prevSlide">←</button>
    <div class="carousel" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="carousel-item" v-for="(anime, index) in animes" :key="index" :class="{ active: hovering && index === currentSlide }" 
           :style="{ backgroundImage: `url(${anime.image})` }"> <!-- Establecer la imagen de fondo aquí -->
        <div class="carousel-content">
          <div class="text-content">
            <h3>{{ anime.title }}</h3>
            <p>{{ anime.description }}</p>
          </div>
          <button class="btn">Watch now</button>
        </div>
      </div>
    </div>
    <button class="carousel-btn right" @click="nextSlide">→</button>
    <div class="carousel-indicators">
      <span v-for="(anime, index) in animes" :key="index" :class="{ active: index === currentSlide }" @click="goToSlide(index)"></span>
    </div>
  </div>
</template>

<script>
import uno from '@/assets/uno.jpg';
import dos from '@/assets/dos.jpg';
import tres from '@/assets/tres.jpg';

export default {
  name: 'CarrouseleComponent',
  data() {
    return {
      currentSlide: 0,
      hovering: false,
      animes: [
        { id: 1, title: "Anime Uno", image: uno, description: "Descripción del anime uno." },
        { id: 2, title: "Anime Dos", image: dos, description: "Descripción del anime dos." },
        { id: 3, title: "Anime Tres", image: tres, description: "Descripción del anime tres." }
      ]
    };
  },
  methods: {
    prevSlide() {
      this.currentSlide = (this.currentSlide - 1 + this.animes.length) % this.animes.length;
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.animes.length;
    },
    goToSlide(index) {
      this.currentSlide = index;
    }
  }
}
</script>

<style scoped>
/* Estilos para el carrusel */
.carousel-container {
  position: relative;
  width: 100%;
  height: 50vh; /* Ajuste de altura, ahora un poco más pequeña */
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
  height: 100%;
}

.carousel-item {
  min-width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Mover el contenido hacia abajo */
  align-items: center;
  text-align: center;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.carousel-content {
  position: relative;
  z-index: 1;
  color: white;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
}

.text-content {
  margin-bottom: 10px;
}

.carousel-content h3 {
  font-size: 2rem; /* Mantengo el tamaño grande del texto */
  margin-bottom: 10px;
}

.carousel-content p {
  font-size: 1.2rem; /* Mantengo el tamaño de la descripción */
  margin-bottom: 20px;
}

.carousel-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 2rem; /* Hacer los botones más grandes */
  cursor: pointer;
  opacity: 1;
  transition: opacity 0.3s;
  border-radius: 50%;
  z-index: 2; /* Asegúrate de que el botón esté por encima del contenido */
}

.carousel-btn.left {
  left: 10px;
}

.carousel-btn.right {
  right: 10px;
}

.carousel-indicators {
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 5px;
}

.carousel-indicators span {
  display: block;
  width: 10px;
  height: 10px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.3s;
}

.carousel-indicators span.active {
  background-color: rgba(255, 255, 255, 1);
}

/* Estilos para el botón */
.btn {
  font-size: 1.5rem; /* Aumentar el tamaño del botón */
  padding: 1.2rem 2.5rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
}

.btn:active {
  scale: 0.92;
}

.btn:hover {
  background: rgb(2,29,78);
  background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgba(31, 215, 232, 0.873) 60%);
  color: rgb(4, 4, 38);
}
</style>