<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
import { HomeFilled, Grid, Menu, QuestionFilled, DArrowRight, DArrowLeft, Menu as IconMenu } from '@element-plus/icons-vue'

const AppSetting = useAppStore()
</script>

<template>
  <div class="ev-menu">
    <div class="ev-button ev-menu-toggle">
      <el-button circle :icon="AppSetting.menuCollapse === true ? 'DArrowRight' : 'DArrowLeft'" @click="AppSetting.changeMenuCollapse" />
    </div>
    <el-scrollbar view-class="ev-menu-scroll">
      <el-menu :mode="AppSetting.menuType" :collapse="AppSetting.menuCollapse" :collapse-transition="false" :router="true">
        <!-- <template v-for="tmp in 10"> -->
        <template v-for="deaph1Menu in AppSetting.menus">
          <el-sub-menu v-if="deaph1Menu.menus.length > 0" :index="deaph1Menu.link" popper-class="submenu-popper" :teleported="true">
            <template #title>
              <el-button text :icon="deaph1Menu.icon" />
              <span>{{ deaph1Menu.name }}</span>
            </template>

            <el-menu-item-group>
              <template #title>
                <span>{{ deaph1Menu.name }}</span>
              </template>
              <template v-for="deaph2Menu in deaph1Menu.menus">
                <el-sub-menu v-if="deaph2Menu.menus.length > 0" :index="deaph2Menu.link">
                  <template #title>
                    <el-button text :icon="deaph2Menu.icon" />
                    <span>{{ deaph2Menu.name }}</span>
                  </template>

                  <!-- <el-menu-item-group>
                        <template #title><span>{{ deaph2Menu.name }}</span></template>                  
                        <el-menu-item v-for="deaph3Menu in deaph2Menu.menus">
                          <el-button text :icon="deaph2Menu.icon" />
                          <template #title>{{ deaph3Menu.name }}</template>
                        </el-menu-item>
                      </el-menu-item-group> -->
                </el-sub-menu>
                <el-menu-item v-else :index="deaph2Menu.link">
                  <el-button text :icon="deaph2Menu.icon" />
                  <template #title>{{ deaph2Menu.name }}</template>
                </el-menu-item>
              </template>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item v-else :index="deaph1Menu.link">
            <el-button text :icon="deaph1Menu.icon" />
            <template #title>{{ deaph1Menu.name }}</template>
          </el-menu-item>
        </template>
        <!-- </template> -->
      </el-menu>
    </el-scrollbar>
  </div>
</template>
