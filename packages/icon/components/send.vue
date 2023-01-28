<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M14 24L7 19V7L41 24L7 41V29L14 24ZM14 24H39"
      :stroke="color"
      stroke-width="4"
      stroke-miterlimit="3.8637"
      stroke-linecap="square"
    />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
