<script lang="ts" setup>
import ToolbarForm from '@/components/evToolbarForm.vue'
import ToolbarList from '@/components/evToolbarList.vue'
</script>

<template>
  <el-row class="ev-screen-row" :gutter="16">
    <el-col class="ev-screen-col" :span="12">
      <ToolbarForm />
    </el-col>
    <el-col class="ev-screen-col" :span="12">
      <ToolbarList />
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped></style>
