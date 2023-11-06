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
    <el-button
      class="ev-menu-toggle"
      :icon="AppSetting.menuCollapse === true ? 'DArrowRight' : 'DArrowLeft'"
      @click="AppSetting.changeMenuCollapse"
    />
    <el-scrollbar always class="ev-menu-scroll">
      <el-menu :mode="AppSetting.menuType" :collapse="AppSetting.menuCollapse" default-active="2">
        <el-menu-item index="/">
          <el-icon>
            <HomeFilled />
          </el-icon>
          <template #title>Home</template>
        </el-menu-item>
        <el-sub-menu index="2">
          <template #title>
            <el-icon>
              <Tools />
            </el-icon>
            <span>Setting</span>
          </template>
          <el-menu-item-group title="Setting">
            <el-menu-item index="/Setting">Setting</el-menu-item>
            <el-menu-item index="/NewAdditions">NewAdditions</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="3">
          <template #title>
            <el-icon>
              <Grid />
            </el-icon>
            <span>Screen</span>
          </template>
          <el-menu-item-group title="Screen">
            <el-menu-item index="/Default">Default</el-menu-item>
            <el-menu-item index="/Vertical">Vertical</el-menu-item>
            <el-menu-item index="/Horizontal">Horizontal</el-menu-item>
            <el-menu-item index="/Vertical2">Vertical2</el-menu-item>
            <el-menu-item index="/Horizontal2">Horizontal2</el-menu-item>
            <el-menu-item index="/Horizontal3">Horizontal3</el-menu-item>
            <el-menu-item index="/Dashboard">Dashboard</el-menu-item>
            <el-menu-item index="/Dashboard1">Dashboard1</el-menu-item>
            <el-menu-item index="/Dashboard2">Dashboard2</el-menu-item>
            <el-menu-item index="/Dashboard3">Dashboard3</el-menu-item>
            <el-menu-item index="/Dynamic">Dynamic</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="4">
          <template #title>
            <el-icon>
              <Menu />
            </el-icon>
            <span>Component</span>
          </template>
          <el-menu-item-group title="Component">
            <el-menu-item index="/Form">Form</el-menu-item>
            <el-menu-item index="/ToolbarForm">ToolbarForm</el-menu-item>
            <el-menu-item index="/List">List</el-menu-item>
            <el-menu-item index="/ToolbarList">ToolbarList</el-menu-item>
            <el-menu-item index="/Tabs">Tabs</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="5">
          <template #title>
            <el-icon>
              <QuestionFilled />
            </el-icon>
            <span>Sample</span>
          </template>
          <el-menu-item-group title="SampleForm">
            <el-menu-item index="/SampleForm">SampleForm</el-menu-item>
            <el-menu-item index="/SampleList">SampleList</el-menu-item>
            <el-menu-item index="/FloatGrid">DisplayBlockGrid</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <!-- <el-sub-menu index="6">
        <template #title>
          <el-icon>
            <QuestionFilled />
          </el-icon>
          <span>Study</span>
        </template>
        <el-menu-item-group title="Study">
          <el-menu-item index="/Bind">bind</el-menu-item>
        </el-menu-item-group>
      </el-sub-menu> -->
      </el-menu>
    </el-scrollbar>
    <div class="ev-menu__banner">
      <img src="@/assets/img/menu-banner.png" alt="하단배너" />
    </div>
  </div>
</template>@/defaultData