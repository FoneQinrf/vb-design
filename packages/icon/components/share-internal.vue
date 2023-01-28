<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 35.9998V41.9998H8V35.9998" :stroke="color" stroke-width="4" />
    <path d="M30 7L38.9997 15.9997L30 24.9997" :stroke="color" stroke-width="4" />
    <path d="M9.1084 31.9997C10.3988 23.1322 23.0248 16.1495 38.5 16.0021" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
