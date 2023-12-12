<script setup lang="ts">
import { BellFilled } from '@element-plus/icons-vue'
</script>

<template>
  <el-dropdown trigger="click">
    <el-badge :value="100">
      <div class="ev-button"><el-button :icon="BellFilled" link /></div>
    </el-badge>
    <template #dropdown>notofication</template>
  </el-dropdown>
</template>
