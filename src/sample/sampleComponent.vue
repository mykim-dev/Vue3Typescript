<script lang="ts" setup>
import FormItem from '@/components/evFormItem.vue'
import ListItem from '@/components/evListItem.vue'
</script>

<template>
  <el-row class="ev-screen-row" :gutter="16">
    <el-col class="ev-screen-col" :span="12">
      <div class="ev-component ev-form">
        <FormItem />
      </div>
    </el-col>
    <el-col class="ev-screen-col" :span="12">
      <div class="ev-component ev-list">
        <ListItem />
      </div>
    </el-col>
  </el-row>
</template>
