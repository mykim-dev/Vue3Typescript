<script setup>
import setting from '@/index'
import EvBreadcrumb from '@/containers/ev-breadcrumb.vue'
import EvBadge from '@/containers/ev-badge.vue'
import EvSetting from '@/containers/ev-setting.vue'
import EvLanguage from '@/containers/ev-language.vue'
import EvAvatar from '@/containers/ev-avatar.vue'

import { Platform, Setting } from '@element-plus/icons-vue'

function changeLayout() {
  setting.layout = (setting.layout === 'vertical') ? 'horizontal' : 'vertical';
}
</script>

<template>
  <div class="ev-header">
    <div class="ev-header__left">
      <EvBreadcrumb />
    </div>
    <div class="ev-header__right">
      <button @click="changeLayout">Layout</button>
      <EvBadge />
      <button>
        <el-icon :size="20"><Platform /></el-icon>
      </button>
      <EvSetting />
      <EvLanguage />
      <EvAvatar />
    </div>
  </div>
</template>