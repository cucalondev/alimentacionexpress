<template>
  <v-container fluid fill-height>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card elevation="12">
          <v-card-title class="headline text-red darken-4">Contáctanos</v-card-title>
          <v-card-text>
            <v-form @submit.prevent="submitForm">
              <v-text-field v-model="name" label="Nombre" required></v-text-field>
              <v-text-field v-model="email" label="Correo electrónico" required type="email"></v-text-field>
              <v-textarea v-model="message" label="Mensaje" required></v-textarea>
              <v-btn type="submit" color="orange darken-4">Enviar</v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      // Aquí puedes enviar el formulario a través de una solicitud HTTP o realizar otras acciones necesarias.
      // Por ejemplo, puedes utilizar Axios para enviar datos al servidor.
      // Luego, puedes restablecer los campos del formulario si es necesario.
      this.name = "";
      this.email = "";
      this.message = "";
    },
  },
};
</script>
