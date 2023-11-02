<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
import EvForm from '@/components/Form.vue'
import EvList from '@/components/List.vue'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
const screenGutter = AppSetting.screenGutter
</script>

<template>
  <el-row class="ev-screen horizontal" :gutter="screenGutter" :class="{ 'is-full': isFull }">
    <el-col class="ev-screen-item" :span="12">
      <EvForm />
    </el-col>
    <el-col class="ev-screen-item" :span="12">
      <EvList />
    </el-col>
  </el-row>
</template>