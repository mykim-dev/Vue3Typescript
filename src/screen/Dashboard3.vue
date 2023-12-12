<script lang="ts" setup>
// import Form from '@/components/evForm.vue'

const screenInfo = {
  screenType: 'dashboard3',
  screenFull: true,
  screenList: [{ span: 8 }, { span: 8 }, { span: 8 }, { span: 8 }, { span: 8 }, { span: 8 }, { span: 12 }, { span: 12 }, { span: 12 }, { span: 12 }],
}
</script>

<template>
  <el-row class="ev-screen-row" :class="[screenInfo.screenType, { 'is-full': screenInfo.screenFull }]" :gutter="14">
    <el-col class="ev-screen-col" :span="screenItem.span" v-for="screenItem in screenInfo.screenList">
      <div class="ev-component">
        <!-- <Form /> -->
      </div>
    </el-col>
  </el-row>
</template>
