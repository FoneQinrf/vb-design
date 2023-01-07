# Page 分页组件

---

### 介绍

一个带有分页功能下拉刷新的的组合式功能的业务组件

### 支持框架

`Vue3`、`Taro`

### 使用

```js
import { createApp } from 'vue';

// vue
import { Page, PageList } from '@mx-design/mxui';
//taro
import { Page, PageList } from '@mx-design/mxui/mxui.taro.es';

const app = createApp();
app.use(Page);
app.use(PageList);
```

### 代码示例

#### 布局方式 1

:::demo

```html demo/base
<template>
  <div class="demo">
    <Page fixed>
      <template #head>
        <div>
          <nut-tabs v-model="state.tabValue" @click="click">
            <nut-tabpane title="上下分布"></nut-tabpane>
            <nut-tabpane title="底部悬浮按钮"></nut-tabpane>
          </nut-tabs>
        </div>
      </template>
      <template #default>
        <div>内容</div>
      </template>
    </Page>
  </div>
</template>

<script setup>
  import { Page, PageList } from '@mx-design/mxui';
  import { reactive, ref } from 'vue';

  const state = reactive({
    tabValue: 0,
  });
</script>

<style lang="scss" scoped>
  .demo {
    height: 100vh;
  }
  :deep(.nut-tabs__content) {
    display: none;
  }
</style>
```

:::

#### 布局方式 2

:::demo

```html demo/base1
<template>
  <div class="demo">
    <Page>
      <template #default>
        <div>内容</div>
      </template>
      <template #foot>
        <div class="button">
          <nut-button block type="primary">添加</nut-button>
        </div>
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
    .button {
      padding: 16px;
      background: #f5f5f5;
    }
  }
  :deep(.nut-tabs__content) {
    display: none;
  }
</style>
```

:::

#### 基本使用方式

:::demo

```html demo
<template>
  <div class="demo">
    <mx-page fixed>
      <template #head>
        <div>
          <nut-tabs v-model="state.tabValue" @click="click">
            <nut-tabpane title="分页列表"></nut-tabpane>
            <nut-tabpane title="空数据"></nut-tabpane>
          </nut-tabs>
        </div>
      </template>
      <template #default>
        <mx-page-list :fetch="fetch" ref="pageList">
          <template v-slot="{ item, index }" #default>
            <div style="height: 100px">{{ item }},{{ index }}</div>
          </template>
        </mx-page-list>
      </template>
      <template #foot>
        <div class="button">
          <nut-button block type="primary">button</nut-button>
        </div>
      </template>
    </mx-page>
  </div>
</template>

<script setup>
  import { reactive, ref } from 'vue';

  const state = reactive({
    tabValue: 0,
  });
  const pageList = ref();

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
```

:::

### API

#### Page Props

| 参数  | 说明             | 类型      | 默认值 |
| ----- | ---------------- | --------- | ------ |
| fixed | 头部内容是否固定 | `Boolean` | false  |

<route>
{
  meta: {
    menu: {
      title: '业务组件',
      children: ['Page 分页组件']
    }
  }
}
</route>
