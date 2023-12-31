import { createRouter, createWebHistory } from 'vue-router'
import WorksView from '../views/WorksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'works',
      component: WorksView
    },
    {
      path: '/members',
      name: 'members',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.,
      component: () => import('../views/MemberView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
