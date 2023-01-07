<template>
  <div class="demo">
    <Page fixed>
      <template #head>
        <div>
          <nut-tabs v-model="state.tabValue" @click="click">
            <nut-tabpane title="分页列表"></nut-tabpane>
            <nut-tabpane title="空数据"></nut-tabpane>
          </nut-tabs>
        </div>
      </template>
      <template #default>
        <PageList :fetch="fetch" ref="pageList">
          <template v-slot="{ item, index }" #default>
            <div style="height: 100px">自定义的内容，item：{{ item }}, index：{{ index }}</div>
          </template>
        </PageList>
      </template>
      <template #foot>
        <div class="button">
          <nut-button block type="primary">button</nut-button>
        </div>
      </template>
    </Page>
  </div>
</template>

<script lang="ts" setup>
import Page from '../index.tsx';
import PageList from '../../PageList';
import { reactive, ref } from 'vue';

const state = reactive({
  tabValue: 0,
});
const pageList = ref<any>();

const getData = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    }, 1000);
  });
};

const click = ({ paneKey }) => {
  if (paneKey == 1) {
    pageList.value.clear();
  }
  if (paneKey == 0) {
    pageList.value.refresh();
  }
};

const fetch = async (pageSize, pageNum) => {
  const rows = await getData();
  return {
    rows,
    total: 20,
  };
};
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
