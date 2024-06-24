
<template>
    <q-page class="q-gutter-md text-center">
      <q-btn 
        label="Go to Tugas 4" 
        @click="openLink('https://ibnu-tugas4pbk.vercel.app/')" 
        color="light-green-13" 
        class="q-mb-md"
      />
      <q-btn 
        label="Go to github Tugas 4" 
        @click="openLink('https://github.com/ibnurizanfaiq/ibnu_tugas4pbk')" 
        color="light-green-13" 
        class="q-mb-md"
      />
      <iframe src="https://ibnu-tugas4pbk.vercel.app/" style="width: 100%; height: 90vh;" frameborder="0"></iframe>
    </q-page>
  </template>
  
  <script setup>
  const openLink = (url) => {
    window.open(url, '_blank')
  }
  </script>
  
  <style scoped>
  .q-btn {
    margin-bottom: 16px;
  }
  </style>
  