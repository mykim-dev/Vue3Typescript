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
    <el-scrollbar always class="ev-menu-scroll">
      <el-menu :mode="AppSetting.menuType" collapse="true" router="false">
        <el-sub-menu v-for="a in 1" :index="`a${a}`" :popper-class="`subMain subMain${a}`">
          <template #title>{{ `a${a}` }}</template>
            <el-sub-menu v-for="b in 10" :index="`b${a}-${b}`">
              <template #title>{{ `b${a}-${b}` }}</template>
              <el-menu-item :index="`${a}-${b}`">{{ `c${a}-${b}` }}</el-menu-item>
              <el-sub-menu v-for="c in 1" :index="`${a}-${b}-${c}`">
                <template #title>{{ `c${a}-${b}-${c}` }}</template>
                <el-sub-menu v-for="d in 1" :index="`${a}-${b}-${c}-${d}`">
                  <template #title>{{ `d${a}-${b}-${c}-${d}` }}</template>              
                  <el-menu-item :index="`${a}-${b}-${c}-${d}`">{{ `e${a}-${b}-${c}-${d}` }}</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
            </el-sub-menu>
        </el-sub-menu>
      </el-menu>
    </el-scrollbar>
    <div class="ev-menu__banner">
      <img src="@/assets/img/menu-banner.png" alt="하단배너" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menu-test {
  border: 1px solid red;
  height: 100%;
  
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .sub-menu {
    width: 200px;
    position: absolute;
    border: 1px solid green;

    &.sub-menu1 {
      left: 70px;
    }

    &.sub-menu2 {
      left: 200px;
    }

    &.sub-menu3 {
      left: 200px;
    }

    &.sub-menu4 {
      left: 200px;
    }

  }
}

</style>