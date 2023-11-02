<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
import Form from '@/components/Form.vue'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
const screenGutter = AppSetting.screenGutter
</script>

<template>
  <el-row class="ev-screen vertical" :gutter="screenGutter" :class="{ 'is-full': isFull }">
    <el-col class="ev-screen-item" v-for="index in 2">
      <Form />
    </el-col>
  </el-row>
</template>