<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/appSetting'
import EvLogo from '@/layout/evLogo.vue'
import EvHeader from '@/layout/evHeader.vue'
import EvAside from '@/layout/evAside.vue'
import EvTags from '@/layout/evTags.vue'

const AppSetting = useAppStore()

const activeName = ref('2')
const switchValue = ref(true)

const gnbLogin = ref(['Login'])
const gnbLanguage = ref(['Language'])
const gnbNavigation = ref(['Navigation'])
const gnbSiteMap = ref(['Site Map'])
const gnbNotification = ref(['Notification'])
const gnbSetting = ref(['Setting'])
const gnbLoginLogo = ref(['Login Logo'])
const gnbLoginImage = ref(['Login Image'])
const gnbTopLogo = ref(['Top Logo'])
const gnbs = ['Login', 'Language', 'Navigation', 'Site Map', 'Notification', 'Setting', 'Login Logo', 'Login Image', 'Top Logo']

const themeColor = ['#5796ad', '#ffb800', '#328a23', '#9065db']

</script>

<template>
  <div id="ev-layout" class="ev-layout" :data-layout="AppSetting.appLayoutType" :data-collapse="AppSetting.menuCollapse">
    <EvLogo />
    <EvHeader />
    <EvAside />
    <EvTags />
    <main class="ev-screen">
      <RouterView />
    </main>
  </div>

  <div class="setting-option">
    <dl>
      <dt>Common Setting</dt>
      <dd>
        <el-form label-position="left">
          <el-form-item label="Layout">
            <el-switch v-model="switchValue" active-text="Horizontal" inactive-text="Vertical" size="small" />
          </el-form-item>
          <el-form-item label="Theme">
            <el-button-group v-model="switchValue">
                <el-button :class="`ThemeColor ThemeColor${index}`" :style="`background-color:${color}`" v-for="(color, index) in themeColor" />
            </el-button-group>
          </el-form-item>                    
          <el-form-item label="Top Banner">
            <el-switch v-model="switchValue" active-text="YES" inactive-text="NO" size="small" />
            <img src="" alt="" />
          </el-form-item>
          <el-form-item label="Bottom Banner">
            <el-switch v-model="switchValue" active-text="YES" inactive-text="NO" size="small" />
            <img src="" alt="" />
          </el-form-item>
          <el-form-item label="Progress Icon">
            <el-button-group v-model="switchValue">
              <el-button class="progressIcon basic">Basic</el-button>
              <el-button class="progressIcon cloud">Cloud</el-button>
              <el-button class="progressIcon ellipsis">Ellipsis</el-button>
              <el-button class="progressIcon gear">Gear</el-button>
              <el-button class="progressIcon straight">Straight</el-button>
            </el-button-group>
          </el-form-item>
        </el-form>
      </dd>
    </dl>

    <dl>
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
    <dl>
      <dt>Login</dt>
      <dd>
        <el-form label-position="top">
          <el-form-item label="Login Logo">
            <el-switch v-model="switchValue" active-text="YES" inactive-text="NO" size="small" />
          </el-form-item>
          <el-form-item label="Login Image">
            <el-switch v-model="switchValue" active-text="YES" inactive-text="NO" size="small" />
          </el-form-item>
          <el-form-item label="Top Logo">
            <el-switch v-model="switchValue" active-text="YES" inactive-text="NO" size="small" />
          </el-form-item>
        </el-form>
      </dd>
    </dl>
  </div>
</template>

<style lang="scss" scoped></style>