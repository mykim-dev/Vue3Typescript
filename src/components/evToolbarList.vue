<script lang="ts" setup>
import { ref } from 'vue'
import Toolbar from '@/components/evToolbar.vue'
import ListItem from '@/components/evListItem.vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <div class="ev-component ev-toolbarlist">
    <el-collapse v-model="activeNames" @change="handleChange">
      <el-collapse-item name="1">
        <template #title>
          <Toolbar />
        </template>
        <ListItem />
      </el-collapse-item>
    </el-collapse>
  </div>
</template>
