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
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: #333;
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.filter-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-bottom: 15px;
}

.filter-group {
  background-color: #444;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #555;
}

.filter-group label {
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
  color: #fff;
  font-size: 14px;
}

.filter-group select {
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #555;
  color: #fff;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.filter-group select:focus {
  outline: none;
  border-color: #42b983;
  box-shadow: 0 0 8px rgba(66, 185, 131, 0.4);
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.search-btn, .reset-btn {
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  width: 45%;
  text-align: center;
}

.search-btn {
  background-color: #42b983;
  color: white;
}

.search-btn:hover {
  background-color: #36a174;
}

.reset-btn {
  background-color: #f44336;
  color: white;
}

.reset-btn:hover {
  background-color: #e53935;
}

/* Media Queries para responsividad */
@media (max-width: 768px) {
  .filter-container {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }

  .filter-group {
    width: calc(50% - 7.5px);
  }
}

@media (max-width: 480px) {
  .filter-group {
    width: 100%;
  }

  .button-group {
    flex-direction: column;
    gap: 10px;
  }

  .search-btn, .reset-btn {
    width: 100%;
  }
}
</style>