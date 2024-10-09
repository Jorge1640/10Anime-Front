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
            <h1 class="h1">{{ anime.title }}</h1>
            <div class="details">
              <span class="year">{{ anime.year }}</span>
              <span class="episodes">{{ anime.episodes }}</span>
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
        { id: 1, title: "Drifting Home", year: 2022, episodes: "Ep Full", image: "anim1.jpeg" },
        { id: 2, title: "Dimension High School", year: 2019, episodes: "Ep 12/12", image: "anim1.jpeg" },
        { id: 3, title: "D-1 Devastator", year: 1992, episodes: "Ep 2/2", image: "anim1.jpeg" },
        { id: 4, title: "D-Frag!", year: 2014, episodes: "Ep 12/12", image: "anim1.jpeg" },
        { id: 5, title: "D-Frag!*", year: 2014, episodes: "Ep 1/1", image: "anim1.jpeg" },
        { id: 6, title: "D.C.III: Da Capo III", year: 2013, episodes: "Ep 13/13", image: "anim1.jpeg" },
        { id: 7, title: "D.Gray-man", year: 2006, episodes: "Ep 103/103", image: "anim1.jpeg" },
        { id: 8, title: "D.Gray-man HALLOW", year: 2016, episodes: "Ep 13/13", image: "anim1.jpeg" },
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
  background-color: #1a1a1a;
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
  background-color: #2a2a2a;
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
  gap: 15px;
}

.top-anime {
  flex: 1;
  background-color: #2a2a2a;
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
  background: #353535;
  border-radius: 12px;
  display: flex;
  align-items: center;
  padding: 15px;
  transition: 0.3s ease-in-out;
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.2);
  background: #3a3a3a;
}

.img {
  width: 80px;
  height: 120px;
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
  justify-content: center;
}

.h1 {
  font-size: 20px;
  font-weight: bold;
  margin: 0 0 10px 0;
  color: #fff;
}

.details {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #bbb;
}

.year, .episodes {
  background-color: #444;
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

  .img {
    width: 60px;
    height: 90px;
  }

  .h1 {
    font-size: 18px;
  }

  .details {
    font-size: 12px;
  }
}
</style>