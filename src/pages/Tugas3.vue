<template>
    <q-page class="q-gutter-md text-center">
      <q-btn 
        label="Go to Tugas 3" 
        @click="openLink('https://30-pbk-uts-223510504.vercel.app/')" 
        color="light-green-13" 
        class="q-mb-md"
      />
      <q-btn 
        label="Go to github Tugas 3" 
        @click="openLink('https://github.com/ibnurizanfaiq/30-PBK-UTS-223510504')" 
        color="light-green-13" 
        class="q-mb-md"
      />
      <iframe src="https://30-pbk-uts-223510504.vercel.app/" style="width: 100%; height: 90vh;" frameborder="0"></iframe>
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
  