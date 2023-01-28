import { createRouter, createWebHashHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';
import { basePath } from './index';

const routeList = routes.filter((item) => {
  if (item.name?.indexOf('demo') !== -1) {
    item.meta = { ...item.meta, layout: 'demo' };
    return item;
  }
});

const router = createRouter({
  history: createWebHashHistory(basePath),
  routes: setupLayouts(routeList),
});

export default router;
