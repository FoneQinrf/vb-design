<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M25 10H23V8H25V10Z" :fill="color" />
    <path d="M25 25H23V23H25V25Z" :fill="color" />
    <path d="M25 40H23V38H25V40Z" :fill="color" />
    <path d="M25 10H23V8H25V10Z" :stroke="color" stroke-width="4" />
    <path d="M25 25H23V23H25V25Z" :stroke="color" stroke-width="4" />
    <path d="M25 40H23V38H25V40Z" :stroke="color" stroke-width="4" />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
