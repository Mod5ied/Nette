import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import Home from "./views/Homepage.vue";
import Search from "./views/Searchpage.vue";
import SignUp from "../src/components/register.vue";
import SignIn from "../src/components/login.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/search", name: "Search", component: Search },
    { path: "/sign-up", name: "SignUp", component: SignUp },
    { path: "/sign-in", name: "SignIn", component: SignIn },
  ],
});

createApp(App).use(router).mount("#app");
