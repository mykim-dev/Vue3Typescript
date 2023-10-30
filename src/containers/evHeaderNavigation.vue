<script lang="ts" setup>
import { layoutSettingStore } from '@/stores/common/index'

import EvBadge from '@/containers/evBadge.vue'
import EvSetting from '@/containers/evSetting.vue'
import EvLanguage from '@/containers/evLanguage.vue'
import EvAvatar from '@/containers/evAvatar.vue'

const layoutSetting = layoutSettingStore()

const changeTheme = (theme: string) => {
  document.querySelector('body').classList = ''
  if (theme !== '') document.querySelector('body').classList.add(theme)
}

const changeLayout = (layout: string) => {
  document.querySelector('.ev-layout').classList = 'ev-layout'
  if (layout !== '') document.querySelector('.ev-layout').classList.add(layout)
}
</script>

<template>
  <ul class="ev-header-navigation">
    <li>
      <el-button-group class="theme-group">
        <el-button class="element" @click="changeTheme('')" />
        <el-button class="green" @click="changeTheme('green')" />
        <el-button class="yellow" @click="changeTheme('yellow')" />
        <el-button class="green_2" @click="changeTheme('green_2')" />
      </el-button-group>
    </li>
    <li>
      <el-button-group class="layout-group">
        <el-button class="horizontal" @click="changeLayout('')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
        <el-button class="vertical" @click="changeLayout('vertical')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
        <el-button class="newHorizontal" @click="changeLayout('newHorizontal')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
        <el-button class="newVertical" @click="changeLayout('newVertical')">
          <i v-for="i in 2" :class="'item item' + i"></i>
        </el-button>
      </el-button-group>
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