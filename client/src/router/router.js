import { createRouter, createWebHistory } from "vue-router";

import SignUp from "../views/auth/signup.vue";
import SignIn from "../views/auth/signin.vue";

const routes = [
  {
    path: "/register",
    name: "REGISTER",
    component: SignUp
  },
  {
    path: "/login",
    name: "LOGIN",
    component: SignIn
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
