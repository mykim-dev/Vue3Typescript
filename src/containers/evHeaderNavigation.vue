<script lang="ts" setup>
import { Rank } from '@element-plus/icons-vue'
import { AppSettingStore } from '@/stores/common/index'

import EvBadge from '@/containers/evBadge.vue'
import EvSetting from '@/containers/evSetting.vue'
import EvLanguage from '@/containers/evLanguage.vue'
import EvAvatar from '@/containers/evAvatar.vue'

const AppSetting = AppSettingStore()
</script>

<template>
  <ul class="ev-header-navigation">
    <li>
      <el-button-group class="theme-group">
        <el-button class="green" @click="AppSetting.changeTheme('green')" />
        <el-button class="yellow" @click="AppSetting.changeTheme('yellow')" />
        <el-button class="green_2" @click="AppSetting.changeTheme('green_2')" />
        <el-button class="purple" @click="AppSetting.changeTheme('purple')" />
      </el-button-group>
    </li>
    <li>
      <el-button-group class="layout-group">
        <el-button class="horizontal" @click="AppSetting.changeLayout('horizontal')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
        <el-button class="vertical" @click="AppSetting.changeLayout('vertical')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
        <el-button class="horizontal2" @click="AppSetting.changeLayout('horizontal2')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
        <el-button class="vertical2" @click="AppSetting.changeLayout('vertical2')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
      </el-button-group>
    </li>
    <li>
      <el-link :underline="false" @click="AppSetting.mainExpand">
        <el-icon :size="20">
          <Rank />
        </el-icon>
      </el-link>
    </li>
    <li>
      <EvBadge />
    </li>
    <li>
      <EvSetting />
    </li>
    <li>
      <EvLanguage />
    </li>
    <li>
      <EvAvatar />
    </li>
    <li>
      <div class="ev-header__banner">
        <img src="@/assets/img/header-banner.png" alt="" />
      </div>
    </li>
  </ul>
</template>