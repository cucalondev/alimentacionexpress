<template>
  <header
    :class="{ 'hero': true, 'has-bg-image': true, 'default_cursor_cs': !isHeaderWhite }"
    class="p-4 text-black fixed w-full top-0 transition-all ease-in-out duration-300 z-50 toldo"
    :style="headerStyle"
  >
    <div class="container mx-auto flex justify-between items-center border-b-4 border-white rounded-full p-4">
      <div class="flex items-center">
        <span class="text-xl md:text-2xl lg:text-4xl font-extrabold text-purple-600">AlimentaExpr<span class="icon"/>ss</span>
      </div>
      <!-- Mostrar menú hamburguesa en dispositivos móviles -->
      <div class="md:hidden">
        <button @click="toggleMobileMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 text-black hover:text-purple-600 transition duration-300"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <!-- Mostrar menú regular en tabletas y PCs -->
      <nav class="hidden md:flex space-x-4">
        <a @click="navigateToSection('home')" class="cursor-pointer text-black hover:text-purple-600 transition duration-300">Home</a>
        <a @click="navigateToSection('productos')" class="cursor-pointer text-black hover:text-purple-600 transition duration-300">Productos</a>
        <a @click="navigateToSection('servicios')" class="cursor-pointer text-black hover:text-purple-600 transition duration-300">Servicios</a>
        <a @click="navigateToSection('contacto')" class="cursor-pointer text-black hover:text-purple-600 transition duration-300">Contacto</a>
      </nav>
      <div class="relative">
        <button @click="toggleCart" class="relative">
          <img src="../../assets/icons/shopping-cart.png" alt="Carrito de compras" class="h-10 w-10">
          <span class="bg-purple-600 text-white rounded-full p-1 absolute -top-2 -right-2">{{ cartItemCount }}</span>
        </button>
        <div v-if="isCartOpen" @click="toggleCart" class="fixed inset-0 z-40 bg-gray-800 opacity-60"></div>
        <Cart v-if="isCartOpen" @closeCart="toggleCart" />
      </div>
    </div>
    <!-- Mostrar menú hamburguesa en dispositivos móviles -->
    <div class="md:hidden" v-if="isMobileMenuOpen">
      <!-- Coloca aquí tu menú hamburguesa -->
      <ul class="bg-white p-4">
        <li><a @click="navigateToSection('home')" class="cursor-pointer text-black hover:text-purple-600 transition duration-300">Home</a></li>
        <li><a @click="navigateToSection('productos')" class="cursor-pointer text-black hover:text-purple-600 transition duration-300">Productos</a></li>
        <li><a @click="navigateToSection('servicios')" class="cursor-pointer text-black hover:text-purple-600 transition duration-300">Servicios</a></li>
        <li><a @click="navigateToSection('contacto')" class="cursor-pointer text-black hover:text-purple-600 transition duration-300">Contacto</a></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { defineEmits, ref, computed } from 'vue';
import Cart from '../../components/Cart.vue';
import { useStore } from 'vuex';

const emits = defineEmits(['navigate-to-section']);
const navigateToSection = (sectionId) => {
  emits('navigate-to-section', sectionId);
};

const isCartOpen = ref(false);
const store = useStore();

const toggleCart = () => {
  isCartOpen.value = !isCartOpen.value;
};

const cartItemCount = computed(() => {
  return store.state.cart.reduce((total, item) => total + item.quantity, 0);
});

const isHeaderWhite = ref(true);

const headerStyle = computed(() => {
  return {
    backgroundColor: isHeaderWhite.value ? 'white' : 'transparent',
    // Otras propiedades de estilo según sea necesario
  };
});

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};
</script>

<style scoped>
.icon {
            display: inline-block;
            width: 1em;
            height: 1em;
            background-image: url('../../assets/icons/taco-truck.png');
            background-size: contain;
            background-repeat: no-repeat;
            margin-left: 4px; /* Espacio entre la "e" y el ícono */
            transition: transform 0.3s; /* Efecto hover */
          }

  .icon:hover {
            transform: scale(1.2); /* Aumenta el tamaño en hover */
          }
</style>