<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M38 25L38 23L40 23L40 25L38 25Z" :fill="color" />
    <path d="M23 25L23 23L25 23L25 25L23 25Z" :fill="color" />
    <path d="M8 25L8 23L10 23L10 25L8 25Z" :fill="color" />
    <path d="M38 25L38 23L40 23L40 25L38 25Z" :stroke="color" stroke-width="4" />
    <path d="M23 25L23 23L25 23L25 25L23 25Z" :stroke="color" stroke-width="4" />
    <path d="M8 25L8 23L10 23L10 25L8 25Z" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
