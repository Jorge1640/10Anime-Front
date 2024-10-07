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
  padding: 10px; /* Reducir el padding para hacerla más pequeña */
  display: flex;
  flex-direction: column;
  background-color: #333; /* Cambiar a un fondo gris oscuro */
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.filter-container {
  display: flex;
  flex-direction: column;
  gap: 15px; /* Reducir el espacio entre los grupos de filtros */
  margin-bottom: 15px; /* Reducir el margen inferior */
}

.filter-group {
  background-color: #444; /* Cambiar a un fondo gris más claro para los grupos de filtros */
  padding: 10px; /* Reducir el padding interno */
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #555; /* Cambiar el color del borde a un gris más oscuro */
}

.filter-group label {
  display: block;
  margin-bottom: 6px; /* Reducir el margen inferior */
  font-weight: 600;
  color: #fff; /* Cambiar el color del texto a blanco */
  font-size: 14px;
}

.filter-group select {
  width: 100%;
  padding: 8px; /* Reducir el padding interno */
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #555; /* Cambiar el fondo del select a un gris oscuro */
  color: #fff; /* Cambiar el color del texto a blanco */
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
  margin-top: 15px; /* Reducir el margen superior */
}

.search-btn, .reset-btn {
  padding: 10px 20px; /* Reducir el padding de los botones */
  font-size: 16px;
  cursor: pointer;
  border: none;
  border-radius: 6px;
  transition: background-color 0.3s ease;
  width: 45%; /* Ajustar el ancho de los botones para que se ajusten bien */
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
</style>