<script lang="ts" setup>
import { ref } from 'vue'
const value = ref('')
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
]
</script>

<template>
  <div class="form-item ev-select">
    <div class="form-item-label">
      <label>Select</label>
    </div>
    <div class="form-item-data">
      <el-select v-model="value" placeholder="">
        <el-option
          v-for="option in options"
          :label="option.label"
          :value="option.value"
        />
      </el-select>
    </div>
  </div>
</template>