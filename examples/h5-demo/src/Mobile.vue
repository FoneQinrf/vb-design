<template>
  <router-view v-slot="{ Component }">
    <component :is="Component" />
  </router-view>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  height: 100%;
}
#app {
  min-height: 100%;
  user-select: none;
}
* {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
