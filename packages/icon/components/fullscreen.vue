<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 31V39C6 39.5523 6.44772 40 7 40H15" :stroke="color" stroke-width="4" />
    <path d="M6 17V9C6 8.44772 6.44772 8 7 8H15" :stroke="color" stroke-width="4" />
    <path d="M42 17V9C42 8.44772 41.5523 8 41 8H33" :stroke="color" stroke-width="4" />
    <path d="M42 31V39C42 39.5523 41.5523 40 41 40H33" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
