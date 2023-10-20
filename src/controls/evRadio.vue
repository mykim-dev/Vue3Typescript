<script lang="ts" setup>
import { ref } from 'vue'
const radio1 = ref('1')
const radio2 = ref('1')
const radio3 = ref('1')
const radio4 = ref('1')
</script>

<template>
  <div class="form-item ev-radio">
    <div class="form-item-label">
      <label>Radio</label>
    </div>
    <div class="form-item-data">
      <el-radio-group v-model="radio2">
        <el-radio label="1">Option 1</el-radio>
        <el-radio label="2">Option 2</el-radio>
        <el-radio label="3" disabled>Option 3 disabled</el-radio>
        <el-radio label="4" disabled>Option 4 disabled</el-radio>
      </el-radio-group>
    </div>
  </div>
</template>