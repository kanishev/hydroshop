import Vue from "vue";
// import store from '../store/index.js'
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Catalog from "../views/Catalog.vue";
import ProductPage from "../views/ProductPage.vue";
import CartPage from "../views/CartPage.vue";
import AuthPage from "../views/AuthPage.vue";
import AdminPage from '../views/AdminPage.vue'


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
      admin: true
    },
  },
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});


router.beforeEach((to, from, next) => {

  // setTimeout(() => console.log(router.app.$store), 1000)
  next()
  // console.log('ROUTER', store.state.user)
  // setTimeout(() => {console.log('ROUTER', store.state.user)}, 1000)
  // next()

  // const user = firebase.auth().currentUser
  // const isRequireUser = to.matched.some(record => record.meta.admin)

  // if (isRequireUser && store.state.user == 'client@mail.ru') {
  //   next('/auth')
  // } else {
  //   console.log('ELSE')
  //   next()
  // }

  // store.dispatch('getUser').then(() => {
  //   const user = store.state.user
  //   const isRequireUser = to.matched.some(record => record.meta.admin)


  //   if(isRequireUser && user !== 'admin@mail.ru') {
  //     next('/auth')
  //   } else {
  //     next()
  //   }
  // }).catch(error => {
  //   console.log(error)
    // if (!error.message.includes('Could not find stored JWT')) {
    //   console.log('Authentication error', error)
    // }
    // (to.meta.requiresAuth) ? next('/inicio-sesion') : next()
  // })
})


export default router;
