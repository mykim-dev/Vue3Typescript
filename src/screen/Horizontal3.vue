<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
const AppSetting = useAppStore()
const isFull = true
</script>

<template>
  <el-row class="ev-screen horizontal3" :class="{ 'is-full': isFull }">
    <el-col class="ev-screen-item" v-for="index in 2">
      <el-scrollbar wrap-class="ev-screen-scroll" v-if="isFull">        
      </el-scrollbar>
    </el-col>
  </el-row>
</template>