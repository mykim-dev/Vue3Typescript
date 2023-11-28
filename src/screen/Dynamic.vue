<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
</script>

<template>
  <el-row class="ev-screen dynamic" :gutter="screenGutter" :class="{ 'is-full': isFull }">
    <el-col class="ev-screen-item">
      <!-- dynamic -->
    </el-col>
  </el-row>
</template>