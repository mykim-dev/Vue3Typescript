<script lang="ts" setup>
  import { useAppStore } from '@/stores/appSetting'
  import evLayout from '@/layout/evLayout.vue'
  
  const AppSetting = useAppStore()
  </script>
  
  <template>
    <div class="layout-wrap" v-if="AppSetting.appEditMode">
      <div>
        <evLayout />
      </div>
      <div>
        <setAppOption />
      </div>
    </div>
    <evLayout v-else />
</template>

<style lang="scss" scoped></style>