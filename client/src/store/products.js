import axios from "axios";

export default {
  state: {
    products: null,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async getProducts(ctx) {
      console.log("GET PRODUCTS CLIENT");
      try {
        let { data } = await axios.get("/products");
        ctx.commit("setProducts", data);
      } catch (e) {
        console.log(e);
      }
    },
    async getOne(_, id) {
      try {
        let { data } = await axios.get("/products/:id", {
          params: {
            id,
          },
        });
        console.log(data);

        // ctx.commit("setProducts", data);
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },
  },
};
