<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="31.0711" y="8.4436" width="12" height="29" transform="rotate(45 31.0711 8.4436)" :fill="color" />
    <path
      d="M33.8995 5.61514C34.6805 4.83409 35.9469 4.83409 36.7279 5.61514L42.3848 11.272C43.1658 12.053 43.1658 13.3194 42.3848 14.1004L40.9706 15.5146L32.4853 7.02935L33.8995 5.61514Z"
      :fill="color"
    />
    <path
      d="M17.636 38.8493L9.15076 30.364L5.54057 41.1946C5.27999 41.9763 6.02372 42.7201 6.80548 42.4595L17.636 38.8493Z"
      :fill="color"
    />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
