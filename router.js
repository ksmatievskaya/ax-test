import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/pages/index.vue'),
    meta: { transition: 'slide-left' },
  },
  {
    path: '/boulevard',
    component: () => import('@/pages/boulevard/index.vue'),
    meta: { transition: 'slide-left' },
  },
  {
    path: '/apartments',
    component: () => import('@/pages/apartments/index.vue'),
    meta: { transition: 'slide-left' },
  },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})