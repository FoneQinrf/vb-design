<!--
 * @Author: Fone`峰
 * @Date: 2022-05-27 09:48:36
 * @LastEditors: Fone`峰
 * @LastEditTime: 2022-06-15 10:40:00
 * @Description: file content
 * @Email: qinrifeng@163.com
 * @Github: https://github.com/FoneQinrf
-->
<div align="center">
<h1>add mth-request-module 🛠📦</h1>

<p>CLI toolbox for common request-module for mx</p>
</div>

---

## 问题

前端在开发和服务端对接口每一个借口都会写一个对外暴露的方法来对服务端接口的描述。这些对接口描述的方法大部分都是写在一个文
件内的，着在多人协作开发的情况下容易造成代码冲突的问题。

## 解决方案

我们可以通过脚本对 Swagger 进行解析生成对接口描述的代码。

## 安装

```

npm install mth-request-module  or  yarn add mth-request-module

```

## 使用

```

const Swagger = require("mth-request-module");
const fs = require("fs");
const path = require("path");
const axios = require("axios");

axios.get("url").then((res) => {
    const opt = {
        swagger: res,
    };
    const codeResult = Swagger.axiosApi(opt);
    const writePath = `service/api.js`;
    fs.writeFileSync(path.join(__dirname, writePath), codeResult);
})

```

```
// axios拦截器

import axios from 'axios';
import { setAxiosInstance, setDomain } from 'service/api';


const httpConfig = {
  // 网络超时设置
  timeout: 60000,
  // 服务端接口host
  baseURL: baseURL,
};

export default {
    install() {
        const axiosInstance = axios.create({
            timeout: httpConfig.timeout,
        });

        axiosInstance.interceptors.request.use((config)=>{})

        axiosInstance.interceptors.response.use((response)=>{})

        // 重置axios实例
        setAxiosInstance(axiosInstance);
        setDomain(httpConfig.baseURL);
    }
}

```

### Vue

```
// main.js
import Vue from 'vue';
import interceptors from '拦截器';

Vue.use(interceptors);

```

### React

```
// main.js
import interceptors from '拦截器';

interceptors.install()
```

### 使用接口

```
import { ApiMethod } from 'service/api';

ApiMethod().then(()=>{})

```

\*注：生成的接口文件中寻找某个接口的方法可通过 url 或者接口备注查找
