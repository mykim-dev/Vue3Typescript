<script lang="ts" setup>
import { ref } from 'vue'
import { AppSettingStore } from '@/stores/common/index'
import {
  HomeFilled,
  Grid,
  Menu,
  QuestionFilled,
  DArrowRight,
  DArrowLeft,
  Menu as IconMenu,
} from '@element-plus/icons-vue'

const AppSetting = AppSettingStore()
</script>

<template>
  <div class="ev-menu">
    <el-button class="ev-menu-toggle" :icon="AppSetting.menuCollapse === true ? 'DArrowRight' : 'DArrowLeft'"
      @click="AppSetting.changeMenuCollapse" />
    <el-scrollbar always class="ev-menu-scroll">
      <el-menu :mode="AppSetting.menuType" :collapse="AppSetting.menuCollapse" default-active="2" router="true">
        <template v-for="menus in AppSetting.menus">

          <el-menu-item v-if="menus.menus.length === 0" :index="menus.link">
            <template #title>
              <el-button :icon="menus.icon" link />
              {{ menus.name }}
            </template>
          </el-menu-item>

          <el-sub-menu v-else :index="menus.link">
            <template #title>
              <el-button :icon="menus.icon" link />
              {{ menus.name }}
            </template>

            <template v-for="submenus in menus.menus">
              <el-menu-item v-if="submenus.menus.length === 0" :index="submenus.link">
                <template #title>
                  <el-button :icon="submenus.icon" link />
                  {{ submenus.name }}
                </template>
              </el-menu-item>

              <el-sub-menu v-else :index="submenus.link">

                <template #title>
                  <el-button :icon="submenus.icon" link />
                  {{ submenus.name }}
                </template>

                <el-menu-item-group :title="submenus.name">
                  <el-menu-item :index="submenus.link">
                    {{ submenus.name }}
                  </el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>

            </template>
          </el-sub-menu>

        </template>
      </el-menu>
    </el-scrollbar>
    <div class="ev-menu__banner">
      <img src="@/assets/img/menu-banner.png" alt="하단배너" />
    </div>
  </div>
</template>