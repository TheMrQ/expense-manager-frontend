import { createApp } from 'vue'
import App from './App.vue'
import router from './router'       // 1. Import the router we made
import './assets/main.css'          // 2. Import your Tailwind CSS

const app = createApp(App)

app.use(router)                     // 3. Tell Vue to USE the router

app.mount('#app')