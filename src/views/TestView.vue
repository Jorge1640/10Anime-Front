<template>
  <div>
    <h1>Genre List</h1>
    <!-- Revisa si genres tiene datos antes de mostrar la lista -->
    <ul>
      <li v-for="genre in genres" :key="genre.genre_id">{{ genre.name }}</li>
    </ul>
    
    <!-- Enlaza el input al v-model correcto -->
    <input v-model="newGenreName" placeholder="Enter genre name" />

    <!-- Asegúrate de que el click llame a addGenre -->
    <button @click="addGenre">Add Genre</button>
  </div>
</template>

<script>
import GenreServices from '@/services/GenreServices';

export default {
  data() {
    return {
      genres: [], // Arreglo vacío inicial para los géneros
      newGenreName: '' // Enlace correcto al input
    };
  },
  created() {
    this.fetchGenres(); // Carga la lista de géneros al crearse el componente
  },
  methods: {
    // Método para obtener los géneros desde el servicio
    fetchGenres() {
  GenreServices.getAllGenres()
    .then(response => {
      console.log(response.data); // Esto te permitirá ver los datos que llegan
      this.genres = response.data;
    })
    .catch(error => {
      console.error('Error fetching genres:', error);
    });
},
    
    // Método para agregar un género
    addGenre() {
      if (this.newGenreName.trim() === '') {
        alert('Please enter a genre name'); // Validación básica
        return;
      }
      
      const newGenre = { name: this.newGenreName }; // Crear el objeto del nuevo género
      
      GenreServices.createGenre(newGenre)
        .then(() => {
          this.fetchGenres(); // Actualiza la lista de géneros
          this.newGenreName = ''; // Limpia el campo de input
        })
        .catch(error => {
          console.error('Error adding genre:', error); // Manejo de errores
        });
    }
  }
};
</script>
