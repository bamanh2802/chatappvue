import './assets/main.css'
import PrimeVue from 'primevue/config';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import ToastService from 'primevue/toastservice';
import Aura from '@primevue/themes/aura';
import Tooltip from 'primevue/tooltip';
import ConfirmationService from 'primevue/confirmationservice';
import { store } from './store/store';


const app = createApp(App);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
        options: {
            prefix: 'p',
            darkModeSelector: 'light',
            cssLayer: false
        }
    }
 });
app.use(router)
app.directive('tooltip', Tooltip);
app.use(ConfirmationService);
app.use(ToastService);
app.use(store)
app.mount('#app')
