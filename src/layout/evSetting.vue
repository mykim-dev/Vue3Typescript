<script setup lang="ts">
import { Tools, Plus, CirclePlusFilled, CirclePlus, Check, CircleCheck } from '@element-plus/icons-vue'
</script>

<template>
  <el-dropdown trigger="click">
    <div class="ev-header-navigation__icon">
      <el-button :icon="Tools" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>Screen</el-dropdown-item>
        <el-dropdown-item>Version</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
