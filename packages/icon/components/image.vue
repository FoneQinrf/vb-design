<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24 33L33 24V33H24ZM24 33L20.5 28.5L17 33H24ZM39 41H9C7.89543 41 7 40.1046 7 39V9C7 7.89543 7.89543 7 9 7H39C40.1046 7 41 7.89543 41 9V39C41 40.1046 40.1046 41 39 41ZM15 15H17V17H15V15Z"
      :stroke="color"
      stroke-width="4"
    />
    <path d="M33 33V24L24 33H33Z" :fill="color" />
    <path d="M23.5 33L20.5 29L17.5 33H23.5Z" :fill="color" />
    <rect x="15" y="15" width="2" height="2" :fill="color" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
