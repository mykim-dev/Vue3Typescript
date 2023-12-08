<script lang="ts" setup>
import Form from '@/components/Form.vue'

const screenInfo = {
  screenType: 'dynamic',
  screenFull: false,
  screenList: [
    { span: 8 },
]}
</script>

<template>
  <el-row class="ev-screen" :class="[screenInfo.screenType, { 'is-full': screenInfo.screenFull }]">
    <el-col class="ev-screen-item" :span="screenItem.span" v-for="screenItem in screenInfo.screenList">
      <el-scrollbar wrap-class="ev-screen-scroll">
        <div class="ev-component">
          <el-scrollbar wrap-class="ev-component-scroll">
            <Form />
          </el-scrollbar>
        </div>
      </el-scrollbar>
    </el-col>
  </el-row>
</template>