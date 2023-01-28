<template>
  <div class="vb-demo__icon">
    <div class="title">svg图标</div>
    <div class="vb-demo__body">
      <div v-for="item in icons" class="icon-wrp">
        <vb-icon :size="24">
          <component :is="item" />
        </vb-icon>
      </div>
    </div>
    <div class="title">svg图标</div>
    <div class="vb-demo__body">
      <vb-icon :size="24" name="vb-icon-loading" />
    </div>
  </div>
</template>

<script>
import * as icons from '../../../../packages/icon/index';
import { Icon } from '../../../../packages/ui-h5/ui.h5';

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
.vb-demo__body {
  display: flex;
  flex-wrap: wrap;
}
.vb-demo__icon {
  width: 100%;
}
.icon-wrp {
  padding: 16px;
}
</style>
