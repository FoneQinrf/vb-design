<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13 42V34C13 33.4477 12.5523 33 12 33H4" :stroke="color" stroke-width="4" />
    <path d="M13 6V14C13 14.5523 12.5523 15 12 15H4" :stroke="color" stroke-width="4" />
    <path d="M35 6V14C35 14.5523 35.4477 15 36 15H44" :stroke="color" stroke-width="4" />
    <path d="M35 42V34C35 33.4477 35.4477 33 36 33H44" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
