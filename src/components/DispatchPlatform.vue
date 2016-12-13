<!-- 调度平台管理 -->
<template>
  <div id="dispatch-platform-node">
      <div>
        <div>
          <DispatchPlatformTitle TitleName="调度平台管理" ListData="DispatchPlatformListData">
          </DispatchPlatformTitle>
        </div>

        <el-tabs type="border-card" class="table-switch" >
          <el-tab-pane label="v2.v2.v2.tabletabletable">
            <DispatchListTable></DispatchListTable>
          </el-tab-pane>
          <el-tab-pane label="v2.v2.v2.tabletabletable">
            <DispatchListTable></DispatchListTable>
          </el-tab-pane>

        </el-tabs>

      </div>


  </div>
</template>
<script>
import DispatchPlatformTitle from './template/DispatchPlatform/DispatchPlatformTitle'
import DispatchListTable from './template/DispatchPlatform/DispatchListTable'

  export default {
    data () {
      return {
        schedule:'all.lv2',
        domain:'lxb.club',
        view:'默认',
        view_type:'default',

        DispatchPlatformListData:this.$store.state.DispatchPlatformListData,

      }
    },
    computed:{
      DispatchPlatformListData () {
        return this.$store.state.DispatchPlatformListData
      }
    },
    methods: {
      addCacheGroupHandle () {

      }
    },
    mounted () {
      this.$store.dispatch({
        type:'GET_DISPATCH_PLATFORM_DATA_AC',
        amount:{
          schedule:'all.lv2',
          domain:'lxb.club',
        }
      })
      this.$store.dispatch('GET_IP_NAME_DATA_AC')
      this.$store.dispatch('GET_REGION_NAME_DATA_AC')
      this.$store.dispatch('GET_CACHE_GROUP_NAME_DATA_AC')
    },
    components: {
      DispatchPlatformTitle,
      DispatchListTable
    }
  }

</script>
<style lang="scss">
  #dispatch-platform-node{
    @import "../assets/css/title";


    .table-switch{
      width: 100%;
    }

  }


</style>
