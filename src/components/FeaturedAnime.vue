<template>
    <div class="featured-anime">
      <div class="featured-content">
        <div class="img">
          <img :src="require('@/assets/tres.jpg')" alt="Featured Anime" />
        </div>
        <div class="text-content">
          <h2>Los diarios de la boticaria</h2>
          <p class="subtitle">Sub | Dob</p>
          <p class="description">
            Maomao llevaba una vida tranquila ayudando a su padre, un boticario. Todo cambia el día que la
            venden como sirvienta al palacio del emperador, pero la vida entre nobles y realeza no es para...
          </p>
          <div class="buttons">
            <button class="watch-button">COMENZAR A VER E1</button>
            <button class="favorite-button">AÑADIR A FAVORITOS</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'FeaturedAnime'
  }
  </script>
  
  <style scoped>
  .featured-anime {
    background-color: #2a2a2a;
    border-radius: 12px;
    margin-bottom: 20px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }
  
  .featured-content {
    display: flex;
    align-items: stretch;
  }
  
  .img {
    flex: 1;
    max-width: 50%;
  }
  
  .img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .text-content {
    flex: 1;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  
  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ffffff;
  }
  
  .subtitle {
    font-size: 14px;
    color: #bbb;
    margin-bottom: 10px;
  }
  
  .description {
    font-size: 14px;
    color: #ddd;
    margin-bottom: 20px;
  }
  
  .buttons {
    display: flex;
    gap: 10px;
  }
  
  .watch-button, .favorite-button {
    padding: 10px 15px;
    border-radius: 5px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  
  .watch-button {
    background-color: #ff6b00;
    color: white;
    border: none;
  }
  
  .watch-button:hover {
    background-color: #ff8c00;
  }
  
  .favorite-button {
    background-color: transparent;
    color: #ff6b00;
    border: 1px solid #ff6b00;
  }
  
  .favorite-button:hover {
    background-color: #ff6b00;
    color: white;
  }
  
  @media (max-width: 768px) {
    .featured-content {
      flex-direction: column;
    }
  
    .img {
      max-width: 100%;
    }
  }
  </style>