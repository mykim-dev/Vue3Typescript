<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const checked1 = ref(true)
const checked2 = ref(false)
const checked3 = ref(true)
const checked4 = ref(false)
</script>

<template>
  <div class="ev-checkbox">
    <el-checkbox v-model="checked1" label="Option 1" />
    <el-checkbox v-model="checked2" label="Option 2" />
    <el-checkbox v-model="checked3" label="Option 1 disabled" disabled />
    <el-checkbox v-model="checked4" label="Option 2 disabled" disabled />
  </div>
</template>