import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'quasar/src/css/index.sass'
import App from './App.vue'
import router from './router'

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {}, 
})

myApp.use(router) 

myApp.mount('#app')

