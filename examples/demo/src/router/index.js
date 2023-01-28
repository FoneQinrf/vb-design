import { createRouter, createWebHashHistory } from 'vue-router';
import routes from 'virtual:generated-pages';
import { setupLayouts } from 'virtual:generated-layouts';

const routeList = routes.filter((item) => {
  if (item.name?.indexOf('demo') === -1) {
    if (item.meta?.menu) {
      item.meta.title = item.meta.menu.children[0];
    }
    if (item.meta && !Object.prototype.hasOwnProperty.call(item.meta, 'demo')) {
      item.meta.demo = true;
    }
    return item;
  }
});

export const getMenu = () => {
  const menu = {};
  routeList.filter((item) => {
    if (item.meta) {
      item.meta.menu.children[0] = { path: item.path, name: item.meta.menu.children[0] };
      if (menu[item.meta.menu.title]) {
        menu[item.meta.menu.title].children = [...menu[item.meta.menu.title].children, ...item.meta.menu.children];
      } else {
        menu[item.meta.menu.title] = item.meta.menu;
      }
    }
    return item;
  });

  const arr = [];

  for (const key in menu) {
    if (Object.prototype.hasOwnProperty.call(menu, key)) {
      arr.push(menu[key]);
    }
  }
  return arr;
};

export const basePath = '/';

const router = createRouter({
  history: createWebHashHistory(basePath),
  routes: setupLayouts(routeList),
});

export default router;
