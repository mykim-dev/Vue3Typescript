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
  <div class="ev-screen default">
    <div class="ev-component" :class="{ 'is-full': isFull }">
      <div class="ev-control">component_1</div>
    </div>
  </div>
</template>