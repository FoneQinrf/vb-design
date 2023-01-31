<template>
  <div class="demo-block" ref="demoCode">
    <!--
      <a class="jump">codesandbox</a>
      <a class="jump">在线调试</a> -->
    <div class="code">
      <div class="operation">
        <a class="jump" @click="open = !open">{{ !open ? '展开' : '收起' }}</a>
        <a class="jump" @click="copyCode">复制代码</a>
      </div>
      <el-scrollbar>
        <div :class="{ onlineCode: true, open: open, close: !open }">
          <slot></slot>
        </div>
      </el-scrollbar>
    </div>
    <div class="demo">
      <div class="mx-preview" v-if="isDemo">
        <div class="mx-demo-nav">{{ title }}</div>
        <div class="mx-demo-wrp">
          <iframe class="mx-iframe" :src="src"></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { decodeBase64 } from '@/utils';
import { ref, onMounted, computed, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { basePath } from '@/router';

const route = useRoute();
const demoCode = ref();
const open = ref(false);
const src = ref('');

const { origin } = window.location;

const title = computed(() => {
  return route.meta.title;
});

const isDemo = computed(() => {
  return route.meta.demo;
});

const copyCodeHtml = (code, callback) => {
  let oInput = document.querySelector('.oInput');
  if (!oInput) {
    oInput = document.createElement('textarea');
  }
  oInput.value = code;
  document.body.appendChild(oInput);
  oInput.select(); // 选择对象
  document.execCommand('Copy'); // 执行浏览器复制命令
  oInput.className = 'oInput';
  oInput.style.display = 'none';
  oInput.setSelectionRange(0, 9999);
  callback();
};

const copyCode = () => {
  const sourceValue = decodeBase64(demoCode.value.dataset.value);
  copyCodeHtml(sourceValue, () => {
    alert('复制成功');
  });
};

onMounted(() => {
  nextTick(() => {
    src.value = `${origin}${basePath}vb-design/mobile.html#${route.path}/${demoCode.value.dataset.url}`;
  });

  //   console.log(decodeBase64(code.value.dataset.value));
  // const sourceValue = decodeBase64(code.value.dataset.value);
  //   const parameters = getParameters({
  //     files: {
  //       'package.json': {
  //         content: codesandboxPackage,
  //       },
  //       'tsconfig.json': {
  //         content: codesandboxtsconfig,
  //       },
  //       'tsconfig.node.json': {
  //         content: codesandboxNode,
  //       },
  //       'vite.config.ts': {
  //         content: codesandboxVite,
  //       },
  //       'index.html': {
  //         content: codesandboxHtml,
  //       },
  //       'src/main.ts': {
  //         content: MainJsStr,
  //       },
  //       'src/App.vue': {
  //         content: sourceValue,
  //       },
  //     },
  //   });
});
</script>

<style lang="scss" scoped>
.demo-block {
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  border: 1px solid #e8e7e7;
  padding: 16px;
  gap: 16px;
  display: flex;
}
.code {
  position: relative;
  flex: 1;
  background: #fafafa;
}
.onlineCode {
  position: relative;
  background: #fafafa;
  font-size: 14px;
  // border-radius: 12px;
  min-width: 400px;
  :deep(pre) {
    margin: 0;
    padding: 0;
  }
}
.close {
  max-height: 800px;
}
.open {
  max-height: auto;
}
.operation {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  background: #e2e1e1;
  gap: 10px;
  padding: 0 12px;
  z-index: 100;
  .jump {
    padding: 6px 0;
    cursor: pointer;
    color: var(--vb-primary-color);
    font-size: 12px;
    &:hover {
      color: var(--vb-primary-color-hover);
    }
  }
}

.mx-preview {
  width: 375px;
  height: 620px;
  overflow: hidden;
  background: #fafafa;
  position: relative;
  border: 1px solid #f1f1f1;
}
.mx-demo-nav {
  height: 52px;
  position: relative;
  box-shadow: 0 4px 10px #00000012;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
}
.mx-demo-wrp {
  height: 100%;
  box-sizing: border-box;
  padding-top: 53px;
}
.mx-iframe {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
