import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1/anime', // URL del backend en Spring Boot
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  registerAnime(requestAnimeDTO) {
    return apiClient.post('/registry', requestAnimeDTO);
  },
  editAnime(animeId, requestAnimeDTO) {
    return apiClient.post(`/edit/${animeId}`, requestAnimeDTO);
  },
  getAllAnimes() {
    return apiClient.get('/find');
  },
  getAnimeByName(animeName) {
    return apiClient.get(`/find/${animeName}`);
  },
  getAnimeByYear(year) {
    return apiClient.get(`/find/byyear/${year}`);
  },
  getAnimeByGenre(animeGenre) {
    return apiClient.get(`/find/bygenre/${animeGenre}`);
  },
  getAnimeByType(animeType) {
    return apiClient.get(`/find/bytype/${animeType}`);
  },
  getTopToday() {
    return apiClient.get('/find/toptoday');
  },
  getTopWeek() {
    return apiClient.get('/find/topweek');
  },
  getTopMonth() {
    return apiClient.get('/find/topmonth');
  },
  getRandomAnime() {
    return apiClient.get('/find/random');
  }
};

