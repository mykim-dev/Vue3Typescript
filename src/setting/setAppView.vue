<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/appSetting'
import Toolbar from '@/components/evToolbar.vue'
import FormItem from '@/components/evFormItem.vue'
import ListItem from '@/components/evListItem.vue'

const AppSetting = useAppStore()

const activeNames = ref(['1', '2'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <el-row class="ev-screen-row" :gutter="16">
    <el-col class="ev-screen-col" :span="12">
      <div class="ev-component" :class="{ 'is-folder': AppSetting.componentType == 'folder' }">
        <div class="ev-toolbarform">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="1">
              <template #title>
                <Toolbar />
              </template>
              <div class="ev-form">
                <FormItem />
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-col>
    <el-col class="ev-screen-col" :span="12">
      <div class="ev-component" :class="{ 'is-folder': AppSetting.componentType == 'folder' }">
        <div class="ev-toolbarlist">
          <el-collapse v-model="activeNames" @change="handleChange">
            <el-collapse-item name="2">
              <template #title>
                <Toolbar />
              </template>
              <div class="ev-list">
                <ListItem />
              </div>              
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
