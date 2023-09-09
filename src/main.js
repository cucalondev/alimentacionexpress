import { createApp } from 'vue'
import './assets/style.css'
import App from './App.vue'
import storeCart from './stores/Cart';

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify({
  components,
  directives,
})

const app = createApp(App);
app.use(storeCart)
    .use(vuetify)
app.mount('#app');
