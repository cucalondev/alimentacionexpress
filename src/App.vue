<template>
  <div>
    <Header @navigate-to-section="scrollToSection" class="fixed top-0 w-full z-10" />
    <div id="home" class="w-screen relative h-screen mt-32 md:mt-0">
      <!-- Banner con fondo personalizado -->
      <div class="bg-orange-400 h-full flex flex-col md:flex-row justify-center items-center text-white">
        <!-- Texto a la izquierda -->
        <div class="md:w-1/2 text-center md:text-left px-4">
          <h1 class="text-5xl font-bold mb-4">¿Tienes hambre?</h1>
          <p class="text-lg mb-6">Encuentra comidas deliciosas y accesibles cerca de ti con tan solo unos clics.</p>
          <form @submit.prevQent="searchFood" class="md:w-2/3 mx-auto">
            <div class="mb-4 relative">
              <div class="flex items-center">
                <label for="delivery" class="flex items-center space-x-2 cursor-pointer transition duration-300 ease-in-out transform hover:scale-105">
                  <input
                    type="radio"
                    value="delivery"
                    v-model="deliveryType"
                    class="hidden"
                  />
                  <img src="./assets/icons/delivery.png" alt="Delivery" class="h-6 w-6 text-red-500" />
                  <span :class="{'text-gray-700 font-medium': deliveryType === 'delivery', 'text-gray-500 font-normal': deliveryType !== 'delivery'}">Delivery</span>
                </label>
                <label for="pickup" class="flex items-center space-x-2 cursor-pointer ml-6 transition duration-300 ease-in-out transform hover:scale-105">
                  <input
                    type="radio"
                    value="pickup"
                    v-model="deliveryType"
                    class="hidden"
                  />
                  <img src="./assets/icons/bag.png" alt="Pickup" class="h-6 w-6 text-red-500" />
                  <span :class="{'text-gray-700 font-medium': deliveryType === 'pickup', 'text-gray-500 font-normal': deliveryType !== 'pickup'}">Pickup</span>
                </label>
              </div>
              <hr class="my-4 border-t border-gray-300">
              <div class="relative flex items-center">
                <input
                  type="text"
                  v-model="address"
                  id="address"
                  placeholder="Introduce tu dirección"
                  class="bg-gray-200 text-gray-800 py-2 pl-10 pr-3 rounded-full w-full focus:outline-none focus:ring focus:border-blue-300"
                />
                <img src="./assets/icons/location.png" alt="Dirección" class="h-6 w-6 text-gray-400 absolute left-3 top-2.5" />
                <button
                  type="submit"
                  class="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full inline-block transition duration-300 ease-in-out transform hover:scale-105 ml-2"
                >
                  Buscar Comida
                </button>
              </div>
            </div>
          </form>
        </div>
        <div class="md:w-1/2">
          <div class="w-full h-full relative group overflow-hidden">
            <img src="./assets/hero-header.png" alt="Imagen de comida" class="w-full h-full object-cover transform scale-100 transition-transform duration-300 hover:scale-105" />
          </div>
        </div>
      </div>
      <!-- Curva decorativa en la parte inferior del banner -->
      <div class="bg-gradient-to-r from-orange-300 to-transparent w-full h-12"></div>
    </div>
    <!-- Otras secciones de tu página -->
    <section id="productos" class="section bg-gray-100">
      <Products/>
    </section>
    <section id="servicios" class="section bg-white">
      <Services/>
    </section>
    <section id="contacto" class="section bg-gray-100">
      <Contact/>
    </section>
  <Footer/>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Header from './shared/components/Header.vue';
import Products from './sections/Products.vue';
import Footer from './shared/components/Footer.vue';
import Contact from './sections/Contact.vue';
import Services from './sections/Services.vue';

const activeSection = ref('home');

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

const address = ref('');
const deliveryType = ref('delivery'); // Por defecto, seleccionado 'delivery'

const searchFood = () => {
  // Agrega aquí la lógica para buscar comida basada en la dirección ingresada y el tipo de entrega seleccionado
  console.log('Buscar comida en:', address.value, 'Tipo de entrega:', deliveryType.value);
}
</script>

<style scoped>
/* Estilos para el formulario de búsqueda */
input[type="text"]::placeholder {
  color: #888;
}

input[type="text"]:focus::placeholder {
  color: transparent;
}
</style>
