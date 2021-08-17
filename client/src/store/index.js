import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import products from "./products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
  },
  actions: {
    async getUser(ctx) {
      try {
        let { data } = await axios.get("/auth");
        let user = data.email;

        ctx.commit("setUser", user);
      } catch (e) {
        console.log(e);
      }
    },
    login() {},
    async logout(ctx) {
      let { data } = await axios.get("/auth/logout");
      console.log(data);
      ctx.commit("setUser", null);
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
  },
  modules: {
    products,
  },
});
