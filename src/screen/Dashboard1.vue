<script lang="ts" setup>
import Form from '@/components/Form.vue'

const screenInfo = {
  screenType: 'dashboard1',
  screenFull: true,
  screenList: [
    { span: 8 },
    { span: 8 },
    { span: 8 },
    { span: 8 },
    { span: 8 },
    { span: 12 },
    { span: 12 },
]}
</script>

<template>
  <el-row class="ev-screen-row" :class="[screenInfo.screenType, { 'is-full': screenInfo.screenFull }]">
    <el-col class="ev-screen-row-col" :span="screenItem.span" v-for="screenItem in screenInfo.screenList">
      <Form />
    </el-col>
  </el-row>
</template>