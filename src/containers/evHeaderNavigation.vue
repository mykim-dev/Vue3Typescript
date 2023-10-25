<script lang="ts" setup>
import EvBadge from '@/containers/evBadge.vue'
import EvSetting from '@/containers/evSetting.vue'
import EvLanguage from '@/containers/evLanguage.vue'
import EvAvatar from '@/containers/evAvatar.vue'
</script>

<template>
  <ul class="ev-header-navigation">
    <li><EvBadge /></li>
    <li>
      <button>
        <el-icon :size="20">
          <Platform />
        </el-icon>
      </button>
    </li>
    <li><EvSetting /></li>
    <li><EvLanguage /></li>
    <li><EvAvatar /></li>
    <li>
      <div class="ev-header__banner">
        <img src="" alt="" />
        배너
      </div>
    </li>
  </ul>
</template>