<script lang="ts" setup>
import { useAppStore } from '@/stores/appSetting'
import { ref } from 'vue'
import FormItem from '@/components/evFormItem.vue'
import ListItem from '@/components/evListItem.vue'

const AppSetting = useAppStore()
const input = ref('test')
</script>

<template>
  <el-row class="ev-screen-row" :gutter="16">
    <el-col class="ev-screen-col" :span="24">
      <div class="ev-component" :class="{ 'is-folder': AppSetting.componentType == 'folder' }">
        <div class="ev-form">
          <!-- <el-form class="el-row" label-width="100px" :gutter="16">
            <el-form-item label="text default" :rules="[
                {
                  required: true,
                  message: 'Please enter a required value',
                  trigger: 'blur',
                }]" class="el-col-6 ev-text">
              <el-input v-model="input" placeholder="Please input" :required="true" />
            </el-form-item>
            <fieldset>
              <legend>fieldset</legend>
              <el-form-item label="text readonly" class="el-col-6 ev-text">
                <el-input v-model="input" placeholder="Please input" readonly />
              </el-form-item>
              <el-form-item label="text disabled" class="el-col-6 ev-text">
                <el-input v-model="input" placeholder="Please input" disabled />
              </el-form-item>
              <el-form-item label="text hidden" class="el-col-6 ev-text" style="display: none;">
                <el-input type="hidden" v-model="input" placeholder="Please input" />
              </el-form-item>
            </fieldset>
          </el-form> -->
          <el-form label-width="100px" :gutter="16" style="border: 1px solid red;">
            <div class="el-row">
              <div class="el-col-6">
                <el-form-item label="text default" :rules="[
                    {
                      required: true,
                      message: 'Please enter a required value',
                      trigger: 'blur',
                    }]" class="ev-text">
                  <el-input v-model="input" placeholder="Please input" :required="true" />
                </el-form-item>
              </div>
              <el-form-item label="text readonly" class="el-col-6 ev-text">
                <el-input v-model="input" placeholder="Please input" readonly />
              </el-form-item>
              <el-form-item label="text disabled" class="el-col-6 ev-text">
                <el-input v-model="input" placeholder="Please input" disabled />
              </el-form-item>
              <el-form-item label="text hidden" class="el-col-6 ev-text" style="display: none;">
                <el-input type="hidden" v-model="input" placeholder="Please input" />
              </el-form-item>
            </div>
          </el-form>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
