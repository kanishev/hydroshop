import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import products from "./products";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    message: {
      type: null,
      value: null
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
      console.log(user)
    },
    setMessage(state, {type, value}){
      console.log('set message')
      state.message.type = type;
      state.message.value = value;
    },
    clearMessage(state){
      console.log('clear')
      state.message.type = null;
      state.message.value = null;
    }
  },
  actions: {
    async getUser(ctx) {
      try {
        let { data } = await axios.get("/auth");
        let user = data.role;

        ctx.commit("setUser", user);
        localStorage.setItem("user", JSON.stringify(user));

      } catch (e) {
        console.log(e);
      }
    },
    login() {},
    async logout(ctx) {
      await axios.get("/auth/logout");
      ctx.commit("setUser", null);
      localStorage.removeItem('user')
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getMessage(state){
      return state.message;
    }
  },
  modules: {
    products,
  },
});
