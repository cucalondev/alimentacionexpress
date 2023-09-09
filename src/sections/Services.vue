<template>
  <section class="background-services py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-extrabold text-center text-orange-500 mb-10">¿Cómo Funciona?</h2>


      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <!-- Paso 1 -->
        <div class="text-center">
          <div class="w-24 h-24 mx-auto">
            <img src="../assets/icons/service-1.png" alt="Seleccionar Ubicación" class="w-full h-full" />
          </div>
          <h3 class="text-xl font-semibold mt-6">Selecciona ubicación</h3>
          <p class="text-gray-700 mt-2">
            Elige la ubicación donde se entregará tu comida.
          </p>
        </div>

        <!-- Paso 2 -->
        <div class="text-center">
          <div class="w-24 h-24 mx-auto">
            <img src="../assets/icons/service-2.png" alt="Seleccionar Pedido" class="w-full h-full" />
          </div>
          <h3 class="text-xl font-semibold mt-6">Elige el pedido</h3>
          <p class="text-gray-700 mt-2">
            Explora cientos de menús para elegir tu comida favorita.
          </p>
        </div>

        <!-- Paso 3 -->
        <div class="text-center">
          <div class="w-24 h-24 mx-auto">
            <img src="../assets/icons/service-3.png" alt="Pagar Adelantado" class="w-full h-full" />
          </div>
          <h3 class="text-xl font-semibold mt-6">Pago avanzado</h3>
          <p class="text-gray-700 mt-2">
            Es rápido, seguro y sencillo. Selecciona varios métodos de pago.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      // Puedes agregar aquí los datos de tus pasos si lo deseas
    };
  },
};
</script>

<style scoped>
.background-services{
  background-color: #FFFAF2;
}
</style>
