import { createRouter, createWebHistory } from 'vue-router'
import Reader from '../views/Reader.vue'

const routes = [
  {
    path: '/',
    name: 'Reader',
    component: Reader
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/upkeep',
    name: 'Upkeep',
    component: () => import(/* webpackChunkName: "upkeep" */ '../views/Upkeep.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue')
  }
]

routes.push(
  {
    path: "/*",
    name: "404",
    component: () => import(/* webpackChunkName: "error" */ "../views/Login.vue")
  },
  {
    path: "/error/:code",
    name: "Error",
    component: () => import(/* webpackChunkName: "error" */ "../views/Login.vue")
  }
)

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
