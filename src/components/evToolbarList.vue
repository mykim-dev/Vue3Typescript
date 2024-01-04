<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/appSetting'
import ToolbarItem from '@/components/evToolbarItem.vue'
import ListItem from '@/components/evListItem.vue'

const AppSetting = useAppStore()
const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <el-row class="ev-screen-row default" :gutter="16">
    <el-col class="ev-screen-col">
      <div class="ev-component" :class="{ 'is-folder': AppSetting.componentType == 'folder' }">
        <div class="ev-toolbarlist">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1">
              <template #title>
                <ToolbarItem />
              </template>
              <ListItem />
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
