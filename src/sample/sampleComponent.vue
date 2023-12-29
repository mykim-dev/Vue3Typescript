<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
import FormItem from '@/components/evFormItem.vue'
import ListItem from '@/components/evListItem.vue'

const AppSetting = useAppStore()
</script>

<template>
  <el-row class="ev-screen-row" :gutter="16">
    <el-col class="ev-screen-col" :span="12">
      <div class="ev-component" :class="{ 'is-folder': AppSetting.componentType == 'folder' }">
        <div class="ev-form">
          <FormItem />
        </div>
      </div>
    </el-col>
    <el-col class="ev-screen-col" :span="12">
      <div class="ev-component" :class="{ 'is-folder': AppSetting.componentType == 'folder' }">
        <div class="ev-list">
          <ListItem />
        </div>
      </div>
    </el-col>
  </el-row>
</template>
