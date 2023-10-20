<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

<template>
  <div class="form-item ev-text">
    <div class="form-item-label">
      <label>Text</label>
    </div>
    <div class="form-item-data">
      <el-input v-model="input" placeholder="Please input" />
    </div>
  </div>
</template>