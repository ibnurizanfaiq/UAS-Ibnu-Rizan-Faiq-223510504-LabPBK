  <template>
    <q-page class="q-gutter-md text-center">
      <q-btn 
        label="Go to Tugas 2" 
        @click="openLink('https://tugas2pbk-ibnu.vercel.app/')" 
        color="light-green-13" 
        class="q-mb-md"
      />
      <q-btn 
        label="Go to github Tugas 2" 
        @click="openLink('https://github.com/ibnurizanfaiq/tugas2pbk_ibnu.git')" 
        color="light-green-13" 
        class="q-mb-md"
      />
      <iframe src="https://tugas2pbk-ibnu.vercel.app/" style="width: 100%; height: 90vh;" frameborder="0"></iframe>
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
  
  