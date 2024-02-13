import './assets/main.css';

import { createApp } from 'vue';
import { maskito } from '@maskito/vue';
import App from './App.vue'

createApp(App)
.directive('maskito', maskito)
.mount('#app')
