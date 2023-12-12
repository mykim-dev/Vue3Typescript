<script lang="ts" setup>
import { ref } from 'vue'
import Toolbar from '@/components/evToolbar.vue'
import List from '@/components/evList.vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <div class="ev-toolbarlist">
    <el-collapse v-model="activeNames" @change="handleChange">
      <toolbar />
      <el-collapse-item name="1">
        <List />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
