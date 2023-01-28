<template>
  <div class="vb-block">
    <div class="vb-block__title">
      {{ props.title }}
    </div>
    <div :class="{ 'vb-block__body': true, 'vb-block__flex': props.flex }">
      <slot />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  title: String,
  flex: Boolean,
});
</script>

<style lang="scss" scoped>
.vb-block {
  &__body {
    background: var(--vb-white);
    padding: 16px;
  }
  &__title {
    padding: 8px 16px;
    color: var(--vb-text-color-3);
  }
  &__flex {
    display: flex;
    gap: 16px;
  }
}
</style>
