<script lang="ts" setup>
import { ref } from 'vue'
const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
const checked4 = ref(false)
</script>

<template>
  <div class="form-item ev-checkbox">
    <div class="form-item-label">
      <label>CheckBox</label>
    </div>
    <div class="form-item-data">
      <el-checkbox v-model="checked1" label="Option 1" />
      <el-checkbox v-model="checked2" label="Option 2" />
      <el-checkbox v-model="checked3" label="Option 1 disabled" disabled />
      <el-checkbox v-model="checked4" label="Option 2 disabled" disabled />
    </div>
  </div>
</template>