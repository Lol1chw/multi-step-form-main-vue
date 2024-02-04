import './assets/main.css';

import { createApp } from 'vue';
import { plugin, defaultConfig } from '@formkit/vue';
import { formkitConfig } from './formkit.config';
import { maskito } from '@maskito/vue';
import App from './App.vue'

createApp(App)
.use(plugin, defaultConfig(formkitConfig))
.directive('maskito', maskito)
.mount('#app')
