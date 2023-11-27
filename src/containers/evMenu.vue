<script lang="ts" setup>
import { ref } from 'vue'
import { AppSettingStore } from '@/stores/common/index'
import {
  HomeFilled,
  Grid,
  Menu,
  QuestionFilled,
  DArrowRight,
  DArrowLeft,
  Menu as IconMenu,
} from '@element-plus/icons-vue'

const AppSetting = AppSettingStore()
</script>

<template>
  <div class="ev-menu">
    <el-button class="ev-menu-toggle" :icon="AppSetting.menuCollapse === true ? 'DArrowRight' : 'DArrowLeft'"
      @click="AppSetting.changeMenuCollapse" />
    <el-scrollbar class="ev-menu-scroll">
      <el-menu :mode="AppSetting.menuType" :collapse="AppSetting.menuCollapse" router="true">
        <!-- <template v-for="tmp in 10"> -->
          <template v-for="deaph1Menu in AppSetting.menus">
              <el-sub-menu v-if="deaph1Menu.menus.length > 0" :index="deaph1Menu.link">
                <template #title>
                  <span>{{ tmp }}.{{ deaph1Menu.name }}</span>
                </template>
                <el-menu-item-group v-for="deaph2Menu in deaph1Menu.menus">
                  <template #title><span>{{ deaph2Menu.name }}</span></template>
                  <el-sub-menu  v-if="deaph2Menu.menus.length > 0" :index="deaph2Menu.link">
                    <template #title>
                      <span>{{ deaph2Menu.name }}</span>
                    </template>
                    <el-menu-item-group v-for="deaph3Menu in deaph2Menu.menus">
                      <el-sub-menu  v-if="deaph3Menu.menus.length > 0" :index="deaph3Menu.link">
                        <template #title>
                          <span>{{ deaph3Menu.name }}</span>
                        </template>
                      </el-sub-menu>
                      <el-menu-item v-else :index="deaph3Menu.link">
                        <template #title>
                          <span>{{ deaph3Menu.name }}</span>
                        </template>
                      </el-menu-item>
                    </el-menu-item-group>
                  </el-sub-menu>
                  <el-menu-item v-else :index="deaph2Menu.link">
                    <template #title>
                      <span>{{ deaph2Menu.name }}</span>
                    </template>
                  </el-menu-item>
                </el-menu-item-group>
              </el-sub-menu>
              <el-menu-item v-else :index="deaph1Menu.link">
                <template #title>
                  <span>{{ tmp }}.{{ deaph1Menu.name }}</span>
                </template>
              </el-menu-item>            
          </template>
        <!-- </template> -->
      </el-menu>
    </el-scrollbar>
    <div class="ev-menu__banner">
      <img src="@/assets/img/menu-banner.png" alt="하단배너" />
    </div>
  </div>
</template>