<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/appSetting'
const AppSetting = useAppStore()

const setTopBanner = ref(true)
const setBottomBanner = ref(true)
const setProgressIcon = ref('basic')
const setLoginLogo = ref(true)
const setLoginImage = ref(true)
const setTopLogo = ref(true)

// const gnbLogin = ref(['Login'])
// const gnbLanguage = ref(['Language'])
// const gnbNavigation = ref(['Navigation'])
// const gnbSiteMap = ref(['Site Map'])
// const gnbNotification = ref(['Notification'])
// const gnbSetting = ref(['Setting'])
// const gnbLoginLogo = ref(['Login Logo'])
// const gnbLoginImage = ref(['Login Image'])
// const gnbTopLogo = ref(['Top Logo'])
// const gnbs = ['Login', 'Language', 'Navigation', 'Site Map', 'Notification', 'Setting', 'Login Logo', 'Login Image', 'Top Logo']

const themeList = [
  { name: 'green', color: '#5796ad' },
  { name: 'yellow', color: '#ffb800' },
  { name: 'green_2', color: '#328a23' },
  { name: 'purple', color: '#9065db' },
]
</script>

<template>
  <dl class="panel-item">
    <dt>Common Setting</dt>
    <dd>
      <el-form label-position="left">
        <el-form-item label="Layout">
          <!-- <div class="ev-switch"><el-switch v-model="setLayout" active-text="Horizontal" inactive-text="Vertical" size="small" /></div> -->
          <el-radio-group v-model="AppSetting.appLayoutType" @click="AppSetting.changeLayout()">
            <el-radio-button class="layout horizontal" label="horizontal" />
            <el-radio-button class="layout vertical" label="vertical" />
          </el-radio-group>
        </el-form-item>
        <el-form-item label="Theme">
          <el-button-group v-model="AppSetting.appTheme">
            <el-button :class="theme.name" :style="`background-color:${theme.color}`" v-for="theme in themeList" @click="AppSetting.changeTheme(theme.name)" />
          </el-button-group>
        </el-form-item>
        <el-form-item label="Component Glassmorphism">
          <div class="ev-switch"><el-switch v-model="AppSetting.glassmorphism" active-text="YES" inactive-text="NO" size="small" /></div>
        </el-form-item>
        <el-form-item label="Top Banner">
          <div class="ev-switch"><el-switch v-model="setTopBanner" active-text="YES" inactive-text="NO" size="small" /></div>
          <img src="" alt="" />
        </el-form-item>
        <el-form-item label="Bottom Banner">
          <div class="ev-switch"><el-switch v-model="setBottomBanner" active-text="YES" inactive-text="NO" size="small" /></div>
          <img src="" alt="" />
        </el-form-item>
        <el-form-item label="Progress Icon">
          <el-radio-group v-model="setProgressIcon">
            <el-radio-button class="progressIcon basic" label="basic" />
            <el-radio-button class="progressIcon cloud" label="cloud" />
            <el-radio-button class="progressIcon ellipsis" label="ellipsis" />
            <el-radio-button class="progressIcon gear" label="gear" />
            <el-radio-button class="progressIcon straight" label="straight" />
          </el-radio-group>
        </el-form-item>
      </el-form>
    </dd>
  </dl>

  <dl class="panel-item">
    <dt>GNB</dt>
    <dd>
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
    </dd>
  </dl>

  <dl class="panel-item">
    <dt>Login</dt>
    <dd>
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
    </dd>
  </dl>
</template>

<style lang="scss" scoped></style>
