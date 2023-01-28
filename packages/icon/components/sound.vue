<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 16L24 7V41L14 32H6V16H14Z"
      :stroke="color"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path d="M31.071 16.929C34.9763 20.8342 34.9763 27.1658 31.071 31.0711" :stroke="color" stroke-width="4" />
    <path d="M36.7279 11.2721C43.7573 18.3015 43.7573 29.6985 36.7279 36.7279" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
