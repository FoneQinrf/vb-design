<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M13.5855 12.1451C12.9242 11.6675 12 12.14 12 12.9558V35.0442C12 35.86 12.9242 36.3325 13.5855 35.8549L28.8775 24.8107C29.4302 24.4115 29.4302 23.5885 28.8775 23.1893L13.5855 12.1451Z"
      :fill="color"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M33 36C32.4477 36 32 35.5523 32 35V13C32 12.4477 32.4477 12 33 12H35C35.5523 12 36 12.4477 36 13V35C36 35.5523 35.5523 36 35 36H33Z"
      :fill="color"
    />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
