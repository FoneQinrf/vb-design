<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 35V41H8V35" :stroke="color" stroke-width="4" />
    <path d="M14.9301 17.0711L24.0012 8L33.0723 17.0711" :stroke="color" stroke-width="4" />
    <path d="M24.0023 33.1421L24.0023 8.14209" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
