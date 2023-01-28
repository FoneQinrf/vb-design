<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5327 7.96466C11.8667 7.54552 11 8.02413 11 8.81098V39.1883C11 39.9753 11.867 40.4539 12.533 40.0344L36.6561 24.8402C37.279 24.4478 37.2788 23.5398 36.6558 23.1477L12.5327 7.96466Z"
      :stroke="color"
      stroke-width="4"
    />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
