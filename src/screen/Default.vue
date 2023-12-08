<script lang="ts" setup>
const screenInfo = {
  screenFull: true,
  screenType: 'default',
  screenList: [
    { span: 24 },
  ]}
</script>

<template>
  <div class="ev-screen" :class="{ 'is-full': screenInfo.screenFull }">
    <el-row>    
      <el-col class="ev-screen-item" :span="screenItem.span" v-for="screenItem in screenInfo.screenList"></el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped>
</style>