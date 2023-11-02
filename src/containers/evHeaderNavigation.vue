<script lang="ts" setup>
import { Rank } from '@element-plus/icons-vue'
import { AppSettingStore } from '@/stores/common/index'

import EvBadge from '@/containers/evBadge.vue'
import EvSetting from '@/containers/evSetting.vue'
import EvLanguage from '@/containers/evLanguage.vue'
import EvAvatar from '@/containers/evAvatar.vue'

const AppSetting = AppSettingStore()

const changeTheme = (theme: string) => {
  document.querySelector('body').classList = ''
  if (theme !== '') document.querySelector('body').classList.add(theme)
}

const changeLayout = (layout: string) => {
  document.querySelector('.ev-layout').setAttribute('data-layout', layout)
}

const mainExpand = () => {
  document.querySelector('.ev-layout').classList.toggle('is-main-expand');
}
</script>

<template>
  <ul class="ev-header-navigation">
    <li>
      <el-button-group class="theme-group">
        <el-button class="green" @click="changeTheme('green')" />
        <el-button class="yellow" @click="changeTheme('yellow')" />
        <el-button class="green_2" @click="changeTheme('green_2')" />
        <el-button class="purple" @click="changeTheme('purple')" />
      </el-button-group>
    </li>
    <li>
      <el-button-group class="layout-group">
        <el-button class="horizontal" @click="changeLayout('horizontal')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
        <el-button class="vertical" @click="changeLayout('vertical')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
        <el-button class="horizontal2" @click="changeLayout('horizontal2')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
        <el-button class="vertical2" @click="changeLayout('vertical2')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
      </el-button-group>
    </li>
    <li>
      <el-link :underline="false" @click="mainExpand">
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