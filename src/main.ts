import './assets/main.css';

import { createApp } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
import { maskito } from '@maskito/vue';
import App from './App.vue'

createApp(App)
.use(plugin, defaultConfig)
.directive('maskito', maskito)
.mount('#app')
