<script lang="ts" setup>
import { ref } from 'vue'
const textarea = ref('')
</script>

<template>
  <div class="form-item ev-textarea">
    <div class="form-item-label">
      <label>Textarea</label>
    </div>
    <div class="form-item-data">
      <el-input
        v-model="textarea"
        :rows="4"
        type="textarea"
        placeholder="Please input"
      />
    </div>
  </div>
</template>