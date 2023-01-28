<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31 41H7L7 7L31 7" :stroke="color" stroke-width="4" />
    <path d="M32.071 33.1421L41.1421 24.0711L32.071 15" :stroke="color" stroke-width="4" />
    <path d="M17 24.0699L41 24.0699" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
