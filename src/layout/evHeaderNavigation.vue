<script lang="ts" setup>
import { Rank, Operation } from '@element-plus/icons-vue'
import { useAppStore } from '@/stores/appSetting'

import EvBadge from '@/layout/evBadge.vue'
import EvSetting from '@/layout/evSetting.vue'
import EvLanguage from '@/layout/evLanguage.vue'
import EvAvatar from '@/layout/evAvatar.vue'

const AppSetting = useAppStore()
</script>

<template>
  <div class="ev-header-navigation">
    <div class="ev-header-navigation__icon">
      <el-button @click="AppSetting.togglePopup">팝업</el-button>
    </div>
    <div class="ev-header-navigation__icon">
      <el-button @click="AppSetting.toggleRightPanel">우측패널</el-button>
    </div>
    <div class="ev-header-navigation__icon">
      <el-button @click="AppSetting.toggleBottomPanel">하단패널</el-button>
    </div>
    <div class="ev-header-navigation__icon">
      <RouterLink to="/AppSetting"><el-button :icon="Operation" /></RouterLink>
    </div>
    <div class="ev-header-navigation__icon">
      <el-button :icon="Rank" @click="AppSetting.toggleScreenExpand" />
    </div>
    <EvBadge />
    <EvSetting />
    <EvLanguage />
    <EvAvatar />
  </div>
</template>
