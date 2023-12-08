<script lang="ts" setup>
import List from '@/components/List.vue'

const screenInfo = {
  screenType: 'horizontal',
  screenFull: true,  
  screenList: [
    { span: 12 },
    { span: 12 },
]}
</script>

<template>
  <el-row class="ev-screen" :class="[screenInfo.screenType, { 'is-full': screenInfo.screenFull }]">
    <el-col class="ev-screen-item" :span="screenItem.span" v-for="screenItem in screenInfo.screenList">
      <el-scrollbar wrap-class="ev-screen-scroll">
        <div class="ev-component">
          <el-scrollbar wrap-class="ev-component-scroll">
            <List />
          </el-scrollbar>
        </div>
      </el-scrollbar>
    </el-col>
  </el-row>
</template>