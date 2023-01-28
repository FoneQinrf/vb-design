<template>
  <div>
    <vb-block title="圆角按钮">
      <template #default>
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
    </vb-block>
  </div>
</template>
