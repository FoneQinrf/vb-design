<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_4278)">
      <circle cx="24" cy="24" r="20" :fill="color" />
      <path d="M18 17V23" stroke="white" stroke-width="4" />
      <path d="M32 32H16" stroke="white" stroke-width="4" />
      <path d="M30 17V23" stroke="white" stroke-width="4" />
    </g>
    <defs>
      <clipPath id="clip0_1_4278">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
