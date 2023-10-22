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
      children: [
        {
          path: 'homilyAllAdm',
          name: 'homilyAllAdm',
          component: () => import('../views/admin/HomilyAllAdm.vue'),
        },
        {
          path: 'oracion',
          name: 'prayerView',
          component: () => import('../views/admin/MorningPrayer.vue'),
        },
        {
          path: 'usuarios',
          name: 'userView',
          component: () => import('../views/admin/UsersAll.vue'),
        },
        {
          path: 'addHomily',
          name: 'HomilyAddView',
          component: () => import('../views/admin/HomilyAdd.vue'),
        },
        {
          path: 'editHomily/:id',
          name: 'HomilyEdit',
          component: () => import('../views/admin/HomilyEdit.vue'),
        },
        {
          path: 'detailHomily/:id',
          name: 'HomilyDetail',
          component: () => import('../views/admin/HomilyDetail.vue'),
        },
      ]
    },
    {
      path: '/homilias',
      name: 'homilyAll',
      component: () => import('../views/HomilyAll.vue'),
    },
    {
      path: '/homiliaDetalle/:id',
      name: 'homilyDetail',
      component: () => import('../views/HomilyDetail.vue'),
    },
    {
      path: '/donar',
      name: 'donateView',
      component: () => import('../views/DonateView.vue'),
    }
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
