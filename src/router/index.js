import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CreateCurrency from '../views/CreateCurrency.vue'
import EditCurrency from '../views/EditCurrency.vue'
import CreatePair from '../views/CreatePair.vue'
import EditPair from '../views/EditPair.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue'),
      meta: { requiresAuth: true }  // Mark this route as requiring authentication
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/create-currency',
      name: 'CreateCurrency',
      component: CreateCurrency,
      meta: { requiresAuth: true }  // Mark this route as requiring authentication
    },
    {
      path: '/edit-currency',
      name: 'EditCurrency',
      component: EditCurrency,
      meta: { requiresAuth: true }  // Mark this route as requiring authentication
    },
    {
      path: '/create-pair',
      name: 'CreatePair',
      component: CreatePair,
      meta: { requiresAuth: true }  // Mark this route as requiring authentication
    },
    {
      path: '/edit-pair',
      name: 'EditPair',
      component: EditPair,
      meta: { requiresAuth: true }  // Mark this route as requiring authentication
    }
  ]
})
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');  // Check for a token

  // Check if the route requires authentication
  if (to.meta.requiresAuth && !isAuthenticated) {
    // If the route requires auth and user is not authenticated, redirect to login
    next({ name: 'login' });
  } else {
    // Otherwise, allow the user to proceed
    next();
  }
});
export default router
