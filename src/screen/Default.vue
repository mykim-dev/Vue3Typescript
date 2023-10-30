<script lang="ts" setup>
import Form from '@/components/form.vue'
const isFull = true
</script>

<template>
  <div class="ev-screen default" :class="{ 'is-full': isFull }">
    <div class="ev-screen-item">
      <el-scrollbar class="ev-component-scrollbar">
        <Form />
      </el-scrollbar>
    </div>
  </div>
</template>