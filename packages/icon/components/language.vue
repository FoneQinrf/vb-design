<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M42 43L39.6151 37M26 43L28.3842 37M39.6151 37L38.8202 35L34.6396 25H33.3596L29.1789 35L28.3842 37M39.6151 37H28.3842"
      :stroke="color"
      stroke-width="4"
    />
    <path d="M17 5L18 10" :stroke="color" stroke-width="4" />
    <path d="M5 11L31 11" :stroke="color" stroke-width="4" />
    <path
      d="M11 11C11 11 12.8889 18.8261 17.6112 23.1739C22.3333 27.5217 30 31 30 31"
      :stroke="color"
      stroke-width="4"
    />
    <path d="M25 11C25 11 23.1111 18.8261 18.3888 23.1739C13.6667 27.5218 6 31 6 31" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
