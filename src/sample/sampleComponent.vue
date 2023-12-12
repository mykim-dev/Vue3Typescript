<script lang="ts" setup>
import Form from '@/components/evForm.vue'
import List from '@/components/evList.vue'
</script>

<template>
  <el-row class="ev-screen-row default" :gutter="14">
    <el-col class="ev-screen-col" :span="12">
      <Form />
    </el-col>
    <el-col class="ev-screen-col" :span="12">
      <List />
    </el-col>
  </el-row>
</template>
