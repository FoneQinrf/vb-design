<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.533 10.9741C16.8672 10.5505 15.9961 11.0287 15.9961 11.8178V36.1744C15.9961 36.9635 16.8672 37.4418 17.533 37.0181L36.6704 24.8398C37.2879 24.4468 37.2879 23.5454 36.6704 23.1524L17.533 10.9741Z"
      :fill="color"
    />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
