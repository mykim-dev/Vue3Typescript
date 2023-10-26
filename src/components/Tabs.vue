<script lang="ts" setup>
</script>

<template>
  <div class="ev-screen default">
    <div class="ev-component is-full">
      <el-scrollbar class="ev-component-scrollbar">
        <div class="ev-tabs">
          <el-tabs :tab-position="'left'">
            <el-tab-pane label="Extention 배포">
              <el-form>Extention 배포</el-form>
            </el-tab-pane>
            <el-tab-pane label="Extention 테스트">
              <el-form>Extention 테스트</el-form>
            </el-tab-pane>
            <el-tab-pane label="Extention 배포">
              <el-form>Extention 배포</el-form>
            </el-tab-pane>
            <el-tab-pane label="Extention 테스트">
              <el-form>Extention 테스트</el-form>
            </el-tab-pane>
            <el-tab-pane label="Cals Application 배포">
              <el-form>Cals Application 배포</el-form>
            </el-tab-pane>
            <el-tab-pane label="Cals Application 테스트">
              <el-form>Cals Application 테스트</el-form>
            </el-tab-pane>
          </el-tabs>
        </div>
      </el-scrollbar>
    </div>
  </div>
</template>  

<style lang="scss" scoped>
.ev-tabs {
  border: 1px solid blue;
}

:deep(.el-tabs__item) {
  margin-bottom: 20px;
}

:deep(.el-tabs__content) {
  min-height: 100%;
  background: green;
}
</style>