<script setup lang="ts">
import { BellFilled } from '@element-plus/icons-vue'
</script>

<template>
  <el-dropdown trigger="click">
    <el-badge :value="100">
      <el-link><el-icon :size="20"><BellFilled /></el-icon></el-link>
    </el-badge>
    <template #dropdown>
      notofication
      
    </template>
  </el-dropdown>
</template>