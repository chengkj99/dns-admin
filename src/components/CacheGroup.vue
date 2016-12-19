
<!-- 缓存组管理 -->

<template>
  <div>
    <div>
      <CacheGroupTitle TitleName="缓存组管理"></CacheGroupTitle>
    </div>
    <div>
      <CacheListTable :listData="CacheGroupListData"></CacheListTable>
    </div>
  </div>
</template>
<script>
import CacheGroupTitle from './template/CacheGroup/CacheGroupTitle';
import CacheListTable from './template/CacheGroup/CacheListTable';
  export default {
    data () {
      return {
        CacheGroupListData:this.$store.state.CacheGroupListData.data,
        pageTotal:0
      }
    },
    computed: {
      CacheGroupListData () {
        return this.$store.state.CacheGroupListData.data
      }
    },
    methods: {

    },
    components: {
      CacheGroupTitle,
      CacheListTable
    },
    mounted () {
      this.$store.dispatch({
        type:'GET_CACHE_GROUP_DATA_AC',
        amount:{
          page:1
        }
      })
    }
  }

</script>
<style lang="scss">
  @import "../assets/css/main";

</style>
