<script setup lang="ts">
import { LocationFilled } from '@element-plus/icons-vue'
</script>

<template>
  <el-dropdown trigger="click">
    <div class="ev-header-navigation__icon">
      <el-button :icon="LocationFilled" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>KOR</el-dropdown-item>
        <el-dropdown-item>ENG</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
