<script lang="ts" setup>
import { ref } from 'vue'
const color = ref()
</script>

<template>
  <div class="form-item ev-color-picker">
    <div class="form-item-label">
      <label>Color Picker</label>
    </div>
    <div class="form-item-data">
      <el-color-picker v-model="color" />
    </div>
  </div>
</template>