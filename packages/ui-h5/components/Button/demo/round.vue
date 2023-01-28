<template>
  <div>
    <vb-block title="圆角按钮">
      <template #default>
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
    </vb-block>
  </div>
</template>
