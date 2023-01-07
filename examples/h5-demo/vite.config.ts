import { resolve } from 'path';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import jsx from '@vitejs/plugin-vue-jsx';
import Pages from 'vite-plugin-pages';
import Layout from 'vite-plugin-vue-layouts';
import Markdown from 'vite-plugin-md';
import Components from 'unplugin-vue-components/vite';
import { encodeBase64 } from './src/utils';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import type { ComponentResolver, SideEffectsInfo } from 'unplugin-vue-components';

const hljs = require('highlight.js');

const resolver = (): ComponentResolver => {
  return name => {
    if (!name.match(/^Nut[A-Z]/)) return;

    const componentName = name.replace(/^Nut/, '');
    const sideEffects: SideEffectsInfo = [`@nutui/nutui/dist/packages/${componentName.toLowerCase()}/index.scss`];
    if (componentName === 'Button') {
      // 图标按钮
      sideEffects.push({
        name: 'Icon',
        from: `@nutui/nutui/dist/packages/_es/Icon`,
      });
      sideEffects.push('@nutui/nutui/dist/packages/icon/index.scss');
    }
    return {
      from: `@nutui/nutui/dist/packages/_es/${componentName}`,
      sideEffects,
    };
  };
};

export default defineConfig({
  build: {
    target: 'es2015',
    cssCodeSplit: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        mobile: resolve(__dirname, 'mobile.html'),
      },
      output: {
        dir: resolve(__dirname, 'docs'),
      },
    },
    emptyOutDir: false,
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    jsx(),
    Pages({
      dirs: [
        {
          dir: 'packages',
          baseRoute: 'component',
        },
      ],
      exclude: ['**/components/*.vue'],
      extensions: ['vue', 'md'],
    }),
    Layout({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'preview',
    }),
    Markdown({
      markdownItOptions: {
        highlight(str, lang) {
          if (lang && hljs.getLanguage(lang)) {
            try {
              return hljs.highlight(lang, str).value;
            } catch (__) {
              console.error(__);
            }
          }

          return '';
        },
      },
      markdownItSetup(md) {
        md.use(require('markdown-it-container'), 'demo', {
          validate(params) {
            return params.match(/^demo\s*(.*)$/);
          },

          render(tokens, idx) {
            const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
            if (tokens[idx].nesting === 1) {
              const url = tokens[idx + 1].info.split(' ')[1];
              // opening tag
              const contentHtml = encodeBase64(tokens[idx + 1].content);
              return `<demo-block data-url="${url}" data-type="vue" data-value="${contentHtml}">${md.utils.escapeHtml(
                m[1],
              )}\n`;
            } else {
              // closing tag
              return '</demo-block>\n';
            }
          },
        });
      },
    }),
    Components({
      resolvers: [resolver(), ElementPlusResolver()],
    }),
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.vue', '.css', '.scss', '.md', '.js'],
    alias: {
      '@': resolve(__dirname),
      '@src': resolve(__dirname, 'src'),
    },
  },
  server: {
    port: 3003,
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/style/theme.scss";`,
      },
    },
  },
});
