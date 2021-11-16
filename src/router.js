import { createWebHistory, createRouter } from "vue-router";

const routes = [
  /* {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Login.vue')
  }, */
  {
    path: '/',
    component: () => import('./views/Home.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('./components/Dashboard.vue')
      },
      /* {
        path: '/Companies',
        component: () => import('./components/companies/List.vue')
      }, */
      {
        path: '/Students',
        component: () => import('./components/students/List.vue')
      },
      {
        path: '/Staff',
        component: () => import('./components/staff/List.vue')
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;