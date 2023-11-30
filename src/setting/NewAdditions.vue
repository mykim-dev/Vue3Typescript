<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
const AppSetting = AppSettingStore()
const isFull = AppSetting.screenIsFull
const screenGutter = AppSetting.screenGutter
</script>

<template>
  <el-row class="ev-screen horizontal" :gutter="screenGutter" :class="{ 'is-full': isFull }">
    <el-col class="ev-screen-item">
      <div class="ev-component">
        <el-scrollbar view-class="ev-component-scrollbar">
          <h3>NewAdditions</h3>
          <el-form>
            <el-row class="type-grid">
              <el-col>
                <div class="form-item is-left">
                  <div class="form-item-label">
                    <label></label>
                  </div>
                  <div class="form-item-data"></div>
                </div>
              </el-col>
              <el-col>
                <div class="form-item is-left">
                  <div class="form-item-label">
                    <label></label>
                  </div>
                  <div class="form-item-data"></div>
                </div>
              </el-col>
            </el-row>
          </el-form>
        </el-scrollbar>
      </div>
    </el-col>
  </el-row>
</template>

<style lang="scss" scoped></style>