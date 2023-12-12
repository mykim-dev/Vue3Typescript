<script lang="ts" setup>
import Form from '@/components/evForm.vue'
import ToolbarForm from '@/components/evToolbarForm.vue'
import List from '@/components/evList.vue'
import ToolbarList from '@/components/evToolbarList.vue'
</script>

<template>
  <el-row class="ev-screen-row default" :gutter="14">
    <el-col class="ev-screen-col" :span="12">
      <ToolbarForm />
    </el-col>
    <el-col class="ev-screen-col" :span="12">
      <ToolbarList />
    </el-col>
    <el-col class="ev-screen-col" :span="12">
      <Form />      
    </el-col>
    <el-col class="ev-screen-col" :span="12">
      <List />
    </el-col>    
  </el-row>
</template>

<style lang="scss" scoped></style>
