<script lang="ts" setup>
import Form from '@/components/Form.vue'

const screenInfo = {
  screenType: 'default',
  screenFull: false,
  screenList: [
    { span: 24 },
]}
</script>

<template>
  <el-row class="ev-screen" :class="[screenInfo.screenType, { 'is-full': screenInfo.screenFull }]">
    <el-col class="ev-screen-item" :span="screenItem.span" v-for="screenItem in screenInfo.screenList">
      <el-scrollbar wrap-class="ev-screen-scroll" v-if="screenInfo.screenFull">
        <div class="ev-component">
          <Form />
        </div>
      </el-scrollbar>
      <div class="ev-component" v-else>
        <Form />
      </div>
    </el-col>
  </el-row>
</template>