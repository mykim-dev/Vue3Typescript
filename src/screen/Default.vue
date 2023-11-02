<script lang="ts" setup>

import { AppSettingStore } from '@/stores/common/index'
import Form from '@/components/form.vue'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
const screenGutter = AppSetting.screenGutter
</script>

<template>
  <el-row class="ev-screen default" :gutter="screenGutter" :class="{ 'is-full': isFull }">
    <el-col class="ev-screen-item">
      <Form />
    </el-col>
  </el-row>
</template>