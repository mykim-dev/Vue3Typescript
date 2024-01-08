<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const value1 = ref(true)
</script>

<template>
  <div class="ev-switch">
    <el-switch v-model="value1" />
  </div>
</template>