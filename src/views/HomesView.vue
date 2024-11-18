<template>
  <div :class="{ 'home-container': true, 'sidebar-open': isSidebarOpen }">
    <div class="home">
      <SideBar @toggle-sidebar="toggleSidebar"/>
      <div class="main-content">
        <section class="section carousel-section">
          <h2 class="section-title">Carrusel de Animes</h2>
          <CarrouseleComponent />
        </section>
        <div class="content-and-filter-container">
          <section class="section anime-list-section">
            <h2 class="section-title">Lista de Animes</h2>
            <div class="anime-list-container">
              <AnimeList :animes="allAnimes" />
            </div>
          </section>
          <div class="filter-and-top-anime-container">
            <section class="section filter-section">
              <h2 class="section-title">Filtros</h2>
              <div class="filter-section-container">
                <FilterSection :filters="filters" @apply-filters="applyFiltersAndRedirect" @reset-filters="resetFilters" />
              </div>
            </section>
            <section class="section top-anime-section">
              <h2 class="section-title">Top Animes</h2>
              <TopAnime :topAnime="topAnime" />
            </section>
          </div>
        </div>
        <section class="section alphabet-footer-section">
          <h2 class="section-title">Búsqueda por Letra</h2>
          <AlphabetFooter @letter-clicked="redirectToAzPage" />
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import CarrouseleComponent from '@/components/CarrouseleComponent.vue';
import AnimeList from '@/components/AnimeList.vue';
import TopAnime from '@/components/TopAnime.vue';
import FilterSection from '@/components/FilterSection.vue';
import AlphabetFooter from '@/components/AlphabetFooter.vue';
import SideBar from '@/components/SideBar.vue';

export default {
  name: "HomesView",
  components: {
    CarrouseleComponent,
    AnimeList,
    TopAnime,
    FilterSection,
    AlphabetFooter,
    SideBar
  },
  data() {
    return {
      isSidebarOpen: false,
      allAnimes: [
        // Lista de animes
      ],
      topAnime: [
        // Lista de animes top
      ],
      filters: [
        // Opciones de filtros
      ],
      selectedFilters: {}
    };
  },
  created() {
    this.fetchToken();
  },
  methods: {
    async fetchToken() {
      try {
        // Realiza la solicitud al backend para obtener el token
        const response = await axios.get('http://localhost:8080/api/v1/auth/token', {
          withCredentials: true
        });
        const token = response.data.accessToken;

        // Guarda el token en localStorage
        localStorage.setItem('token', token);
        console.log('Token JWT almacenado:', token);

        // Redirige al usuario al dashboard o la página principal
        this.$router.push('/'); // Ajusta el destino según tu estructura de rutas
      } catch (error) {
        console.error('Error al obtener el token:', error);
        this.$router.push('/login'); // Redirige a login en caso de error
      }
    },
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    applyFilters(selectedFilters) {
      this.selectedFilters = selectedFilters;
      // Aquí puedes manejar los filtros aplicados en la página principal
    },
    resetFilters() {
      this.selectedFilters = {};
      // Aquí puedes manejar el reseteo de filtros en la página principal
    },
    applyFiltersAndRedirect(selectedFilters) {
      this.applyFilters(selectedFilters);
      this.$router.push({ name: 'AnimeListPage', query: this.selectedFilters });
    },
    redirectToAzPage(letter) {
      console.log('Redirigiendo a AzPage con letra:', letter);
      this.$router.push({ name: 'AzPage', query: { letter } });
    }
  }
}
</script>


<style scoped>
.home-container {
  display: flex;
  flex-direction: row;
  transition: all 0.3s ease;
}

.sidebar-open .home {
  margin-left: 250px;
}

.home {
  display: flex;
  background: linear-gradient(to bottom, #000000 70%, #1a0033);
  padding: 20px;
  flex-grow: 1;
  transition: margin-left 0.3s ease;
}

.main-content {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.section {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.section-title {
  color: #fff;
  font-size: 1.5em;
  margin-bottom: 15px;
  border-bottom: 2px solid #333;
  padding-bottom: 10px;
}

.content-and-filter-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
}

.anime-list-section {
  flex: 3;
}

.filter-and-top-anime-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.anime-list-container, .filter-section-container {
  background-color: rgba(51, 51, 51, 0.5);
  border-radius: 5px;
  padding: 15px;
}

/* Media Queries para responsividad */
@media (max-width: 1024px) {
  .content-and-filter-container {
    flex-direction: column;
  }
  
  .filter-and-top-anime-container {
    flex-direction: row;
  }
  
  .filter-section, .top-anime-section {
    flex: 1;
  }
}

@media (max-width: 768px) {
  .home {
    padding: 10px;
  }
  
  .sidebar-open .home {
    margin-left: 0;
  }
  
  .filter-and-top-anime-container {
    flex-direction: column;
  }
  
  .section-title {
    font-size: 1.2em;
  }
}

@media (max-width: 480px) {
  .home {
    padding: 5px;
  }
  
  .section {
    padding: 10px;
  }
  
  .section-title {
    font-size: 1em;
  }
}

</style>
