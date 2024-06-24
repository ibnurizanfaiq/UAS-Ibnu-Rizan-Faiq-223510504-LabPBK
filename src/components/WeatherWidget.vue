<template>
    <q-card class="weather-widget q-pa-none">
      <q-card-section>
        <q-select
          v-model="city"
          :options="cities"
          label="Select City"
          dense
          class="q-mb-md"
          @input="getWeather"
        />
  
        <div v-if="weather" class="text-white">
          <div>{{ weather.name }}, {{ weather.main.temp }} °C</div>
          <div>{{ weather.weather[0].description }}</div>
        </div>
        <div v-else>
          <q-spinner-dots color="white" />
        </div>
      </q-card-section>
    </q-card>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue';
  import axios from 'axios';
  
  const weather = ref(null);
  const apiKey = '7dcb398571e44f2517d2a608a8e11179';
  const cities = [
  'Jakarta', 'Bandung', 'Surabaya', 'Bali', 'Yogyakarta', 'Medan', 
  'Makassar', 'Semarang', 'Palembang', 'Balikpapan', 'Pekanbaru', 
  'Malang', 'Denpasar', 'Samarinda', 'Batam', 'Padang', 'Banjarmasin',
  'Pontianak', 'Manado', 'Mataram', 'Kupang', 'Jayapura', 'Ambon', 
  'Cirebon', 'Tasikmalaya', 'Purwokerto', 'Magelang', 'Tegal', 
  'Kediri', 'Sukabumi', 'Jember', 'Madiun', 'Cimahi', 'Cilegon'
];
  const city = ref('Pekanbaru');
  
  const getWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city.value}&units=metric&appid=${apiKey}`
      );
      weather.value = response.data;
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };
  
  watch(city, getWeather, { immediate: true });
  </script>
  
  <style scoped>
  .weather-widget {
    background: transparent;
    box-shadow: none;
  }
  .weather-widget .q-card-section {
    padding: 0;
  }
  </style>
  