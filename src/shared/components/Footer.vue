<template>
  <footer class="bg-red-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Column 1: Logo y Contacto -->
        <div class="mb-8">
          <h2 class="text-2xl font-bold mb-4">AlimentacionExpress</h2>
          <p class="mb-4">Tienes una pregunta, contáctanos a:</p>
          <a href="mailto:support@alimentacionexpress.com" class="text-red-400 hover:underline">support@alimentacionexpress.com</a>
          <p class="mt-4">Madrid, España</p>
          <a href="tel:+1234567890" class="text-red-400 hover:underline">(+12) 345-678-90</a>
        </div>


        <!-- Column 3: Enlaces de Navegación -->
        <div class="mb-8">
          <h3 class="text-xl font-semibold mb-4">Navegación</h3>
          <ul>
            <li><a href="#home" class="text-red-400 hover:underline">Inicio</a></li>
            <li><a href="#productos" class="text-red-400 hover:underline">Productos</a></li>
            <li><a href="#servicios" class="text-red-400 hover:underline">Servicios</a></li>
            <li><a href="#contacto" class="text-red-400 hover:underline">Contacto</a></li>
          </ul>
        </div>

      </div>
    </div>

    <!-- Footer inferior con derechos de autor -->
    <div class="bg-red-700 mt-8 py-4">
      <div class="container mx-auto flex items-center justify-between">
        <p class="text-sm">&copy; {{ currentYear }} <a href="#" class="text-red-400 hover:underline">AlimentacionExpress</a></p>
        <img src="src\assets\icons\paypal.png" width="60" height="32" alt="Métodos de pago" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>
