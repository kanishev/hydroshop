import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import ProductPage from "../views/ProductPage.vue";
import CartPage from "../views/CartPage.vue";
import AuthPage from "../views/AuthPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      // auth: false,
      layout: "main",
    },
  },
  {
    path: "/catalog",
    name: "catalog",
    component: Catalog,
    meta: {
      // auth: false,
      layout: "main",
    },
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductPage,
    meta: {
      // auth: false,
      layout: "main",
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
    meta: {
      // auth: false,
      layout: "main",
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthPage,
    meta: {
      // auth: true,
      layout: "empty",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
