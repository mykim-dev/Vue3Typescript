<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/appSetting'
import ToolbarItem from '@/components/evToolbarItem.vue'
import FormItem from '@/components/evFormItem.vue'

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
        <div class="ev-toolbarform">
          <el-collapse v-model="activeNames">
            <el-collapse-item title="" name="1">
              <template #title>
                <ToolbarItem />
              </template>
              <div class="ev-form">
                <FormItem />
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped></style>
