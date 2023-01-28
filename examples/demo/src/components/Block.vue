<template>
  <div class="fite-block">
    <div class="fite-block__title">
      {{ props.title }}
    </div>
    <div :class="{ 'fite-block__body': true, 'fite-block__flex': props.flex }">
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
.fite-block {
  &__body {
    background: var(--fite-white);
    padding: 16px;
  }
  &__title {
    padding: 8px 16px;
    color: var(--fite-text-color-3);
  }
  &__flex {
    display: flex;
    gap: 16px;
  }
}
</style>
