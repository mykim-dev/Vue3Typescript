<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
import FormItem from '@/components/evFormItem.vue'

const AppSetting = useAppStore()
</script>

<template>
  <el-row class="ev-screen-row default" :gutter="16">
    <el-col class="ev-screen-col">      
      <div class="ev-component ev-form">
        <FormItem />
      </div>
    </el-col>
  </el-row>
</template>
