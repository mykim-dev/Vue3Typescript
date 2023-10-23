<script lang="ts" setup>
import { ref } from 'vue'
const textarea = ref('')
</script>

<template>
  <div class="ev-textarea">
    <el-input v-model="textarea" :rows="4" type="textarea" placeholder="Please input" />
  </div>
</template>