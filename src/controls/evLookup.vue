<script lang="ts" setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input = ref('')
</script>

<template>
  <div class="form-item ev-lookup">
    <div class="form-item-label">
      <label>Lookup</label>
    </div>
    <div class="form-item-data">
      <el-input v-model="input" placeholder="Please input">
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>
  </div>
</template>