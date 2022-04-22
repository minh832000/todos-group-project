import { createApp } from "vue";

import App from "./App.vue";

import router from "./router/router.js";

import "@/styles/tailwind.css";
import "@/styles/global.css";

createApp(App)
    .use(router)
    .mount("#app");
