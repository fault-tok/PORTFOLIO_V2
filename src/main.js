import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index";

import "./assets/style.css"

const vue = createApp(App);

vue.use(router);

vue.mount('#app')
