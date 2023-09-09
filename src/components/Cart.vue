<template>
  <div>
    <div
      class="fixed inset-0 flex items-center justify-end z-50 bg-opacity-75 backdrop-blur-md"
    >
    <div class="bg-white w-96 h-full overflow-y-auto">
        <div class="p-6">
          <div class="flex justify-between items-center">
            <h2 class="text-2xl font-semibold mb-4">Mi Carrito de Compras</h2>
            <button
              @click="closeCart"
              class="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="h-6 w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div v-if="store.state.cart.length === 0" class="text-gray-500">El carrito está vacío.</div>
          <div v-else>
            <ul>
              <li
                v-for="item in store.state.cart"
                :key="item.id"
                class="border-t border-gray-200 py-4"
              >
                <div class="flex items-center space-x-4">
                  <div class="flex-shrink-0">
                    <img
                      :src="item.image"
                      :alt="item.name"
                      class="w-16 h-16 rounded-full object-cover shadow-md"
                    />
                  </div>
                  <div class="flex-grow">
                    <p class="text-lg font-semibold">{{ item.name }}</p>
                    <p class="text-sm text-gray-500">Cantidad: {{ item.quantity.toFixed(2) }}</p>
                  </div>
                  <div class="flex items-center space-x-2">
                    <button
                      @click="decreaseQuantity(item)"
                      class="text-red-600 hover:text-red-800"
                    >
                      -
                    </button>
                    <button
                      @click="increaseQuantity(item)"
                      class="text-green-600 hover:text-green-800"
                    >
                      +
                    </button>
                    <button
                      @click="removeItem(item.id)"
                      class="text-red-600 hover:text-red-800"
                    >
                      X
                    </button>
                  </div>
                </div>
              </li>
            </ul>
            <div class="mt-4">
              <p class="text-xl font-semibold">Total: {{ calculateTotal().toFixed(2) }}</p>
              <button
                @click="handlePayment"
                class="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
              >
                Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button
      @click="toggleCart"
      class="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
    >
      {{ isCartOpen ? 'Cerrar Carrito' : 'Abrir Carrito' }}
    </button>
  </div>
</template>

<script setup>
import { useStore } from 'vuex';
import { defineEmits } from 'vue';

const emits = defineEmits(['closeCart']);
const store = useStore();

const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
  }
};

const increaseQuantity = (item) => {
  item.quantity++;
};

const removeItem = (itemId) => {
  const index = store.state.cart.findIndex((item) => item.id === itemId);
  if (index !== -1) {
    store.commit('removeFromCart', itemId);
  }
};

const calculateTotal = () => {
  if (!Array.isArray(store.state.cart) || store.state.cart.length === 0) {
    return 0;
  }

  return store.state.cart.reduce((total, item) => total + item.price * item.quantity, 0);
};

const closeCart = () => {
  emits('closeCart');
};

const handlePayment = () => {
  closeCart(); // Cierra el carrito al hacer clic en "Pagar"
  alert('¡Gracias por tu compra!');
};
</script>
