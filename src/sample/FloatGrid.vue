<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
const screenGutter = AppSetting.screenGutter
</script>

<template>
  <el-row class="ev-screen horizontal" :gutter="screenGutter" :class="{ 'is-full': isFull }">
    <el-col class="ev-screen-item" :span="12">
      <div class="ev-component">
        <el-scrollbar class="ev-component-scrollbar">
          <div class="ev-form">
            <el-row v-for="i in 6" class="type-block">
              <el-col v-for="j in 4" :span="6">
                <div class="item block-item">block item</div>
              </el-col>
            </el-row>
          </div>
        </el-scrollbar>
      </div>
    </el-col>
    <el-col class="ev-screen-item" :span="12">
      <div class="ev-component">
        <el-scrollbar class="ev-component-scrollbar">
          <div class="ev-form">
            <el-row v-for="i in 6" class="type-grid">
              <el-col v-for="j in 4" :span="6">
                <div class="item grid-item">grid item</div>
              </el-col>
            </el-row>
          </div>
        </el-scrollbar>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.item {
  height: 50px;
  background: var(--el-bg-color-page);
}

.block-item {}

.grid-item {}
</style>