import { createApp } from 'vue';
import App from './Mobile.vue';
import router from './router/mobile';
import Block from './components/Block.vue';
import * as fiteUI from '../../../packages/fite-ui/fite-ui';

import './utils/touch';
import './style';


const app = createApp(App);
for (const key in fiteUI) {
  if (Object.hasOwnProperty.call(fiteUI, key)) {
    const element = fiteUI[key];
    if (element.name) {
      app.component(element.name, element);
    }
  }
}
app.component('fite-block', Block);
app.use(router).mount('#app');
