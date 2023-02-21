import { createApp } from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import { library} from '@fortawesome/fontawesome-svg-core';
import {fas} from '@fortawesome/free-solid-svg-icons'
import router from './router/router';
import axios from 'axios';


library.add(fas)

const app = createApp(App)
app.use(router)
app.config.globalProperties.$axios = axios;
app.mount('#app')
