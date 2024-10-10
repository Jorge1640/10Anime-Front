<template>
    <div class="anime-carousel">
      <h2 class="carousel-title">¡Anime que puedes mirar gratis!</h2>
      <p class="carousel-subtitle">¡Disfruta aquí de algunos de nuestros títulos más populares!</p>
      <div class="carousel-container" ref="container">
        <div class="carousel-slide" v-for="anime in animes" :key="anime.id" @mouseover="showInfo(anime)" @mouseout="hideInfo">
          <img :src="anime.image" :alt="anime.title" class="carousel-image">
          <div class="carousel-info" v-if="hoveredAnime === anime">
            <h3>{{ anime.title }}</h3>
            <p>{{ anime.subtitle }}</p>
          </div>
        </div>
      </div>
      <button class="carousel-control prev" @click="slide('prev')">&lt;</button>
      <button class="carousel-control next" @click="slide('next')">&gt;</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnimeCarousel',
    props: {
      animes: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        hoveredAnime: null
      }
    },
    methods: {
      slide(direction) {
        const container = this.$refs.container;
        const slideWidth = container.offsetWidth;
        const currentScroll = container.scrollLeft;
        const maxScroll = container.scrollWidth - slideWidth;
  
        let newScroll;
        if (direction === 'next') {
          newScroll = Math.min(currentScroll + slideWidth, maxScroll);
        } else {
          newScroll = Math.max(currentScroll - slideWidth, 0);
        }
  
        container.scrollTo({
          left: newScroll,
          behavior: 'smooth'
        });
      },
      showInfo(anime) {
        this.hoveredAnime = anime;
      },
      hideInfo() {
        this.hoveredAnime = null;
      }
    }
  }
  </script>
  
  <style scoped>
  .anime-carousel {
    position: relative;
    width: 100%;
    overflow: hidden;
    background-color: #1a1a1a;
    padding: 20px 0;
  }
  
  .carousel-title {
    color: white;
    font-size: 24px;
    margin-bottom: 10px;
    padding: 0 20px;
  }
  
  .carousel-subtitle {
    color: #cccccc;
    font-size: 16px;
    margin-bottom: 20px;
    padding: 0 20px;
  }
  
  .carousel-container {
    display: flex;
    transition: transform 0.5s ease;
    scroll-behavior: smooth;
    overflow-x: hidden;
    padding: 0 20px;
  }
  
  .carousel-slide {
    flex: 0 0 auto;
    width: 200px;
    margin-right: 15px;
    position: relative;
    transition: transform 0.3s ease;
  }
  
  .carousel-slide:hover {
    transform: scale(1.05);
  }
  
  .carousel-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .carousel-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  
  .carousel-info h3 {
    margin: 0;
    font-size: 14px;
  }
  
  .carousel-info p {
    margin: 5px 0 0;
    font-size: 12px;
    color: #cccccc;
  }
  
  .carousel-control {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;
    border-radius: 50%;
    transition: background-color 0.3s ease;
  }
  
  .carousel-control:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .carousel-control.prev {
    left: 10px;
  }
  
  .carousel-control.next {
    right: 10px;
  }
  </style>