<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M31 41H7L7 7L31 7" :stroke="color" stroke-width="4" />
    <path d="M43 24H19" :stroke="color" stroke-width="4" />
    <path d="M27.9289 33.0721L18.8578 24.001L27.9289 14.9299" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
