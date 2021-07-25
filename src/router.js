import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '@/pages/Home.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/pages/Detail.vue'),
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
