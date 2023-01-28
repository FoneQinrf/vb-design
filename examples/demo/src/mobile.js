import { createApp } from 'vue';
import App from './Mobile.vue';
import router from './router/mobile';
import Block from './components/Block.vue';
import * as vbUI from '../../../packages/ui-h5/ui.h5';

import './utils/touch';
import './style';


const app = createApp(App);
for (const key in vbUI) {
  if (Object.hasOwnProperty.call(vbUI, key)) {
    const element = vbUI[key];
    if (element.name) {
      app.component(element.name, element);
    }
  }
}
app.component('vb-block', Block);
app.use(router).mount('#app');
