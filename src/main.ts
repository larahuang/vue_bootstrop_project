import { createApp } from 'vue'
import router from './router/router.js' 
import App from './App.vue'

import './assets/scss/all.scss';
import './assets/js/bootstrap.min.js';
import './assets/js/popper.min.js';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'
const app = createApp(App);
    app.use(router)
    app.component('VueDatePicker', VueDatePicker); 
app.mount('#app')
