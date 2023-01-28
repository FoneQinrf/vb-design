<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M43 22C43 14.268 36.5081 8 28.5 8C20.4919 8 14 14.268 14 22L14.0001 22.0549C9.50011 22.5523 6 26.3674 6 31C6 35.9706 10.0294 40 15 40H28"
      :stroke="color"
      stroke-width="4"
    />
    <path d="M44.1421 34.071L37.0711 41.1421L30 34.071" :stroke="color" stroke-width="4" />
    <path d="M37.07 26V41" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
