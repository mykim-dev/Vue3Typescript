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
  <el-row class="ev-screen-row default" :gutter="16">
    <el-col class="ev-screen-col">
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
    </el-col>
  </el-row>
</template>
