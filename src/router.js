import { createRouter, createWebHistory } from 'vue-router'
import Tugas1 from './pages/Tugas1.vue'
import Tugas2 from './pages/Tugas2.vue'
import Tugas3 from './pages/Tugas3.vue'
import Tugas4 from './pages/Tugas4.vue'
import Tugas5 from './pages/Tugas5.vue'
import Tugas6 from './pages/Tugas6.vue'

const routes = [
  { path: '/', redirect: '/tugas1' },
  { path: '/tugas1', component: Tugas1 },
  { path: '/tugas2', component: Tugas2 },
  { path: '/tugas3', component: Tugas3 },
  { path: '/tugas4', component: Tugas4 },
  { path: '/tugas5', component: Tugas5 },
  { path: '/tugas6', component: Tugas6 }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
