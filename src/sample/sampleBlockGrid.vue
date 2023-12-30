<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'

const AppSetting = useAppStore()
const boxHeightList = [
  { color: '', height: '40px' },
  { color: '', height: '40px' },
  { color: '', height: '40px' },
  { color: '', height: '40px' },  
  { color: 'yellow', height: '40px' },  
  { color: 'yellow', height: '80px' },
  { color: 'purple', height: '120px' },  
  { color: '', height: '40px' },
  { color: 'cyan', height: '40px' },
  { color: '', height: '40px' },
  { color: '', height: '40px' },
  { color: '', height: '40px' },
]
</script>

<template>
  <el-row class="ev-screen-row" :gutter="16">
    <el-col class="ev-screen-col" :span="12">
      <div class="ev-component" :class="{ 'is-folder': AppSetting.componentType == 'folder' }">
        <div class="sampleGuide">
          <h2>Block(현재)</h2>
          <div class="displayType typeBlock">
            <div class="box" :style="`height:${box.height};background-color:${box.color};`" v-for="(box, j) in boxHeightList">
              <span>{{ j + 1 }}</span>
            </div>
          </div>

          <ul class="sampleDesc">
            <li>height의 값이 가장 긴 컴포넌트를 좌측에 배치해야 자연스러움</li>
          </ul>

          <hr />

          <ul class="sampleDesc">
            <li><b>Form Detail 구성은 Block 방식이 적합해 보임</b></li>
            <li>컨트롤의 높이에 대한 기준 필요</li>
            <li>Diverder 컨트롤 추가</li>

          </ul>
        </div>
      </div>
    </el-col>
    <el-col class="ev-screen-col" :span="12">
      <div class="ev-component" :class="{ 'is-folder': AppSetting.componentType == 'folder' }">
        <div class="sampleGuide">
          <h2>Grid</h2>
          <div class="displayType typeGrid">
            <div class="box" :style="`height:${box.height};background-color:${box.color};`" v-for="(box, j) in boxHeightList">
              <span>{{ j + 1 }}</span>
            </div>
          </div>

          <ul class="sampleDesc">
            <li>Grid 방식은 table, Excel의 cell과 비슷함</li>
            <li>
              Screen의 경우 24*n의 셀 기준 row merge 후 컴포넌트를 배치하는 것이 가장 적합
              <br />
              merge하지 않는 경우 height의 높이가 큰 값을 기준으로 좌우에 배치되는 컴포넌트의 사이즈가 동일해짐
            </li>
          </ul>

          <hr />

          <ul class="sampleDesc">
            <li><b>Screen 구성에 Grid 방식은 is-full 기능과 동일해 보임</b></li>
            <li>Dynamic, Dashboard ~ Dashboard3 타입이 Grid 방식으로 적합</li>
          </ul>
        </div>
      </div>
      </el-col>
  </el-row>
</template>

<style lang="scss" scoped>
.sampleGuide {
  h2 {
    text-align: center;
  }

  .sampleDesc {
    padding-inline-start: 20px;

    li {
      list-style-type: disc;
      line-height: 2;
    }

    & + .sampleDesc {
      margin-top: 20px;
    }
  }
}
.displayType {
  margin: var(--evc-control-padding) 0;
  border: 1px solid #aaa;

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #000000;
    border: 1px solid #aaa;
    background-color: #fff;
  }
  .box13 {
    color: white;
    background-color: green;
  }

  .box14,
  .box15,
  .box16 {
    color: white;
    background-color: cyan;
  }

  &.typeBlock {
    .box {
      float: left;
      width: 25%;
    }

    &::after {
      display: block;
      content: '';
      clear: both;
    }
  }

  &.typeGrid {
    display: grid;
    grid-template-columns: repeat(4, auto);
  }

  .sampleDesc {
    display: none;
  }
}
</style>
