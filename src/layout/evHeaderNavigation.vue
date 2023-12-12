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
  <ul class="ev-header-navigation">
    <li>
      <!-- 레이아웃 -->
      <el-button-group class="layout-group">
        <el-button class="horizontal" @click="AppSetting.changeLayout('horizontal')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
        <el-button class="vertical" @click="AppSetting.changeLayout('vertical')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
      </el-button-group>
    </li>
    <li>
      <div class="ev-button">
        <el-button @click="AppSetting.togglePopup">팝업</el-button>
      </div>
      <div class="ev-button">
        <el-button @click="AppSetting.toggleRightPanel">우측패널</el-button>
      </div>
      <div class="ev-button">
        <el-button @click="AppSetting.toggleBottomPanel">하단패널</el-button>
      </div>
    </li>
    <li>
      <RouterLink to="/AppSetting">
        <div class="ev-button"><el-button :icon="Operation" /></div>
      </RouterLink>
      <div class="ev-button">
        <el-button :icon="Rank" link @click="AppSetting.mainExpand" />
      </div>
      <EvBadge />
      <EvSetting />
      <EvLanguage />
      <EvAvatar />
    </li>
  </ul>
</template>
