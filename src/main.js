import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import customComponents from "./components/UI/index";

customComponents.forEach((element) => Vue.component(element.name, element));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
