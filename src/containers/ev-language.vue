<script setup lang="ts">
import { LocationFilled } from '@element-plus/icons-vue'
</script>

<template>
  <el-dropdown trigger="click">
    <el-link><el-icon :size="20"><LocationFilled /></el-icon></el-link>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>KOR</el-dropdown-item>
        <el-dropdown-item>ENG</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>