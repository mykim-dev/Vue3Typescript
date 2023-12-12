<script lang="ts" setup>
// import Form from '@/components/evForm.vue'
// import List from '@/components/evList.vue'

const screenInfo = {
  screenType: 'horizontal',
  screenFull: true,
  screenList: [{ span: 12 }, { span: 12 }],
}
</script>

<template>
  <el-row class="ev-screen-row" :class="[screenInfo.screenType, { 'is-full': screenInfo.screenFull }]">
    <el-col class="ev-screen-row-col" :span="screenItem.span" v-for="screenItem in screenInfo.screenList">
      <div class="ev-component">
        <!-- <Form /> -->
      </div>
    </el-col>
  </el-row>
</template>
