<script lang="ts" setup>
import Form from '@/components/Form.vue'

const screenInfo = {
  screenType: 'horizontal',
  screenFull: false,  
  screenList: [
    { span: 12 },
    { span: 12 },
]}
</script>

<template>
  <el-row class="ev-screen-row" :class="[screenInfo.screenType, { 'is-full': screenInfo.screenFull }]">
    <el-col class="ev-screen-row-col" :span="screenItem.span" v-for="screenItem in screenInfo.screenList">
      <div class="ev-component">
        <Form />
      </div>
    </el-col>
  </el-row>
</template>