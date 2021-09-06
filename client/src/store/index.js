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
    },
  },
  mutations: {
    setUser(state, user) {
      console.log('SET', user)
      state.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    setMessage(state, {type, value}){
      state.message.type = type;
      state.message.value = value;
    },
    setCart(state, cart){
      state.cart = cart;
    },
    clearMessage(state){
      state.message.type = null;
      state.message.value = null;
    }
  },
  actions: {
    async getUser(ctx) {
      try {
        let { data } = await axios.get("/auth");
        if (!data){
          const user = {
            role: "NOT_AUTH",
            cart: {
              items: []
            }
          }
          ctx.commit('setUser', user)
        } else {
          ctx.commit("setUser", data);
          localStorage.setItem("user", JSON.stringify(data));
        }


      } catch (e) {
        console.log(e);
      }
    },
    login() {

    },
    async logout(ctx) {
      await axios.get("/auth/logout");
      ctx.commit("setUser", null);
      localStorage.removeItem('user')
    },
  },
  getters: {
    getUser(state) {

      if(!state.user){
        return JSON.parse(localStorage.getItem('user'));
      }
      return state.user;
    },
    getMessage(state){
      return state.message;
    },
  },
  modules: {
    products,
  },
});
