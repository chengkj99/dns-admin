<!-- 调度平台管理 -->
<template>
  <div id="dispatch-platform-node">
      <div>
        <div>
          <DispatchPlatformTitle TitleName="调度平台管理"></DispatchPlatformTitle>
        </div>
        <template v-if="componentStart" v-for="val in ScheduleListData">
          <el-tabs type="border-card" class="table-switch" >
            <el-tab-pane name="1" :label="val.name+'.'+val.domain_name">
              <DispatchListTable
                :Schedule="val.name"
                :Domain="val.domain_name">
              </DispatchListTable>
            </el-tab-pane>
          </el-tabs>
        </template>
      </div>
  </div>
</template>
<script>
import DispatchPlatformTitle from './template/DispatchPlatform/DispatchPlatformTitle'
import DispatchListTable from './template/DispatchPlatform/DispatchListTable'

  export default {
    data () {
      return {
        componentStart:false,
        //调度域名列表
        ScheduleListData:this.$store.state.ScheduleListData,
      }
    },
    computed:{
      ScheduleListData () {
        return this.$store.state.ScheduleListData
      },
    },
    beforeCreate () {
      this.$store.dispatch('GET_SCHEDULE_LIST_DATA_AC').then(
        () => {
          this.componentStart=true
        }
      )
    },
    mounted () {
      this.$store.dispatch('GET_IP_NAME_DATA_AC')
      this.$store.dispatch('GET_REGION_NAME_DATA_AC')
      this.$store.dispatch('GET_CACHE_GROUP_NAME_DATA_AC')
    },
    methods: {

    },
    components: {
      DispatchPlatformTitle,
      DispatchListTable
    }
  }

</script>
<style lang="scss">
  #dispatch-platform-node{
    @import "../assets/css/main";


    .table-switch{
      width: 100%;
      margin-bottom: 40px;

      .el-tabs__item{
        min-width: 300px;
        font-size: 18px;
      }
    }

  }


</style>
