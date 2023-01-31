# Button 按钮

---

### 介绍

按钮组件

### 支持框架

`Vue3`、`Taro`

### 使用

```js
import { createApp } from 'vue';

// vue
import { Button } from '@vb-design/vb-ui';
// taro
import { Button } from '@vb-design/vb-ui-taro';

const app = createApp();
app.use(Button);
```

### 代码示例

#### 基础用法

:::demo

```html demo/base
<template>
  <div>
    <p>primary</p>
    <vb-button type="primary">按 钮</vb-button>
    <vb-button disabled type="primary">禁 用</vb-button>
  </div>
  <div>
    <p>warning</p>
    <vb-button type="warning">按 钮</vb-button>
    <vb-button disabled type="warning">禁 用</vb-button>
  </div>
  <div>
    <p>danger</p>
    <vb-button type="danger">按 钮</vb-button>
    <vb-button disabled type="danger">禁 用</vb-button>
  </div>
  <div>
    <p>success</p>
    <vb-button type="success">按 钮</vb-button>
    <vb-button disabled type="success">禁 用</vb-button>
  </div>
</template>
```

:::

#### 圆角按钮

:::demo

```html demo/round
<template>
  <div>
    <p>primary</p>
    <vb-button type="primary" round>按 钮</vb-button>
    <vb-button disabled type="primary" round>禁 用</vb-button>
  </div>
  <div>
    <p>warning</p>
    <vb-button type="warning" round>按 钮</vb-button>
    <vb-button disabled type="warning" round>禁 用</vb-button>
  </div>
  <div>
    <p>danger</p>
    <vb-button type="danger" round>按 钮</vb-button>
    <vb-button disabled type="danger" round>禁 用</vb-button>
  </div>
  <div>
    <p>success</p>
    <vb-button round type="success">按 钮</vb-button>
    <vb-button disabled round type="success">禁 用</vb-button>
  </div>
</template>
```

:::

#### 线框按钮

:::demo

```html demo/ghost
<template>
  <div>
    <p>primary</p>
    <vb-button type="primary" ghost>按 钮</vb-button>
    <vb-button disabled type="primary" ghost>禁 用</vb-button>
    <vb-button type="primary" round ghost>按 钮</vb-button>
  </div>
  <div>
    <p>warning</p>
    <vb-button type="warning" ghost>按 钮</vb-button>
    <vb-button disabled type="warning" ghost>禁 用</vb-button>
    <vb-button type="warning" round ghost>按 钮</vb-button>
  </div>
  <div>
    <p>danger</p>
    <vb-button type="danger" ghost>按 钮</vb-button>
    <vb-button disabled type="danger" ghost>禁 用</vb-button>
    <vb-button type="danger" round ghost>按 钮</vb-button>
  </div>
  <div>
    <p>success</p>
    <vb-button ghost type="success">按 钮</vb-button>
    <vb-button disabled ghost type="success">禁 用</vb-button>
    <vb-button round ghost type="success">按 钮</vb-button>
  </div>
</template>
```

:::

#### 按钮大小

:::demo

```html demo/size
<template>
  <div>
    <p>large</p>
    <vb-button type="primary" size="large">按 钮</vb-button>
  </div>
  <div>
    <p>default</p>
    <vb-button type="warning">按 钮</vb-button>
  </div>
  <div>
    <p>small</p>
    <vb-button type="danger" size="small">按 钮</vb-button>
  </div>
  <div>
    <p>mini</p>
    <vb-button type="success" size="mini">按 钮</vb-button>
  </div>
</template>
```

:::

#### 更多属性

:::demo

```html demo/all
<template>
  <div>
    <p>字体按钮</p>
    <vb-button text>字体按钮</vb-button>
  </div>
  <div>
    <p>通栏按钮</p>
    <vb-button block>按 钮</vb-button>
  </div>
  <div>
    <p>自定义按钮颜色</p>
    <vb-button block bgColor="linear-gradient(278.7deg, #0578FF 5.08%, #15D5FF 108.09%)" color="white">按 钮</vb-button>
  </div>
</template>
```

:::

#### icon 图标配置

:::demo

```html demo/icon
<template>
  <div>
    <p>primary</p>
    <vb-button type="primary" :loading="loading">loading</vb-button>
    <vb-button :loading="loading" type="primary" ghost>loading</vb-button>
  </div>

  <div>
    <vb-button type="primary" size="mini">
      <template #icon>
        <vb-icon color="#ffffff">
          <PlayCircle />
        </vb-icon>
      </template>
    </vb-button>
    <vb-button :loading="loading" type="primary" ghost>loading</vb-button>
  </div>
  <div>
    <p>自定义右边图标</p>
    <vb-button type="primary">
      按 钮
      <template #right-icon>
        <vb-icon color="#ffffff">
          <PlayCircle />
        </vb-icon>
      </template>
    </vb-button>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { PlayCircle } from '@vb-design/icon';

  const loading = ref(true);
</script>
```

:::

<route>
{
  meta: {
    menu: {
      title: '基础组件',
      children: ['Button 按钮']
    }
  }
}
</route>
