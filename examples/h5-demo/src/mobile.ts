import { createApp } from 'vue';
import App from './Mobile.vue';
import router from './router/mobile';

import './utils/touch';
import './style';
import '../dist/style.css';

const app = createApp(App);
app.use(router).mount('#app');
