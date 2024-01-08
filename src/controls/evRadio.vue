<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const radio = ref('1')
</script>

<template>
  <div class="ev-radio">
    <el-radio-group v-model="radio">
      <el-radio label="1">Option 1</el-radio>
      <el-radio label="2">Option 2</el-radio>
      <el-radio label="3" disabled>Option 3 disabled</el-radio>
      <el-radio label="4" disabled>Option 4 disabled</el-radio>
    </el-radio-group>
  </div>
</template>
