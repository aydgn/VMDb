import {
  createRouter,
  createWebHistory
} from 'vue-router'

import Home from '@/pages/Home.vue'

const routes = [{
    path: '/',
    name: 'home',
    component: Home,
    meta: {
      title: 'Home'
    }
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: () => import('@/pages/Detail.vue'),
    props: true
  },
  {
    path: '/upcoming',
    name: 'upcoming',
    component: () => import('@/pages/Upcoming.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export default router
