<template>
  <div class="fite-demo__icon">
    <div class="title">svg图标</div>
    <div class="fite-demo__body">
      <div v-for="item in icons" class="icon-wrp">
        <fite-icon :size="24">
          <component :is="item" />
        </fite-icon>
      </div>
    </div>
    <div class="title">svg图标</div>
    <div class="fite-demo__body">
      <fite-icon :size="24" name="fite-icon-loading" />
    </div>
  </div>
</template>

<script>
import * as icons from '../../../../packages/icon/index';
import { Icon } from '../../../../packages/fite-ui/fite-ui';

export default {
  components: {
    ...icons,
    [Icon.name]: Icon,
  },
  setup() {
    return { icons };
  },
};
</script>

<style scoped>
.title {
  padding: 8px 0;
  font-size: 16px;
  font-weight: bold;
}
.fite-demo__body {
  display: flex;
  flex-wrap: wrap;
}
.fite-demo__icon {
  width: 100%;
}
.icon-wrp {
  padding: 16px;
}
</style>
