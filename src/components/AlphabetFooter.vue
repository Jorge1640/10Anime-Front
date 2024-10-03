<template>
  <div class="alphabet-footer">
    <span v-for="letter in alphabet" :key="letter" @click="goToLetter(letter)">
      {{ letter }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'AlphabetFooter',
  data() {
    return {
      alphabet: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    };
  },
  methods: {
    goToLetter(letter) {
      this.$emit('letter-clicked', letter); // Emitir el evento al hacer clic
    }
  }
}
</script>

<style scoped>
.alphabet-footer {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

.alphabet-footer span {
  margin: 0 5px;
  cursor: pointer;
  color: #42b983;
}

.alphabet-footer span:hover {
  color: #3a9d70;
}
</style>