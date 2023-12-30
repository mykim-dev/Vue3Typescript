<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
import FormItem from '@/components/evFormItem.vue'
import ListItem from '@/components/evListItem.vue'

const AppSetting = useAppStore()

const screenInfo = {
  screenType: 'dynamic',
  screenFull: true,
  screenList: [
    { spanRow: 8, spanCol: 12, componentType: 'Form'},
    { spanRow: 8, spanCol: 12, componentType: 'List'},
    { spanRow: 8, spanCol: 12, componentType: 'List'},
    { spanRow: 8, spanCol: 12, componentType: 'Form'},
    { spanRow: 8, spanCol: 12, componentType: 'List'},
    { spanRow: 8, spanCol: 12, componentType: 'List'},
  ],
}
</script>

<template>
  <el-row :class="['ev-screen-row', screenInfo.screenType, { 'is-full': screenInfo.screenFull }]" :gutter="16">
    <el-col class="ev-screen-col" :span="screenItem.spanCol" :style="`grid-area: span ${screenItem.spanRow} / span ${screenItem.spanCol};`" v-for="screenItem in screenInfo.screenList">
      <div class="ev-component" :class="{ 'is-folder': AppSetting.componentType == 'folder' }">
        <div class="ev-form" v-if="screenItem.componentType == 'Form'">
          <FormItem />
        </div>
        <div class="ev-list" v-if="screenItem.componentType == 'List'">
          <ListItem />
        </div>
      </div>
    </el-col>
  </el-row>
</template>
