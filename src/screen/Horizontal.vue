<script lang="ts" setup>

import { AppSettingStore } from '@/stores/common/index'
import List from '@/components/List.vue'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
const screenGutter = AppSetting.screenGutter
</script>

<template>
  <el-row class="ev-screen horizontal" :gutter="screenGutter" :class="{ 'is-full': isFull }">
    <el-col class="ev-screen-item" v-for="index in 2" :span="12">
      <!-- <List /> -->
    </el-col>
  </el-row>
</template>