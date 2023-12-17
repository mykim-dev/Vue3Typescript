<script lang="ts" setup>
const screenList = [
    { span: 8 , height: '300px' },
    { span: 8 , height: '200px' },
    { span: 8 , height: '80px' },
    { span: 8 , height: '80px' },
    { span: 8 , height: '200px' },
    { span: 8 , height: '300px' },
  ]
</script>

<template>
  <el-row class="ev-screen-row" :gutter="16">
    <el-col class="ev-screen-col" :span="screenItem.span" :style="`height: ${screenItem.height}`" v-for="screenItem in screenList">
      <div class="ev-component" />
    </el-col>
  </el-row>
</template>
