<template>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold mb-8 text-center">Nuestros Platos Destacados</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div
          v-for="product in products"
          :key="product.id"
          class="bg-orange-500 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform duration-300 ease-in-out"
        >
          <img :src="product.image" :alt="product.name" class="w-full h-60 object-cover rounded-t-lg">
          <div class="p-4">
            <h3 class="text-xl font-semibold mb-2">{{ product.name }}</h3>
            <p class="text-gray-600">{{ product.description }}</p>
            <div class="mt-4 flex items-center space-x-2 text-white">
              <img src="../assets/icons/location.png" alt="Ubicación" class="w-4 h-4">
              <p>{{ product.location }}</p>
            </div>
            <div class="mt-4 flex justify-between items-center">
              <span class="text-2xl font-semibold">$ {{ product.price.toFixed(2) }}</span>
              <button
                @click="addToCart(product)"
                class="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
              >
                Agregar al Carrito
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>



<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import item1 from '../assets/item-1.png';
import item2 from '../assets/item-2.png';
import item3 from '../assets/item-3.png';
import item4 from '../assets/cheese-burger.png';

const store = useStore();

const products = ref([
  {
    id: 1,
    name: 'Dancake',
    price: 19.99,
    image: item1, 
    location:'España'
  },
  {
    id: 2,
    name: 'Thai Soup',
    price: 24.99,
    image: item2, 
    location:'Asturias'
  },
  {
    id: 3,
    name: 'Toffe Cake',
    price: 29.99,
    image: item3, 
    location:'Algeciras'
  },
   {
    id: 3,
    name: 'Cheese Burger',
    price: 29.99,
    image: item4, 
    location:'Marruecos'
  },
]);

const addToCart = (product) => {
  store.commit('addToCart', product);
};
</script>
