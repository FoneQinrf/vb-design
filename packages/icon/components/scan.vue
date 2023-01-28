<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 24H43" :stroke="color" stroke-width="4" />
    <path d="M41 17V7H31" :stroke="color" stroke-width="4" />
    <path d="M7 17V7H17" :stroke="color" stroke-width="4" />
    <path d="M41 31V41H31" :stroke="color" stroke-width="4" />
    <path d="M7 31V41H17" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
