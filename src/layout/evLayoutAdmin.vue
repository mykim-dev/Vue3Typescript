<script lang="ts" setup>
import { ChromeFilled } from '@element-plus/icons-vue'
  // import { useAppStore } from '@/stores/appSetting'
  
  // import EvLogo from '@/layout/evLogo.vue'
  // import EvHeader from '@/layout/evHeader.vue'
  // import EvAside from '@/layout/evAside.vue'
  // import EvTags from '@/layout/evTags.vue'
  // import EvPanelPopup from '@/layout/evPanelPopup.vue'
  // import EvPanelRight from '@/layout/evPanelRight.vue'
  // import EvPanelBottom from '@/layout/evPanelBottom.vue'
  
  // const AppSetting = useAppStore()
  </script>
  
  <template>
    <div class="ev-layout-admin">
      <div>
        <div class="ev-header-navigation__icon">
          <RouterLink :to="'/AppHome'">
            <el-button :icon="ChromeFilled" />
          </RouterLink>
        </div>
      </div> 
      <div>left</div>
      <div><RouterView /></div>
      <div>right</div>
    </div>
</template>

<style lang="scss" scoped></style>