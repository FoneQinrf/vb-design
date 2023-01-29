<template>
  <div class="mx-preview" v-if="isDemo">
    <div class="mx-demo-nav">{{ title }}</div>
    <div class="mx-demo-wrp">
      <iframe class="mx-iframe" :src="src"></iframe>
    </div>
  </div>
</template>

<script  setup>
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { basePath } from '@/router';

const route = useRoute();

const { origin } = window.location;

const title = computed(() => {
  return route.meta.title;
});

const isDemo = computed(() => {
  return route.meta.demo;
});

const src = computed(() => {
  return `${origin}${basePath}/vb-design/mobile.html#${route.path}/demo`;
});
</script>

<style lang="scss" scoped>
.mx-preview {
  position: absolute;
  width: 375px;
  height: calc(100vh - 300px);
  top: 80px;
  right: 30px;
  overflow: hidden;
  box-shadow: #ebedf0 0 4px 12px;
  border-radius: 12px;
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
