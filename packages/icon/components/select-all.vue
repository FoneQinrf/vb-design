<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.3137 7.24268L10.2426 14.3137L6 10.0711" :stroke="color" stroke-width="4" />
    <path d="M17.3137 20.2427L10.2426 27.3137L6 23.0711" :stroke="color" stroke-width="4" />
    <path d="M17.3137 33.2427L10.2426 40.3137L6 36.0711" :stroke="color" stroke-width="4" />
    <path d="M21 25H43" :stroke="color" stroke-width="4" />
    <path d="M21 11H43" :stroke="color" stroke-width="4" />
    <path d="M21 39H43" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
