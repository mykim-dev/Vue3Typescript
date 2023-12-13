<script setup lang="ts">
import { BellFilled } from '@element-plus/icons-vue'
</script>

<template>
  <el-dropdown trigger="click">
    <div class="ev-header-navigation__icon">
      <el-badge :value="100">
        <el-button :icon="BellFilled" link />
      </el-badge>
    </div>
    <template #dropdown>notofication</template>
  </el-dropdown>
</template>
