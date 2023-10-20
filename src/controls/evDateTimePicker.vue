<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]
</script>

<template>
  <div class="form-item ev-date-time-picker">
    <div class="form-item-label">
      <label>Date Time Picker</label>
    </div>
    <div class="form-item-data">
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      />
    </div>
  </div>
</template>