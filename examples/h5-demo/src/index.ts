import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import Demo from './components/Demo/index.vue';

import './style';

const app = createApp(App);
app.component('demo-block', Demo);
app.use(router).mount('#app');
