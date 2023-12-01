<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'
const AppSetting = AppSettingStore()
// const isFull = AppSetting.screenIsFull
const isFull = true
const screenGutter = AppSetting.screenGutter
</script>

<template>
  <ul class="sampleGuide">
    <li>
      <h2>Block(현재)</h2>
      <div class="displayType typeBlock">
        <div class="box" :class="`box${j}`" v-for="j in 24">box{{ j }}</div>
      </div>
    </li>
    <li>
      <h2>Grid</h2>
      <div class="displayType typeGrid">
        <div class="box" :class="`box${j}`" v-for="j in 24">box{{ j }}</div>
      </div>

      <ul style="list-style-type: disc;">
        <li>Grid 방식은 Excel의 cell과 비슷함</li>
        <li>Screen의 경우 24*24의 셀 기준 merge 후 구성하는 다이나믹 구성이 가능하여 Grid 방식이 일부 dashboard 타입의 경우 적합해보임</li>
        <li></li>
      </ul>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.displayType {
  margin: 10px 0;
  border: 1px solid #aaa;

  .box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border: 1px solid #aaa;
    background-color: #fff;    
  }

  .box10 {
    height: 200px;
  }

  .box13 {
    color: white;
    background-color: green;
  }

  .box14~.box16{
    color: white;
    background-color: blue;
  }

  &.typeBlock {    
    .box {
      float: left;
      width: 25%;      
    }

    &::after {
      display: block;
      content: "";
      clear: both;
    }
  }

  &.typeGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>