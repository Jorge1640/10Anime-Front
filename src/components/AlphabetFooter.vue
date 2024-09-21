<template>
  <footer class="alphabet-footer">
    <div class="alphabet-buttons">
      <button v-for="letter in 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'" :key="letter" class="alphabet-btn">
        {{ letter }}
      </button>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'AlphabetFooter'
}
</script>

<style scoped>
.alphabet-footer {
  background-color: #666;
  padding: 20px 0;
  margin-top: 30px;
}

.alphabet-buttons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.alphabet-btn {
  background-color: #4e2a84;
  color: white;
  border: none;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.alphabet-btn:hover {
  background-color: #3a1f63;
}
</style>