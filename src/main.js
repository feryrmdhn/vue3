import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import './assets/main.css'

// primevue-css
import "primevue/resources/themes/lara-light-indigo/theme.css";
import "primevue/resources/primevue.min.css";
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';

const app = createApp(App)
app.use(router).use(PrimeVue)

app.mount('#app')
