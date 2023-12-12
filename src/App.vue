<script lang="ts" setup>
import { ref } from 'vue'
import { useAppStore } from '@/stores/appSetting'
import EvLogo from '@/layout/evLogo.vue'
import EvHeader from '@/layout/evHeader.vue'
import EvAside from '@/layout/evAside.vue'
import EvTags from '@/layout/evTags.vue'
import EvPanelPopup from '@/layout/evPanelPopup.vue'
import EvPanelRight from '@/layout/evPanelRight.vue'
import EvPanelBottom from '@/layout/evPanelBottom.vue'

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
  <div id="ev-layout" class="ev-layout" :data-layout="AppSetting.appLayoutType" :data-collapse="AppSetting.menuCollapse" :data-screen-expand="AppSetting.screenExpand">
    <EvLogo />
    <EvHeader />
    <EvAside />
    <EvTags />
    <main class="ev-screen">
      <RouterView />
    </main>
  </div>
  <EvPanelPopup :class="{ 'is-active': AppSetting.panelPopup }" />
  <EvPanelRight :class="{ 'is-active': AppSetting.panelRight }" />
  <EvPanelBottom :class="{ 'is-active': AppSetting.PanelBottom }" />
</template>

<style lang="scss" scoped></style>
