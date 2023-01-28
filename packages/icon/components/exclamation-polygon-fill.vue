<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 6H32L42 17V31L32 42H16L6 31V17L16 6Z" :fill="color" :stroke="color" stroke-width="4" />
    <path d="M24 28L24 14M24 30L24 34" stroke="white" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
