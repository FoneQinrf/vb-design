import fs from 'fs-extra';
import { camelCase, upperFirst } from 'lodash-es';

const svgs = fs.readdirSync('./src');
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let mianTemplate = '';

const camelCaseFn = name => upperFirst(camelCase(name));

svgs.forEach(file => {
  const str = fs.readFileSync(`./src/${file}`, 'utf-8');
  const start = str.match(/<svg([\s\S]*?)>/)[0].length;
  const end = str.indexOf('</svg>');
  const paths = str.substring(start, end);
  const paths1 = paths.replace(new RegExp('stroke="#4E5969"', 'g'), ':stroke="color"');
  const context = paths1.replace(new RegExp('fill="#4E5969"', 'g'), ':fill="color"');
  const code = `
  <template>
    <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        ${context}
    </svg>
  </template>

  <script setup>
  import { inject } from 'vue';

  const size = inject('size') || 20;
  const color = inject('color') || '#4e5969';
  </script>
  `;

  const fileName = file.replace('.svg', '');
  fs.writeFileSync(`./components/${fileName}.vue`, code);
  mianTemplate += `import ${camelCaseFn(fileName)} from './components/${fileName}.vue';\n`;
});

if (svgs.length) {
  mianTemplate += 'export {\n';
}

svgs.forEach(file => {
  const fileName = file.replace('.svg', '');
  mianTemplate += `${camelCaseFn(fileName)},\n`;
});

if (svgs.length) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  mianTemplate += '}';
  fs.writeFileSync(`./index.ts`, mianTemplate);
}
