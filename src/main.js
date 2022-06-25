import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueNumber from 'vue-number-animation'

createApp(App).use(store).use(router).use(VueNumber).mount('#app')
