<template>
    <nav class="navbar">
      <div class="navbar-brand">
        <router-link to="/" class="logo">10Anime</router-link>
      </div>
      <div class="navbar-menu">
        <router-link to="/login" class="shadow__btn">Sign in</router-link>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'NavBar'
  }
  </script>
  
  <style scoped>
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    background-color: #1a1a1a;
    color: white;
  }
  
  .navbar-brand .logo {
    font-size: 2rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }
  
  .shadow__btn {
    padding: 10px 20px;
    border: none;
    font-size: 17px;
    color: #fff;
    border-radius: 7px;
    letter-spacing: 4px;
    font-weight: 700;
    text-transform: uppercase;
    transition: 0.5s;
    transition-property: box-shadow;
    background: rgb(0,140,255);
    box-shadow: 0 0 25px rgb(0,140,255);
    text-decoration: none;
  }
  
  .shadow__btn:hover {
    box-shadow: 0 0 5px rgb(0,140,255),
                0 0 25px rgb(0,140,255),
                0 0 50px rgb(0,140,255),
                0 0 100px rgb(0,140,255);
  }
  </style>