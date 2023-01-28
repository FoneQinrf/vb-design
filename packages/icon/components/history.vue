<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M9 33.9534C12.2248 38.8035 17.7391 42 24 42C33.9411 42 42 33.9411 42 24C42 14.0589 33.9411 6 24 6C14.3126 6 6.41257 13.6528 6.01564 23.2426C6.00525 23.4938 6 23.7463 6 24"
      :stroke="color"
      stroke-width="4"
    />
    <path d="M32 26H23V17" :stroke="color" stroke-width="4" />
    <path d="M5.5 23.2427L6 24L6.5 23.2427H5.5Z" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
