<template>
  <!-- Carrusel de animes -->
  <div class="carousel-container" @mouseover="hovering = true" @mouseleave="hovering = false">
    <button class="carousel-btn left" @click="prevSlide">←</button>
    <div class="carousel" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div class="carousel-item" v-for="(anime, index) in animes" :key="index" :class="{ active: hovering && index === currentSlide }">
        <img :src="anime.image" :alt="anime.title" />
        <div class="carousel-content">
          <h3>{{ anime.title }}</h3>
          <p>{{ anime.description }}</p>
          <button class="view-more-btn">Ver más</button>
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
export default {
  name: 'CarrouseleComponent',
  data() {
    return {
      currentSlide: 0,
      hovering: false,
      animes: [
        { id: 1, title: "Naruto", image: "path-to-image-1.jpg", description: "Un ninja joven con un demonio zorro dentro de él." },
        { id: 2, title: "Bleach", image: "path-to-image-2.jpg", description: "Un adolescente con habilidades de shinigami." },
        { id: 3, title: "One Piece", image: "path-to-image-3.jpg", description: "Un pirata en busca del tesoro más grande del mundo." },
        { id: 4, title: "Attack on Titan", image: "path-to-image-4.jpg", description: "Humanos luchando contra gigantes devoradores de hombres." },
        { id: 5, title: "My Hero Academia", image: "path-to-image-5.jpg", description: "Un joven sin poderes en un mundo lleno de héroes." }
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
  height: 400px;
  overflow: hidden;
  background-color: #222;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.carousel {
  display: flex;
  transition: transform 0.5s ease;
}

.carousel-item {
  min-width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #4e2a84;
  color: white;
  padding: 20px;
  box-sizing: border-box;
  transition: opacity 0.5s ease;
}

.carousel-item img {
  max-width: 100%;
  max-height: 60%;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.carousel-content {
  margin-top: 20px;
}

.carousel-content h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.carousel-content p {
  font-size: 1rem;
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
  font-size: 18px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.3s;
  border-radius: 50%;
}

.carousel-container:hover .carousel-btn {
  opacity: 1;
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

.view-more-btn {
  background-color: #ff6347;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.view-more-btn:hover {
  background-color: #e5533f;
}
</style>

