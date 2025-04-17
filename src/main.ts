import { createApp } from 'vue'
import router from './router/router.js' 
import App from './App.vue'

import './assets/scss/all.scss';
import './assets/js/bootstrap.min.js';
import './assets/js/popper.min.js';

createApp(App)
    .use(router) 
.mount('#app')
