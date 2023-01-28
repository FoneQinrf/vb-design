<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.2 6.28003L20.9487 41.7331" :stroke="color" stroke-width="4" />
    <path d="M16.7337 12.6863L5.42001 24L16.7337 35.3137" :stroke="color" stroke-width="4" />
    <path d="M31.2552 12.6863L42.5689 24L31.2552 35.3137" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
