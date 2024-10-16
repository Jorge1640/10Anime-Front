// src/services/UserService.js
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/v1/genre';

export default {
  getAllGenres() {
    return axios.get(`${API_URL}`); // Cambiado a comillas invertidas
  },
  createGenre(genre) {
    return axios.post(`${API_URL}/registry`, genre); // Corregido: se añadió la comilla invertida que faltaba
  }
};
