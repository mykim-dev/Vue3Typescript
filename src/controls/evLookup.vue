<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
</script>

<template>
  <div class="ev-lookup">
    <el-input v-model="input" placeholder="Please input" readonly>
      <template #append>
        <el-button :icon="Search" />
      </template>
    </el-input>
  </div>
</template>
