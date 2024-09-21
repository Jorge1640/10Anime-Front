<template>
  <div class="filter-section">
    <div class="filter-container">
      <div class="filter-group" v-for="filter in filters" :key="filter.id">
        <label :for="filter.id">{{ filter.label }}</label>
        <select :id="filter.id" v-model="selectedFilters[filter.id]">
          <option value="">Todos</option>
          <option v-for="option in filter.options" :key="option.value" :value="option.value">
            {{ option.text }}
          </option>
        </select>
      </div>
    </div>
    <div class="button-group">
      <button class="search-btn" @click="applyFilters">Buscar</button>
      <button class="reset-btn" @click="resetFilters">Resetear Filtros</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FilterSection',
  props: {
    filters: Array
  },
  data() {
    return {
      selectedFilters: {}
    };
  },
  methods: {
    applyFilters() {
      this.$emit('apply-filters', this.selectedFilters);
    },
    resetFilters() {
      this.selectedFilters = {};
      this.$emit('reset-filters');
    }
  }
}
</script>

<style scoped>
.filter-section {
  flex: 1;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
}

.filter-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 20px;
}

.filter-group {
  background-color: #333;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
}

.filter-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #fff;
}

.filter-group select {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #555;
  background-color: #444;
  color: #fff;
  transition: border-color 0.3s;
}

.filter-group select:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 10px rgba(66, 185, 131, 0.5);
}

.button-group {
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-top: 20px;
}

.search-btn, .reset-btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.search-btn {
  background-color: #42b983;
  color: white;
}

.search-btn:hover {
  background-color: #3a9d70;
}

.reset-btn {
  background-color: #f44336;
  color: white;
}

.reset-btn:hover {
  background-color: #d32f2f;
}
</style>