<script lang="ts" setup>
import { AppSettingStore } from '@/stores/common/index'

const AppSetting = AppSettingStore()
// const isFull = AppSetting.screenIsFull
const isFull = true
const screenGutter = AppSetting.screenGutter
const boxHeightList = [
  { color: '', height: '40px' },
  { color: '', height: '40px' },
  { color: '', height: '40px' },
  { color: '', height: '40px' },
  { color: '', height: '40px' },
  { color: 'green', height: '120px' },
  { color: 'blue', height: '100px' },
  { color: 'blue', height: '80px' },
  { color: 'blue', height: '40px' },
  { color: '', height: '40px' },
  { color: '', height: '40px' },
  { color: '', height: '40px' },
]
</script>

<template>
  <ul class="sampleGuide">
    <li>
      <h2>Block(현재)</h2>
      <div class="displayType typeBlock">
        <div class="box" :style="`height:${box.height};background-color:${box.color};`" v-for="(box, j) in boxHeightList">
          {{ j + 1 }}
        </div>
      </div>
      
      <ul class="sampleDesc">
        <li>block 방식</li>
        <li>height의 값이 가장 긴 컴포넌트를 좌측에 배치해야 자연스러움</li>
      </ul>

      <hr />

      <ul class="sampleDesc">
        <li><b>Form Detail 구성에 Block 방식을 적용한다면...</b></li>
        <li>컨트롤들의 명확한 높이의 기준이 필요함</li>
      </ul>

    </li>
    <li>
      <h2>Grid</h2>
      <div class="displayType typeGrid">
        <div class="box" :style="`height:${box.height};background-color:${box.color};`" v-for="(box, j) in boxHeightList">
          {{ j + 1}}
        </div>
      </div>

      <ul class="sampleDesc">
        <li>Grid 방식은 Excel의 cell과 비슷함</li>
        <li>Screen의 경우 24*n의 셀 기준 row merge 후 컴포넌트를 배치하는 것이 가장 적합<br />
          merge하지 않는 경우 height의 높이가 큰 값을 기준으로 좌우에 배치되는 컴포넌트의 사이즈가 동일해짐
        </li>
        <li>
          User가 Grid의 개념을 이해하도록 하는것은 사용하지 않을 수 있음<br>
          Block or Grid 타입의 기준을 정해서 제공하는것이 적합할 것으로 보임
        </li>
      </ul>

      <hr />

      <ul class="sampleDesc">
        <li><b>Screen 구성에 Grid 방식을 적용한다면...</b></li>
        <li>24*n의 셀 기준 row merge 후 컴포넌트를 배치하는 것이 가장 적합<br />
          merge하지 않는 경우 height의 높이가 큰 값을 기준으로 좌우에 배치되는 컴포넌트의 사이즈가 동일해짐
        </li>
        <li>
          Dynamic, Dashboard ~ Dashboard3 타입이 Grid 방식으로 적합 -  component + 불가능하게 해야함(높이의 기준이 불분명함)<br />
          Default, horizintal, vertical 타입은 기본에서 component + 기능을 넣으려면 Grid 타입을 권장하지 않음
        </li>
        
      </ul>

      <hr />

      <ul class="sampleDesc">
        <li><b>Form Detail 구성에  Grid 방식을 적용한다면...</b></li>
        <li>Grid 방식을 추가허려면 - merge 할 수 있는 단계를 추가해야함 </li>
        <li>Block 방식을 유지 하면서 구성하려면 어떤 방법이 있을까?</li>
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