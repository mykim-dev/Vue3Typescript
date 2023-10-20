<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>

<template>
  <div class="form-item ev-number">
    <div class="form-item-label">
      <label>Text</label>
    </div>
    <div class="form-item-data">
      <el-input-number
        v-model="num"
        :min="1"
        :max="10"
        @change="handleChange"
      />
    </div>
  </div>
</template>