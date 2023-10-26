<script lang="ts" setup>
// import EvList from '@/components/List.vue'
// import EvForm from '@/components/Form.vue'

import { reactive } from 'vue'

const isFull = true
// const screen = reactive({
//   isFull: true,
// })
</script>

<template>
  <div class="ev-screen default" :class="{ 'is-full': isFull }">
    <div class="ev-component">
      <el-scrollbar class="ev-component-scrollbar">
        <div class="ev-tmp">component_1</div>
      </el-scrollbar>
    </div>
  </div>
</template>