<script lang="ts" setup>
import { ref } from 'vue'
import { taskListStore } from '@/stores/main/index'
import { AppSettingStore } from '@/stores/common/index'

const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
const screenGutter = AppSetting.screenGutter

const taskList = taskListStore()
const activeNames = ref(['1'])
const stripeState = ref([true])

// const handleChange = (val: string[]) => {
//   console.log(val)
// }
</script>

<template>
  <el-row class="ev-screen vertical" :gutter="screenGutter" :class="{ 'is-full': isFull }">
    <el-col class="ev-screen-item">
      <div class="ev-component">
        <el-scrollbar view-class="ev-component-scrollbar">
          <div class="ev-toolbarlist">
            <el-collapse model-value="1">
              <el-collapse-item title=" Tasks" name="1">
                <template #title>
                  <h6 class="ev-toolbar__title">{{ taskList.name }}</h6>
                  <div class="ev-toolbar__button-wrap">
                    <div class="ev-button" v-for="  i   in   5  ">
                      <el-button>Button{{ i }}</el-button>
                    </div>
                  </div>
                </template>

                <div class="ev-list">
                  <el-table :data="taskList.$state.tasks" style="width: 100%" highlight-current-row size="small"
                    :v-if="{ stripe: stripeState }" border>
                    <el-table-column type="selection" width="50" align="center" header-align="center" />
                    <el-table-column type="index" label="No" width="50" fixed align="center" header-align="center" />
                    <el-table-column prop="title" label="Title" sortable width="" />
                    <!-- <el-table-column prop="isDo" label="Date" sortable width="150" align="center" header-align="center" /> -->
                  </el-table>
                </div>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-scrollbar>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
/* :deep(.el-table) {
  .cell {
    line-height: initial;
  }

  .el-table__cell {
    padding: initial;
  }
} */
</style>