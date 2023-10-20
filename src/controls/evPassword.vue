<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>

<template>
  <div class="form-item ev-password">
    <div class="form-item-label">
      <label>Password</label>
    </div>
    <div class="form-item-data">
      <el-input
        v-model="input"
        type="password"
        placeholder="Please input password"
        show-password
      />
    </div>
  </div>
</template>