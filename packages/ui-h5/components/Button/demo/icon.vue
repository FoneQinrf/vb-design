<template>
  <div>
    <vb-block title="loading">
      <template #default>
        <div>
          <p>primary</p>
          <vb-button type="primary" :loading="loading">loading</vb-button>
          <vb-button :loading="loading" type="primary" ghost>loading</vb-button>
        </div>
      </template>
    </vb-block>
    <vb-block title="自定义图标">
      <template #default>
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
    </vb-block>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PlayCircle } from '../../../../icon/index';

const loading = ref(true);
</script>
