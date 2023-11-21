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
    <!-- <el-scrollbar always class="ev-menu-scroll"> -->
      <!-- <el-menu :mode="AppSetting.menuType" collapse="true" default-active="2" router="false" teleported="false">
        <el-sub-menu v-for="a in 10" :index="`a${a}`">
          <template #title>{{ `a${a}` }}</template>
            <el-sub-menu v-for="b in 10" :index="`b${a}-${b}`">
              <template #title>{{ `b${a}-${b}` }}</template>
              <el-menu-item :index="`${a}-${b}`">{{ `c${a}-${b}` }}</el-menu-item>
              <el-sub-menu v-for="c in 2" :index="`${a}-${b}-${c}`">
                <template #title>{{ `c${a}-${b}-${c}` }}</template>
                <el-sub-menu v-for="d in 2" :index="`${a}-${b}-${c}-${d}`">
                  <template #title>{{ `d${a}-${b}-${c}-${d}` }}</template>              
                  <el-menu-item :index="`${a}-${b}-${c}-${d}`">{{ `e${a}-${b}-${c}-${d}` }}</el-menu-item>
                </el-sub-menu>
              </el-sub-menu>
            </el-sub-menu>
        </el-sub-menu>
      </el-menu> -->
      <div class="menuTest collapse">
        <!-- <ul v-for="a in 5" :class="`deaph1`">
          <li>
            <span class="title">{{ `${a}` }}</span>
            <ul v-for="b in 5" :class="`deaph2`">
              <li>{{ `${a}-${b}` }}</li>
              <ul v-for="c in 5" :class="`deaph3`">
                <li>{{ `${a}-${b}-${c}` }}</li>
              </ul>
            </ul>

          </li>
          
        </ul> -->
      </div>
    <!-- </el-scrollbar> -->
    <div class="ev-menu__banner">
      <img src="@/assets/img/menu-banner.png" alt="하단배너" />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.menuTest {
  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  // ul {
  //   max-height: 60vh;
  //   overflow: auto;
  //   border: 1px solid green;
  // }

  // li {
  //   display: flex;
  //   align-items: center;
  //   min-height: 50px;
  //   border: 1px solid blue;
  // }

  &.collapse {
    width: 660px;
    height: 100%;
    z-index: 99;
    border: 1px solid cyan;


    ul {
      max-height: 60vh;
      // overflow: auto;
      border: 1px solid green;
    }

    li {
      display: flex;
      align-items: center;
      width: 200px;      
      min-height: 50px;
      border: 1px solid blue;
    }

    ul {
      &[class*="deaph1"] {
        left: 0;
      }

      &[class*="deaph2"] {
        width: 200px;
        position: absolute;
        left: 200px;
      }

      &[class*="deaph3"] {        
        position: absolute;
        left: 200px;
      }
    }
  }
  }
</style>