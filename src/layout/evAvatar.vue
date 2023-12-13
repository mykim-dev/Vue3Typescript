<script setup lang="ts">
import { UserFilled, Plus, CirclePlusFilled, CirclePlus, Check, CircleCheck } from '@element-plus/icons-vue'
</script>

<template>
  <el-dropdown trigger="click">
    <div class="ev-header-navigation__icon">
      <el-avatar :icon="UserFilled" />
      <span>Education Admin</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="Plus">Action 1</el-dropdown-item>
        <el-dropdown-item :icon="CirclePlusFilled">Action 2</el-dropdown-item>
        <el-dropdown-item :icon="CirclePlus">Action 3</el-dropdown-item>
        <el-dropdown-item :icon="Check">Action 4</el-dropdown-item>
        <el-dropdown-item :icon="CircleCheck">Action 5</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
