<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { useAppStore } from '@/stores/appSetting'
const AppSetting = useAppStore()

const setLoginLogo = ref(true)
const setLoginImage = ref(true)
const setTopLogo = ref(true)

const modeList = ['light', 'dark']
const layoutList = ['horizontal', 'vertical']

const themeList = [
  { name: 'green', color: '#5796ad' },
  { name: 'yellow', color: '#ffb800' },
  { name: 'green_2', color: '#328a23' },
  { name: 'purple', color: '#9065db' },
  { name: 'navy', color: '#0d2851' },
]

const componentTypeList = ['basic', 'folder']
const progressIconList = ['basic', 'cloud', 'ellipsis', 'gear', 'straight']

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
</script>

<template>
  <el-collapse class="set-option" v-model="activeNames" @change="handleChange">
    <el-collapse-item class="set-option-item" title="Common Setting" name="1">
      <el-form label-position="left">
        <el-form-item label="Layout">
          <el-radio-group v-model="AppSetting.appLayoutType">
            <el-radio-button :class="['option-layout', layout]" :label="layout" v-for="layout in layoutList" @click="AppSetting.changeLayout(layout)" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="mode">
          <div class="ev-switch"><el-switch v-model="AppSetting.appDarkMode" active-text="dark" inactive-text="light" size="small"  @click="AppSetting.changeMode()" /></div>
        </el-form-item>
        <el-form-item label="Theme">
          <el-radio-group v-model="AppSetting.appTheme">
            <el-radio-button :class="['option-theme', theme.name]" :label="theme.name" :style="`background-color:${theme.color}`" v-for="theme in themeList"
              @click="AppSetting.changeTheme(theme.name)" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Top Banner">
          <div class="ev-switch"><el-switch v-model="AppSetting.topBanner" active-text="YES" inactive-text="NO" size="small" /></div>
          <img src="" alt="" />
        </el-form-item>
        <el-form-item label="Bottom Banner"  v-if="AppSetting.menuCollapse === false">
          <div class="ev-switch"><el-switch v-model="AppSetting.asideBanner" active-text="YES" inactive-text="NO" size="small" /></div>
          <img src="" alt="" />
        </el-form-item>
        <el-form-item label="Component Type">
          <el-radio-group v-model="AppSetting.componentType">
            <el-radio-button :class="['option-componentType', componentType]" :label="componentType"
              v-for="componentType in componentTypeList" @click="AppSetting.changeComponentType(componentType)" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Progress Icon">
          <el-radio-group v-model="AppSetting.progressIcon">
            <el-radio-button :class="['option-progressIcon', progressIcon]" :label="progressIcon"
              v-for="progressIcon in progressIconList" @click="AppSetting.changeProgressIcon(progressIcon)" />
          </el-radio-group>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    <el-collapse-item title="GNB" name="2">
      <el-form label-position="left">
        <el-form-item label="Login">
          <el-checkbox-button key="ALL" label="ALL">ALL</el-checkbox-button>
          <el-checkbox-button key="My" label="My">My</el-checkbox-button>
          <el-checkbox-button key="Logout" label="Logout">Logout</el-checkbox-button>
          <el-checkbox-button key="IP" label="IP">IP</el-checkbox-button>
        </el-form-item>
        <el-form-item label="Language">
          <el-checkbox-button key="ALL" label="ALL">ALL</el-checkbox-button>
          <el-checkbox-button key="English" label="English">English</el-checkbox-button>
          <el-checkbox-button key="Korea" label="Korea">Korea</el-checkbox-button>
        </el-form-item>
        <el-form-item label="Navigation">
          <el-checkbox-button key="ALL" label="ALL">ALL</el-checkbox-button>
          <el-checkbox-button key="Navigation" label="Navigation">Navigation</el-checkbox-button>
        </el-form-item>
        <el-form-item label="Site Map">
          <el-checkbox-button key="ALL" label="ALL">ALL</el-checkbox-button>
          <el-checkbox-button key="Site Map" label="Site Map">Site Map</el-checkbox-button>
        </el-form-item>
        <el-form-item label="Notification">
          <el-checkbox-button key="ALL" label="ALL">ALL</el-checkbox-button>
          <el-checkbox-button key="Reverse" label="Reverse">Reverse</el-checkbox-button>
        </el-form-item>
        <el-form-item label="Setting">
          <el-checkbox-button key="ALL" label="ALL">ALL</el-checkbox-button>
          <el-checkbox-button key="Screen" label="Screen">Screen</el-checkbox-button>
          <el-checkbox-button key="Version" label="Version">Version</el-checkbox-button>
        </el-form-item>
      </el-form>
    </el-collapse-item>
    <el-collapse-item title="Login" name="3">
      <el-form label-position="left">
        <el-form-item label="Login Logo">
          <div class="ev-switch"><el-switch v-model="setLoginLogo" active-text="YES" inactive-text="NO" size="small" /></div>
        </el-form-item>
        <el-form-item label="Login Image">
          <div class="ev-switch"><el-switch v-model="setLoginImage" active-text="YES" inactive-text="NO" size="small" /></div>
        </el-form-item>
        <el-form-item label="Top Logo">
          <div class="ev-switch"><el-switch v-model="setTopLogo" active-text="YES" inactive-text="NO" size="small" /></div>
      </el-form-item>
    </el-form>
  </el-collapse-item>
</el-collapse></template>

<style lang="scss" scoped></style>
