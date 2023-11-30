<script setup lang="ts">
import { BellFilled } from '@element-plus/icons-vue'
</script>

<template>
  <el-dropdown trigger="click">
    <el-badge :value="100">
      <el-button :icon="BellFilled" class="ev-header-navigation__icon" link />
    </el-badge>
    <template #dropdown>
      notofication      
    </template>
  </el-dropdown>
</template>