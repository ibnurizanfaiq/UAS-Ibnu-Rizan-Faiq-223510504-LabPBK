<template>
  <q-layout view="hHh LpR fff">
    <q-header class="bg-light-blue-4 text-white" height-hint="98">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="./assets/controller.svg">
          </q-avatar>
          Ibnu Rizan Faiq
        </q-toolbar-title>
        <div class="weather-widget-container">
          <WeatherWidget />
        </div>
      </q-toolbar>
      
      <q-tabs align="center">
        <q-route-tab to="/tugas1" label="Tugas 1" class="bi bi-list-task"/>
        <q-route-tab to="/tugas2" label="Tugas 2" class="bi bi-list-task"/>
        <q-route-tab to="/tugas3" label="Tugas 3" class="bi bi-list-task"/>
        <q-route-tab to="/tugas4" label="Tugas 4" class="bi bi-list-task"/>
        <q-route-tab to="/tugas5" label="Tugas 5" class="bi bi-list-task"/>
        <q-route-tab to="/tugas6" label="Tugas 6" class="bi bi-list-task"/>
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-dark text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div class="foot">
            Project UAS
            <p>@Copyright by Ibnu 2024</p>
          </div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script setup>
import WeatherWidget from './components/WeatherWidget.vue'
</script>

<style scoped>
.weather-widget-container {
  margin-left: auto;
  display: flex;
  align-items: center;
}
.weather-widget-container .q-card {
  background: transparent;
  box-shadow: none;
  color: white;
  display: flex;
  align-items: center;
}
.weather-widget-container .q-card .q-card-section {
  padding: 0;
}
.foot {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  text-align: center ;
  color: white;
}
</style>
