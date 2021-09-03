import axios from "axios";

export default {
  state: {
    products: null,
  },
  mutations: {
    setProducts(state, products) {
      console.log('SET')
      state.products = products;
    },
  },
  actions: {
    async getProducts(ctx) {
      try {
        const { data } = await axios.get("/products");
        let products = data.reduce((acc, el) => {
          const imgArr = el.img.split('/')
          el.img = imgArr[imgArr.length - 1]
          return [...acc, el]
        }, [])
        ctx.commit("setProducts", products);
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
      console.log('GET')
      return state.products;
    },
  },
};
