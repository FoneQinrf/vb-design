<template>
  <div>
    <fite-block title="loading">
      <template #default>
        <div>
          <p>primary</p>
          <fite-button type="primary" :loading="loading">loading</fite-button>
          <fite-button :loading="loading" type="primary" ghost>loading</fite-button>
        </div>
      </template>
    </fite-block>
    <fite-block title="自定义图标">
      <template #default>
        <div>
          <fite-button type="primary" size="mini">
            <template #icon>
              <fite-icon color="#ffffff">
                <PlayCircle />
              </fite-icon>
            </template>
          </fite-button>
          <fite-button :loading="loading" type="primary" ghost>loading</fite-button>
        </div>
        <div>
          <p>自定义右边图标</p>
          <fite-button type="primary">
            按 钮
            <template #right-icon>
              <fite-icon color="#ffffff">
                <PlayCircle />
              </fite-icon>
            </template>
          </fite-button>
        </div>
      </template>
    </fite-block>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PlayCircle } from '../../../../icon/index';

const loading = ref(true);
</script>
