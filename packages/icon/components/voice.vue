<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M41 21V22C41 30.8366 33.8366 38 25 38H23C14.1634 38 7 30.8366 7 22V21" :stroke="color" stroke-width="4" />
    <path
      d="M15 15C15 10.0294 19.0294 6 24 6C28.9706 6 33 10.0294 33 15V21C33 25.9706 28.9706 30 24 30C19.0294 30 15 25.9706 15 21V15Z"
      :stroke="color"
      stroke-width="4"
    />
    <path d="M24 38V44" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
