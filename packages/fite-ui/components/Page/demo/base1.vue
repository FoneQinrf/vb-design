<template>
  <div class="demo">
    <Page>
      <template #default>
        <div>内容</div>
      </template>
      <template #foot>
        <div class="button"></div>
      </template>
    </Page>
  </div>
</template>

<script setup>
import Page from '../index.tsx';
</script>

<style lang="scss" scoped>
.demo {
  height: 100vh;
  .button {
    padding: 16px;
    background: #f5f5f5;
  }
}
:deep(.nut-tabs__content) {
  display: none;
}
</style>
