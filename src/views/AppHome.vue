<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/appSetting'
import { todoListStore } from '@/stores/todoList'
import ToolbarItem from '@/components/evToolbarItem.vue'

const AppSetting = useAppStore()

const todoList = todoListStore()
const activeNames = ref(['1'])
const stripeState = ref([true])

// const handleChange = (val: string[]) => {
//   console.log(val)
// }
</script>

<template>
  <el-row class="ev-screen-row" :gutter="16">
    <el-col class="ev-screen-col">
      <div class="ev-component" :class="{ 'is-folder': AppSetting.componentType == 'folder' }">
        <div class="ev-toolbarlist">
          <el-collapse model-value="1">
            <el-collapse-item title="Todo" name="1">
              <template #title>
                <ToolbarItem />
              </template>

              <div class="ev-list">
                <div class="ev-list-item">
                  <el-table :data="todoList.$state.todo" highlight-current-row v-if="{ stripe: stripeState }" border style="width: 100%">
                    <el-table-column type="selection" width="50" align="center" header-align="center" />
                    <el-table-column type="index" label="No" width="80" fixed align="center" header-align="center" />
                    <el-table-column prop="title" label="Title" sortable />
                    <!-- <el-table-column prop="isDo" label="Date" sortable width="150" align="center" header-align="center" /> -->
                  </el-table>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
