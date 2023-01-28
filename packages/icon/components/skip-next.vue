<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_1_4367)">
      <path
        d="M34 24L10 40L10 8L34 24Z"
        :stroke="color"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <line x1="38" y1="6" x2="38" y2="42" :stroke="color" stroke-width="4" />
    </g>
    <defs>
      <clipPath id="clip0_1_4367">
        <rect width="48" height="48" fill="white" />
      </clipPath>
    </defs>
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
