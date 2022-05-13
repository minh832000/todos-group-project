import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/r",
    name: "REGISTER",
    component: () => import('../views/auth/signup.vue'),
  },
  {
    path: "/l",
    name: "LOGIN",
    component: () => import('../views/auth/signin.vue'),
  },
  {
    path: "/",
    name: "HOMEPAGE",
    component: () => import('../views/home/home.vue'),
  },
  {
    path: "/db",
    name: "DASHBOARD",
    component: () => import('../views/dashboard/dashboard.vue'),
  },
  {
    path: "/c",
    name: "COLLECTIONS",
    component: () => import('../views/collections/collections.vue'),
  },
  {
    path: "/c/:id",
    name: "COLLECTION_DETAIL",
    component: () => import('../views/collection-detail/collection-detail.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
