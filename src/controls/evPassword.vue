<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const input = ref('')
</script>

<template>
  <div class="ev-password">
    <el-input v-model="input" type="password" placeholder="Please input password" show-password />
  </div>
</template>