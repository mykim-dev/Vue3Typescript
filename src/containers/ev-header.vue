<script lang="ts" setup>
import { ref, reactive } from 'vue'
import defaultData from '@/defaultData'

import EvBreadcrumb from '@/containers/ev-breadcrumb.vue'
import EvBadge from '@/containers/ev-badge.vue'
import EvSetting from '@/containers/ev-setting.vue'
import EvLanguage from '@/containers/ev-language.vue'
import EvAvatar from '@/containers/ev-avatar.vue'

import { Platform, Setting } from '@element-plus/icons-vue'

const refTest = ref('mykim')
const refObjTest = ref({
  id: 1
})
const reactiveArrTest = reactive([])
const reactiveObjTest = reactive({
  id: 1
})

const fnToggleLayout = () => {
  refTest.value = 'kimmiyoung'
  refObjTest.value.id = 2
  reactiveObjTest.id = 2
}
</script>

<template>
  <div class="ev-header">
    <div class="ev-header__left">
      <EvBreadcrumb />
    </div>
    <div class="ev-header__right">
      {{ refTest }}
      {{ refObjTest }}
      {{ reactiveObjTest.id }}
      <button @click="fnToggleLayout">Layout</button>
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
</template>@/defaultData