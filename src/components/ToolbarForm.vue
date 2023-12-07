<script lang="ts" setup>
import { ref } from 'vue'
import { AppSettingStore } from '@/stores/common/index'
import Form from '@/components/Form.vue'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <div class="ev-screen default" :class="{ 'is-full': isFull }">
    <div class="ev-screen-item">
      <div class="ev-component">
        <div class="ev-toolbarform">
          <el-collapse v-model="activeNames">
            <div class="toolbar">
              <span class="toolbar-title"></span> Consistency
            </div>
            <el-collapse-item name="1">
              <!-- <template #title>
                <span class="toolbar-title">Consistency</span>
              </template> -->
              <Form />            
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.el-collapse {
  position: relative;
}
.toolbar-title {
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: calc(100% - var(--el-collapse-header-height));
  height: var(--el-collapse-header-height);
  border: 1px solid green;
  z-index: 1;
}

.el-collapse-item {
  position: relative;
}

.el-collapse-item__header {
  width: var(--el-collapse-header-height);
  border: 1px solid red;
}
</style>