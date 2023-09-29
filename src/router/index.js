import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomilyView.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue'),
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/admin/DashboardView.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/homilias',
      name: 'homilyAll',
      component: () => import('../views/HomilyAll.vue'),
    },
    {
      path: '/contacto',
      name: 'HomilyContact',
      component: () => import('../views/HomilyContact.vue'),
    },
  ],
});

// En tu guardia de navegación
router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    // Verificar la autenticación consultando el token en localStorage
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      // Usuario autenticado, permite el acceso
      next();
    } else {
      // Redirige al usuario a la página de inicio de sesión
      next('/login');
    }
  } else {
    // Rutas públicas, permitir acceso sin restricciones
    next();
  }
});

export default router;
