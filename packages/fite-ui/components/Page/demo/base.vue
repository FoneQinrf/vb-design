<template>
  <div class="demo">
    <Page>
      <template #head>
        <div>
          <nut-searchbar>
            <template #rightout> 搜索 </template>
          </nut-searchbar>
        </div>
      </template>
      <template #default>
        <div>内容</div>
      </template>
    </Page>
  </div>
</template>

<script setup>
import Page from '../index.tsx';
import PageList from '../../PageList';
</script>

<style lang="scss" scoped>
.demo {
  height: 100vh;
}
:deep(.nut-tabs__content) {
  display: none;
}
</style>
