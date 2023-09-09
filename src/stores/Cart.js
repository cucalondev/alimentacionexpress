import { createStore } from 'vuex';

const store = createStore({
  state: {
    cart: JSON.parse(sessionStorage.getItem('cart')) || [], // Obtener el carrito guardado en sessionStorage al cargar la página
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cart.find((item) => item.id === product.id);

      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.cart.push({ ...product, quantity: 1 });
      }

      // Guardar el carrito actualizado en sessionStorage
      sessionStorage.setItem('cart', JSON.stringify(state.cart));
    },
    removeFromCart(state, productId) {
      const index = state.cart.findIndex((item) => item.id === productId);
      if (index !== -1) {
        state.cart.splice(index, 1);
      }

      // Guardar el carrito actualizado en sessionStorage
      sessionStorage.setItem('cart', JSON.stringify(state.cart));
    },
    clearCart(state) {
      state.cart = [];

      // Limpiar el carrito en sessionStorage
      sessionStorage.removeItem('cart');
    },
  },
});

export default store;
