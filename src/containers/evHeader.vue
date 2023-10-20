<script lang="ts" setup>
import defaultData from '@/defaultData'

import EvBreadcrumb from '@/containers/evBreadcrumb.vue'
import EvBadge from '@/containers/evBadge.vue'
import EvSetting from '@/containers/evSetting.vue'
import EvLanguage from '@/containers/evLanguage.vue'
import EvAvatar from '@/containers/evAvatar.vue'

import { Platform, Setting } from '@element-plus/icons-vue'
</script>

<template>
  <div class="ev-header">
    <div class="ev-header__left">
      <EvBreadcrumb />
    </div>
    <div class="ev-header__right">
      <!-- <button>Layout</button> -->
      <EvBadge />
      <button>
        <el-icon :size="20">
          <Platform />
        </el-icon>
      </button>
      <EvSetting />
      <EvLanguage />
      <EvAvatar />
    </div>
  </div>
</template>