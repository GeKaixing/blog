import { createWebHistory, createRouter } from 'vue-router'
import MenuView from '@/views/MenView.vue'
import VlogView from '@/views/VlogView.vue'

const routes = [
  { path: '/', component: MenuView },
  { path: '/blog/:id', component:VlogView},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
