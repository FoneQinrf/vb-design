<template>
  <svg :width="size" :height="size" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 31V20C11 12.8203 16.8203 7 24 7C31.1797 7 37 12.8203 37 20V28C37 33.7841 33.2225 38.6859 28 40.373"
      :stroke="color"
      stroke-width="4"
    />
    <path
      d="M24 41C25.3956 41 26.7399 40.7801 28 40.373V38C28 37.4477 27.5523 37 27 37H21C20.4477 37 20 37.4477 20 38V40C20 40.5523 20.4477 41 21 41H24Z"
      :stroke="color"
      stroke-width="4"
    />
    <path d="M11 21H8C7.44772 21 7 21.4477 7 22V28C7 28.5523 7.44772 29 8 29H11" :stroke="color" stroke-width="4" />
    <path
      d="M37 20V28M37 21H40C40.5523 21 41 21.4477 41 22V28C41 28.5523 40.5523 29 40 29H37V21Z"
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
