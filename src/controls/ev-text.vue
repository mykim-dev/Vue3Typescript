<template>
  <div class="ev-text">
    <div class="ev-label">
      <label>Text</label>
    </div>
    <div class="ev-input">
      <el-input v-model="input" placeholder="Please input" />
    </div>    
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const input = ref('')
</script>