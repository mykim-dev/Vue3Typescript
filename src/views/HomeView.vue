<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['1', '1', '1'])
const disabledState = ref([true, false, false])
const stripeState = ref([true, false, false])

const handleChange = (val: string[]) => {
  console.log(val)
}

const todoTables = [
  {
    title:
      '1차 할 일 - 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트',
    data: [
      {
        subject:
          'toolbar - title, button_wrap  - 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트 긴 텍스트 테스트',
      },
      {
        subject:
          'action overlay 움직이는 아이콘 깨지는 현상 - svg animation 으로 수정',
      },
    ],
  },
  {
    title: '2차 할 일',
    data: [
      {
        subject:
          'console, demo 스타일 맞추기 위한 Token 정리 (범위는 Element Pluse에서 제공되는 정도 + demo asis에 적용되었던 스타일)',
      },
      {
        subject: 'screen, conponent(form) - float, grid 배치 샘플',
      },
      {
        subject:
          'action overlay 움직이는 아이콘 깨지는 현상 - svg animation 으로 수정',
      },
    ],
  },
  {
    title: '먼 미래에 하면 어떨까?',
    data: [
      {
        subject:
          'title 컨트롤 (현재 config시 label로 사용하고 있음), blank 컨트롤(다음줄로 이동) 샘플',
      },
      {
        subject: '정리된 테마요소를 UI로 변경 할 수 있는지 확인 (setting)',
      },
      {
        subject:
          '설정(logo, banner, progressUI로 변경 할 수 있는지 확인 (setting)',
      },
      {
        subject: 'form label 정렬 기능',
      },
      {
        subject: 'vertical Layout 샘플',
      },
    ],
  },
]
</script>

<template>
  <div class="ev-screen vertical">
    <div class="ev-component" v-for="(todoTable, index) in todoTables">
      <div class="ev-toolbarlist">
        <el-collapse v-model="activeNames[index]" @change="handleChange">
          <el-collapse-item
            :title="todoTable.title"
            name="1"
            :disabled="disabledState[index]"
          >
            <template #title>
              <h6 class="ev-toolbar__title">{{ todoTable.title }}</h6>
              <div class="ev-toolbar__button-wrap">
                <div class="ev-button">
                  <el-button>Button</el-button>
                </div>
                <div class="ev-form-button" v-for="i in 5">
                  <el-button>FormButton</el-button>
                </div>
              </div>
            </template>

            <div class="ev-list">
              <el-table
                :data="todoTable.data"
                style="width: 100%"
                highlight-current-row
                size="small"
                :v-if="{ stripe: stripeState[i] }"
                border
              >
                <el-table-column
                  type="selection"
                  width="50"
                  align="center"
                  header-align="center"
                />
                <el-table-column
                  fixed
                  type="index"
                  label="No"
                  width="50"
                  align="center"
                  header-align="center"
                />
                <el-table-column
                  prop="subject"
                  label="Subject"
                  sortable
                  width=""
                />
                <el-table-column
                  prop="date"
                  label="Date"
                  sortable
                  width="150"
                  align="center"
                  header-align="center"
                />
              </el-table>
            </div>
          </el-collapse-item>
        </el-collapse>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* :deep(.el-table) {
  .cell {
    line-height: initial;
  }

  .el-table__cell {
    padding: initial;
  }
} */
</style>