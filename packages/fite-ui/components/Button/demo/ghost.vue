<template>
  <div>
    <fite-block title="圆角按钮">
      <template #default>
        <div>
          <p>primary</p>
          <fite-button type="primary" ghost>按 钮</fite-button>
          <fite-button disabled type="primary" ghost>禁 用</fite-button>
          <fite-button type="primary" round ghost>按 钮</fite-button>
        </div>
        <div>
          <p>warning</p>
          <fite-button type="warning" ghost>按 钮</fite-button>
          <fite-button disabled type="warning" ghost>禁 用</fite-button>
          <fite-button type="warning" round ghost>按 钮</fite-button>
        </div>
        <div>
          <p>danger</p>
          <fite-button type="danger" ghost>按 钮</fite-button>
          <fite-button disabled type="danger" ghost>禁 用</fite-button>
          <fite-button type="danger" round ghost>按 钮</fite-button>
        </div>
        <div>
          <p>success</p>
          <fite-button ghost type="success">按 钮</fite-button>
          <fite-button disabled ghost type="success">禁 用</fite-button>
          <fite-button round ghost type="success">按 钮</fite-button>
        </div>
      </template>
    </fite-block>
  </div>
</template>
