import "bootstrap/dist/css/bootstrap.min.css"

import {createApp} from 'vue';
import App from './App.vue';
import './registerServiceWorker';

import router from './router';
import "bootstrap/dist/js/bootstrap.js";

createApp(App)
    .use(router)
    .mount('#app');
