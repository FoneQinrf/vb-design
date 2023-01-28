<template>
  <div>
    <fite-block title="圆角按钮">
      <template #default>
        <div>
          <p>primary</p>
          <fite-button type="primary" round>按 钮</fite-button>
          <fite-button disabled type="primary" round>禁 用</fite-button>
        </div>
        <div>
          <p>warning</p>
          <fite-button type="warning" round>按 钮</fite-button>
          <fite-button disabled type="warning" round>禁 用</fite-button>
        </div>
        <div>
          <p>danger</p>
          <fite-button type="danger" round>按 钮</fite-button>
          <fite-button disabled type="danger" round>禁 用</fite-button>
        </div>
        <div>
          <p>success</p>
          <fite-button round type="success">按 钮</fite-button>
          <fite-button disabled round type="success">禁 用</fite-button>
        </div>
      </template>
    </fite-block>
  </div>
</template>
