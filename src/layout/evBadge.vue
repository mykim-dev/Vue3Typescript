<script setup lang="ts">
import { BellFilled } from '@element-plus/icons-vue'
</script>

<template>
  <el-popover placement="bottom" title="Notification" :width="200" trigger="click" content="">
    <template #reference>
      <div class="ev-header-navigation__icon">
        <el-badge :value="100">
          <el-button :icon="BellFilled" />
        </el-badge>
      </div>
    </template>
  </el-popover>
</template>
