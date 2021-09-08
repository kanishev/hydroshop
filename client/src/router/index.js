import Vue from "vue";
import VueRouter from "vue-router";
import store from '../store/index'

import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import ProductPage from "../views/ProductPage.vue";
import CartPage from "../views/CartPage.vue";
import AuthPage from "../views/AuthPage.vue";
import AdminPage from '../views/AdminPage.vue'
import favouritePage from '../views/FavoritePage.vue'


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      layout: "main",
    },
  },
  {
    path: "/catalog",
    name: "catalog",
    component: Catalog,
    meta: {
      layout: "main",
    },
  },
  {
    path: "/products/:id",
    name: "product",
    component: ProductPage,
    meta: {
      layout: "main",
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: CartPage,
    meta: {
      layout: "main",
      auth: true
    },
  },
  {
    path: "/auth",
    name: "auth",
    component: AuthPage,
    meta: {
      layout: "empty",
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminPage,
    meta: {
      layout: "main",
      admin: true,
    },
  },
  {
    path: "/favourite",
    name: "admin",
    component: favouritePage,
    meta: {
      layout: "main"
    },
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {

  const user = localStorage.getItem('user')
  const isRequireUser = to.matched.some(record => record.meta.admin)
  const isAuthRequired = to.matched.some(record => record.meta.auth)

  if (isRequireUser && JSON.parse(user).role !== 'ADMIN') {
    store.commit("setMessage", {
      value: "Сперва необходимо залогиниться под админом",
      type: "error",
    });
    next('/auth')
  }

  if (isAuthRequired && JSON.parse(user).role == "NOT_AUTH"){
    store.commit("setMessage", {
      value: "Сперва необходимо залогиниться",
      type: "error",
    });
    next('/auth')
  }

  else {
    next()
  }
})


export default router;
