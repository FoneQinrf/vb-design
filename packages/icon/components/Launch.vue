<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M41 25.9998V39.9998C41 40.552 40.5523 40.9998 40 40.9998H8C7.44772 40.9998 7 40.552 7 39.9998V7.99976C7 7.44747 7.44772 6.99976 8 6.99976H22"
      :stroke="color"
      stroke-width="4"
    />
    <path d="M19.822 28.1776L39.899 8.09961" :stroke="color" stroke-width="4" />
    <path d="M40.9998 20L41.0002 7H28.0008" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
