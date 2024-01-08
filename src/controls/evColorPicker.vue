<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const color = ref()
</script>

<template>
  <div class="ev-color-picker">
    <el-color-picker v-model="color" />
  </div>
</template>