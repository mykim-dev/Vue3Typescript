<script lang="ts" setup>
  import { useAppStore } from '@/stores/appSetting'
  
  import EvLogo from '@/layout/evLogo.vue'
  import EvHeader from '@/layout/evHeader.vue'
  import EvAside from '@/layout/evAside.vue'
  import EvTags from '@/layout/evTags.vue'
  import EvPanelPopup from '@/layout/evPanelPopup.vue'
  import EvPanelRight from '@/layout/evPanelRight.vue'
  import EvPanelBottom from '@/layout/evPanelBottom.vue'
  
  const AppSetting = useAppStore()
  </script>
  
  <template>
    <div class="ev-layout" 
      :data-layout="AppSetting.appLayoutType"
      :data-collapse="AppSetting.menuCollapse" 
      :data-screen-expand="AppSetting.screenExpand">
      <EvLogo />
      <EvHeader />
      <EvAside />
      <EvTags />
      <main class="ev-main">
        <div class="ev-screen">
          <RouterView />
        </div>
      </main>
    </div>
    <EvPanelPopup :class="{ 'is-active': AppSetting.panelPopup }" />
    <EvPanelRight :class="{ 'is-active': AppSetting.panelRight }" />
    <EvPanelBottom :class="{ 'is-active': AppSetting.panelBottom }" />    
</template>

<style lang="scss" scoped></style>