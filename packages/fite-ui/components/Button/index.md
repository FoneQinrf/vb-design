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
import { Button } from '@fite-design/fite-ui';
// taro
import { Button } from '@fite-design/fite-ui-taro';

const app = createApp();
app.use(Button);
```

### 代码示例

#### 基础用法

:::demo

```html demo/base
<template>
  <div>
    <p>默认</p>
    <button>默认按钮</button>
    <button disabled>按钮禁用</button>
  </div>
  <div>
    <p>primary</p>
    <button type="primary">按 钮</button>
    <button disabled type="primary">禁 用</button>
  </div>
  <div>
    <p>warning</p>
    <button type="warning">按 钮</button>
    <button disabled type="warning">禁 用</button>
  </div>
  <div>
    <p>danger</p>
    <button type="danger">按 钮</button>
    <button disabled type="danger">禁 用</button>
  </div>
</template>
```

:::

#### 圆角按钮

:::demo

```html demo/round
<template>
  <div>
    <p>默认</p>
    <button>默认按钮</button>
    <button disabled>按钮禁用</button>
  </div>
  <div>
    <p>primary</p>
    <button type="primary">按 钮</button>
    <button disabled type="primary">禁 用</button>
  </div>
  <div>
    <p>warning</p>
    <button type="warning">按 钮</button>
    <button disabled type="warning">禁 用</button>
  </div>
  <div>
    <p>danger</p>
    <button type="danger">按 钮</button>
    <button disabled type="danger">禁 用</button>
  </div>
</template>
```

:::

#### 线框按钮

:::demo

```html demo/ghost
<template>
  <div>
    <p>默认</p>
    <button>默认按钮</button>
    <button disabled>按钮禁用</button>
  </div>
  <div>
    <p>primary</p>
    <button type="primary">按 钮</button>
    <button disabled type="primary">禁 用</button>
  </div>
  <div>
    <p>warning</p>
    <button type="warning">按 钮</button>
    <button disabled type="warning">禁 用</button>
  </div>
  <div>
    <p>danger</p>
    <button type="danger">按 钮</button>
    <button disabled type="danger">禁 用</button>
  </div>
</template>
```

:::

#### 按钮大小

:::demo

```html demo/size
<template>
  <div>
    <p>默认</p>
    <button>默认按钮</button>
    <button disabled>按钮禁用</button>
  </div>
  <div>
    <p>primary</p>
    <button type="primary">按 钮</button>
    <button disabled type="primary">禁 用</button>
  </div>
  <div>
    <p>warning</p>
    <button type="warning">按 钮</button>
    <button disabled type="warning">禁 用</button>
  </div>
  <div>
    <p>danger</p>
    <button type="danger">按 钮</button>
    <button disabled type="danger">禁 用</button>
  </div>
</template>
```

:::

#### 更多属性

:::demo

```html demo/all
<template>
  <div>
    <p>默认</p>
    <button>默认按钮</button>
    <button disabled>按钮禁用</button>
  </div>
  <div>
    <p>primary</p>
    <button type="primary">按 钮</button>
    <button disabled type="primary">禁 用</button>
  </div>
  <div>
    <p>warning</p>
    <button type="warning">按 钮</button>
    <button disabled type="warning">禁 用</button>
  </div>
  <div>
    <p>danger</p>
    <button type="danger">按 钮</button>
    <button disabled type="danger">禁 用</button>
  </div>
</template>
```

:::

#### 更多属性

:::demo

```html demo/icon
<template>
  <div>
    <p>默认</p>
    <button>默认按钮</button>
    <button disabled>按钮禁用</button>
  </div>
  <div>
    <p>primary</p>
    <button type="primary">按 钮</button>
    <button disabled type="primary">禁 用</button>
  </div>
  <div>
    <p>warning</p>
    <button type="warning">按 钮</button>
    <button disabled type="warning">禁 用</button>
  </div>
  <div>
    <p>danger</p>
    <button type="danger">按 钮</button>
    <button disabled type="danger">禁 用</button>
  </div>
</template>
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
