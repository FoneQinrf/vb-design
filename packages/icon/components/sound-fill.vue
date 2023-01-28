<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M14 15L24 8V40L14 33H6V15H14Z" :fill="color" />
    <path
      d="M31.071 17C34.9763 20.9052 34.9763 27.2369 31.071 31.1421M36.728 11C43.7575 18.0294 43.7575 29.4264 36.728 36.4558M14 15L24 8V40L14 33H6V15H14Z"
      :stroke="color"
      stroke-width="4"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
