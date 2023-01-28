<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M41 30.9999V4.99988M5.82931 26.3935L11.7783 7.69667C11.9103 7.28169 12.2957 6.99988 12.7312 6.99988L34 6.99988L34 28.9999H31L21.5974 41.2233C21.2655 41.6547 20.6495 41.7415 20.2114 41.4185L17.6755 39.5492C15.5038 37.9484 14.6677 35.095 15.6319 32.5753L17 28.9999L7.73517 28.9999C6.38156 28.9999 5.4189 27.6834 5.82931 26.3935Z"
      :stroke="color"
      stroke-width="4"
    />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
