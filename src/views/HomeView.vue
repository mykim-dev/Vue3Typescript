<script lang="ts" setup>
import { ref } from 'vue'
import { todoListStore } from '@/stores/todoList'
import { useAppStore } from '@/stores/appSetting'

const AppSetting = useAppStore()
const isFull = true

const todoList = todoListStore()
const activeNames = ref(['1'])
const stripeState = ref([true])

// const handleChange = (val: string[]) => {
//   console.log(val)
// }
</script>

<template>
  <div class="ev-screen-row default" :class="{ 'is-full': isFull }">
    <div class="ev-screen-row-col">
      <div class="ev-component">
        <div class="ev-toolbarlist">
          <el-collapse model-value="1">
            <el-collapse-item title="Todo" name="1">
              <template #title>
                <h4 class="ev-toolbar__title">{{ todoList.name }}</h4>
                <div class="ev-toolbar__button-wrap">
                  <div class="ev-button" v-for="i in 5">
                    <el-button>Button{{ i }}</el-button>
                  </div>
                </div>
              </template>

              <div class="ev-list">
                <el-table :data="todoList.$state.todo" style="width: 100%" highlight-current-row v-if="{ stripe: stripeState }" border>
                  <el-table-column type="selection" width="50" align="center" header-align="center" />
                  <el-table-column type="index" label="No" width="50" fixed align="center" header-align="center" />
                  <el-table-column prop="title" label="Title" sortable width="" />
                  <!-- <el-table-column prop="isDo" label="Date" sortable width="150" align="center" header-align="center" /> -->
                </el-table>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </div>
    </div>
  </div>
</template>
