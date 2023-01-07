## 开发规范

- `packages`文件夹下存放 UI 组件或者业务组件

### 示例

```js
|——Page
    |——__tests__  //存放单元测试
    |——src   //存放当前组件的多端逻辑
    |——demo  //存的当前演示
    |——index.md  //使用文档
    |——index.scss  //当前组件的样式
    |——index.taro.tsx   //taro版本的组件代码
    |——index.tsx        //H5组件的代码
```

### 组件对外暴露

```js
import { createComponent } from '@/packages/utils';

const { create, bem } = createComponent('page');

export default create({
  //...组件代码逻辑
});
```

## 组件库打包

```shell
pnpm build
```

## 预览

```shell
pnpm dev
```
