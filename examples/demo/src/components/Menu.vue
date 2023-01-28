<template>
  <div class="mx-menu">
    <el-scrollbar>
      <div v-for="item in menu" :key="item.title">
        <div class="mx-menu--title">{{ item.title }}</div>
        <ul class="mx-menu--group" v-if="item.children && item.children.length > 0">
          <router-link class="menu" v-for="route in item.children" :to="route.path" :key="route.path">
            <li>{{ route.name }}</li>
          </router-link>
        </ul>
      </div>
    </el-scrollbar>
  </div>
</template>

<script setup>
import { getMenu } from '@/router';

const menu = getMenu();
</script>

<style lang="scss" scoped>
.mx-menu {
  height: 100%;
  width: 240px;
  border-right: 1px solid #e8e6e6;
  &--title {
    padding: 20px 18px;
    font-size: 16px;
    font-weight: bold;
  }
  &--group {
    display: block;
    .menu {
      display: block;
      width: 100%;
      padding: 10px 0 10px 30px;
      box-sizing: border-box;
      position: relative;
      color: #666;
      font-size: 16px;
    }
    .router-link-active {
      color: var(--vb-primary-color);
      background: var(--vb-primary-color-default);
      &::after {
        position: absolute;
        content: '';
        width: 2px;
        height: 100%;
        top: 50%;
        right: -1px;
        background: var(--vb-primary-color);
        transform: translate(0, -50%);
      }
    }
  }
}
</style>
