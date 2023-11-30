<script setup lang="ts">
import { LocationFilled } from '@element-plus/icons-vue'
</script>

<template>
  <el-dropdown trigger="click">
    <el-button :icon="LocationFilled" class="ev-header-navigation__icon" link />
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>KOR</el-dropdown-item>
        <el-dropdown-item>ENG</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>