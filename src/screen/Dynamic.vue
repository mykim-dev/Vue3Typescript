<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
const AppSetting = useAppStore()
const isFull = true
</script>

<template>
  <el-row class="ev-screen dynamic" :class="{ 'is-full': isFull }">
    <el-col class="ev-screen-item"></el-col>
  </el-row>
</template>