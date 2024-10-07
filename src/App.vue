<template>
    <div id="app">
        <NavBar /> <!-- Barra de navegación -->
        <router-view></router-view> <!-- Espacio para renderizar las vistas según la ruta -->
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'; // Importa el componente NavBar

export default {
    name: 'App',
    components: {
        NavBar
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

body {
    margin: 0;
    padding: 0;
    background-color: #222;
}
</style>