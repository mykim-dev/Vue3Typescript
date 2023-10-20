<script lang="ts" setup>
import { ref } from 'vue'
const value1 = ref(true)
</script>

<template>
  <div class="form-item ev-switch">
    <div class="form-item-label">
      <label>Switch</label>
    </div>
    <div class="form-item-data">
      <el-switch v-model="value1" />
    </div>
  </div>
</template>