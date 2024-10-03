<!-- src/views/AzPage.vue -->
<template>
    <div>
      <h1>Página Az</h1>
      <p>Letra seleccionada: {{ letter }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      letter: {
        type: String,
        required: false
      }
    },
    created() {
      console.log('Letra seleccionada:', this.letter); // Registro en consola
    }
  }
  </script>
  
  <style scoped>
  /* Estilos opcionales para AzPage.vue */
  h1 {
    color: #42b983;
  }
  
  p {
    font-size: 18px;
  }
  </style>