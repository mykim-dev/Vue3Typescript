<script lang="ts" setup>
import { ref } from 'vue'
import { defineProps } from 'vue'

const input = ref('')
const props = defineProps(['attribute'])

</script>

<template>
  <div class="ev-text">
    <el-input v-model="input" 
    placeholder="Please input"
    :disabled="props.attribute.disabled" 
    :readonly="props.attribute.readonly"
    />
  </div>
</template>