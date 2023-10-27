<script lang="ts" setup>
import { ref } from 'vue'
import { useTaskStore } from '@/stores/index'

const taskStore = useTaskStore()
const activeNames = ref(['1'])
const stripeState = ref([true])

// const handleChange = (val: string[]) => {
//   console.log(val)
// }
</script>

<template>
  <div class="ev-screen vertical">
    <div class="ev-component">
      <el-scrollbar class="ev-component-scrollbar">
        <div class="ev-toolbarlist">
          <el-collapse v-model="activeNames">
            <el-collapse-item title="Tasks" name="1">
              <template #title>
                <h6 class="ev-toolbar__title">{{ taskStore.name }}</h6>
                <div class="ev-toolbar__button-wrap">
                  <div class="ev-button" v-for="i in 5">
                    <el-button>Button{{ i }}</el-button>
                  </div>
                </div>
              </template>

              <div class="ev-list">
                <el-table :data="taskStore.$state.tasks" style="width: 100%" highlight-current-row size="small"
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
  </div>
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