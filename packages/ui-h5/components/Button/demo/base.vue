<template>
  <div>
    <vb-block title="按钮类型">
      <template #default>
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
    </vb-block>
  </div>
</template>
