<template>
  <div class="mx-body">
    <div><Menu /></div>
    <div class="mx-container">
      <el-scrollbar>
        <div class="mx-main">
          <router-view v-slot="{ Component }">
            <component :is="Component" />
          </router-view>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Menu from '@src/components/Menu';
</script>

<style lang="scss" scoped>
.mx-body {
  display: flex;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 60px;
}
.mx-container {
  flex: 1;
  position: relative;
  height: 100%;
}
.mx-main {
  box-sizing: border-box;
  padding: 0 40px 40px 40px;
}
.mx-markdown {
  padding-right: 375 + 70px;
  padding-left: 30px;
  overflow-y: auto;
  height: 100%;
  padding-bottom: 30px;
  box-sizing: border-box;
}
</style>
