<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M33.0721 22.071L24.0011 31.1421L14.93 22.071M40 35V41H8V35" :stroke="color" stroke-width="4" />
    <path d="M24 5V31" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
