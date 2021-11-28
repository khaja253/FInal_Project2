import Vue from "vue";
import Vuex from "vuex";

function updateLocaleStorage(cart) {
  localStorage.setItem("cart", JSON.stringify(cart));
}

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
  },
  getters: {
    productQuantity: (state) => (product) => {
      const item = state.cart.find((i) => i.id === product.id);

      if (item) return item.quantity;
      else return null;
    },
    cartItems: (state) => {
      return state.cart;
    },
    cartTotal: (state) => {
      return state.cart.reduce((a, b) => a + b.price * b.quantity, 0);
    },
  },
  mutations: {
    addToCart(state, product) {
      let item = state.cart.find((i) => i.id === product.id);

      if (item) {
        item.quantity++;
      } else {
//product: {name: "", details:""};
        //state.cart.push(product);
        ///state.cart.push({id: 1, name: product.name, details: product.details, quantity:1});
        ///state.cart.push({...product});
        //
        state.cart.push({ ...product, quantity: 1 });
      }

      updateLocaleStorage(state.cart);
    },
    removeFromCart(state, product) {
      let item = state.cart.find((i) => i.id === product.id);

      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.cart = state.cart.filter((i) => i.id !== product.id);
        }
      }

      updateLocaleStorage(state.cart);
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem("cart");
      if (cart) {
        state.cart = JSON.parse(cart);
      }
    },
  },

  actions: {},
  modules: {},
});
