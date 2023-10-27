<script lang="ts" setup>
import Form from '@/components/Form.vue'
const isFull = true
</script>

<template>
  <div class="ev-screen dashboard" :class="{ 'is-full': isFull }">
    <div class="ev-screen-item" v-for="index in 14">
      <el-scrollbar class="ev-component-scrollbar">
        <Form />
      </el-scrollbar>
    </div>
  </div>
</template> 