<template>
  <div class="az-page">
    <FeaturedAnimeCard />
    <div class="alphabet-bar">
      <button 
        v-for="letter in alphabet" 
        :key="letter" 
        :class="{ 'active': letter === selectedLetter }"
        @click="filterAnimes(letter)"
      >
        {{ letter }}
      </button>
    </div>

    <div class="content-wrapper">
      <div class="anime-list">
        <div v-for="anime in filteredAnimes" :key="anime.id" class="card">
          <div class="img">
            <img :src="require(`@/assets/${anime.image}`)" :alt="anime.title" />
          </div>
          <div class="textBox">
            <h2 class="title">{{ anime.title }}</h2>
            <p class="date">{{ anime.year }}</p>
            <p class="description">{{ anime.description }}</p>
            <div class="details">
              <span class="episodes">{{ anime.episodes }}</span>
              <span class="rating">{{ anime.rating }}</span>
            </div>
          </div>
        </div>
      </div>

      <div class="top-anime">
        <TopAnime />
      </div>
    </div>
  </div>
</template>

<script>
import TopAnime from '@/components/TopAnime.vue'
import FeaturedAnimeCard from '@/components/FeaturedAnime.vue'

export default {
  name: "AzPage",
  components: {
    TopAnime,
    FeaturedAnimeCard
  },
  data() {
    return {
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),
      selectedLetter: 'A',
      animes: [
        { 
          id: 1, 
          title: "T1 E1 - Ryomen Sukuna", 
          year: "1 de octubre de 2020", 
          episodes: "24 min", 
          image: "jujutsu_kaisen.jpg",
          description: "Itadori Yuji is a high school student with exceptional physical abilities. On the night his grandfather dies he meets Fushiguro Megumi from Jujutsu High.",
          rating: "18+"
        },
        { 
          id: 2, 
          title: "T1 E2 - For Myself", 
          year: "8 de octubre de 2020", 
          episodes: "24 min", 
          image: "jujutsu_kaisen.jpg",
          description: "Itadori wakes up in an unfamiliar room and before him rests Gojo Satoru, a teacher at Jujutsu High, who declares Itadori's secret execution has been decided upon.",
          rating: "18+"
        },
        { 
          id: 3, 
          title: "T1 E3 - Girl of Steel", 
          year: "15 de octubre de 2020", 
          episodes: "24 min", 
          image: "jujutsu_kaisen.jpg",
          description: "Itadori, Fushiguro, and Gojo head out to meet up with the third first year, Kugizaki Nobara. Thereafter they head to an abandoned building where Gojo tasks Itadori and Kugizaki with exorcising the curses lurking inside.",
          rating: "18+"
        },
      ],
    };
  },
  computed: {
    filteredAnimes() {
      return this.animes.filter(anime => anime.title.startsWith(this.selectedLetter));
    }
  },
  methods: {
    filterAnimes(letter) {
      this.selectedLetter = letter;
    }
  }
};
</script>

<style scoped>
.az-page {
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #0f0f0f;
  color: #ffffff;
  min-height: 100vh;
}

.content-wrapper {
  display: flex;
  gap: 30px;
}

.alphabet-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #1a1a1a;
  padding: 10px;
  border-radius: 8px;
}

.alphabet-bar button {
  margin: 3px;
  padding: 8px 12px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;
}

.alphabet-bar button.active,
.alphabet-bar button:hover {
  background-color: #8e44ad;
  transform: scale(1.1);
}

.anime-list {
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.top-anime {
  flex: 1;
  background-color: #1a1a1a;
  padding: 20px;
  border-radius: 10px;
  min-width: 250px;
  max-width: 300px;
  align-self: flex-start;
  position: sticky;
  top: 20px;
}

.card {
  width: 100%;
  background: #1a1a1a;
  border-radius: 12px;
  display: flex;
  align-items: flex-start;
  padding: 20px;
  transition: 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
  background: #252525;
}

.img {
  width: 120px;
  height: 180px;
  border-radius: 8px;
  overflow: hidden;
  flex-shrink: 0;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.textBox {
  margin-left: 20px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.title {
  font-size: 24px;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #fff;
}

.date {
  font-size: 14px;
  color: #888;
  margin-bottom: 10px;
}

.description {
  font-size: 16px;
  color: #bbb;
  margin-bottom: 15px;
  line-height: 1.4;
}

.details {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #bbb;
}

.episodes, .rating {
  background-color: #333;
  padding: 4px 8px;
  border-radius: 4px;
}

@media (max-width: 768px) {
  .content-wrapper {
    flex-direction: column;
  }
  
  .top-anime {
    max-width: none;
    position: static;
  }

  .card {
    flex-direction: column;
  }

  .img {
    width: 100%;
    height: 200px;
    margin-bottom: 15px;
  }

  .textBox {
    margin-left: 0;
  }
}
</style>