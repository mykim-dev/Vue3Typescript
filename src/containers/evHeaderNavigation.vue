<script lang="ts" setup>
import { layoutSettingStore } from '@/stores/containers/index'

import EvBadge from '@/containers/evBadge.vue'
import EvSetting from '@/containers/evSetting.vue'
import EvLanguage from '@/containers/evLanguage.vue'
import EvAvatar from '@/containers/evAvatar.vue'

const layoutSetting = layoutSettingStore()
</script>

<template>
  <ul class="ev-header-navigation">
    <li>
      <EvBadge />
    </li>
    <li>
      <button @click="layoutSetting.changeLayout">
        <el-icon :size="20">
          <Platform />
        </el-icon>
      </button>
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