<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 24L38 40L38 8L14 24Z"
      :stroke="color"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <line
      y1="-2"
      x2="36"
      y2="-2"
      transform="matrix(-5.87215e-07 1 1 5.87215e-07 12 6)"
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
