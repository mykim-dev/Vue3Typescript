<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
// import Form from '@/components/evForm.vue'

const AppSetting = useAppStore()

const screenInfo = {
  screenType: 'default',
  screenFull: true,
  screenList: [{ span: 24 }],
}
</script>

<template>
  <el-row class="ev-screen-row" :class="[screenInfo.screenType, { 'is-full': screenInfo.screenFull }]" :gutter="16">
    <el-col class="ev-screen-col" :span="screenItem.span" v-for="screenItem in screenInfo.screenList">
      <div class="ev-component" :class="{ 'is-folder': AppSetting.componentType == 'folder' }">
        <!-- <Form /> -->
      </div>
    </el-col>
  </el-row>
</template>
