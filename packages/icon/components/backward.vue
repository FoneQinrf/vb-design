<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M38.2929 36.2929L26.7071 24.7071C26.3166 24.3166 26.3166 23.6834 26.7071 23.2929L38.2929 11.7071C38.9229 11.0772 40 11.5233 40 12.4142L40 35.5858C40 36.4767 38.9229 36.9229 38.2929 36.2929Z"
      :stroke="color"
      stroke-width="4"
    />
    <path
      d="M21 12.4142L21 35.5858C21 36.4767 19.9229 36.9229 19.2929 36.2929L7.70711 24.7071C7.31658 24.3166 7.31658 23.6834 7.70711 23.2929L19.2929 11.7071C19.9229 11.0772 21 11.5233 21 12.4142Z"
      :stroke="color"
      stroke-width="4"
    />
  </svg>
</template>

<script setup>
import { inject } from 'vue';

const size = inject('size') || 20;
const color = inject('color') || '#4e5969';
</script>
