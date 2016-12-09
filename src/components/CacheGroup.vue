
<!-- 缓存组管理 -->

<template>
  <div>
    <div>
      <TitleTpl TitleName="缓存组管理"></TitleTpl>
    </div>
    <div>
      <CacheListTable :listData="CacheGroupListData" :pageTotal="pageTotal"></CacheListTable>
    </div>
  </div>
</template>
<script>
import TitleTpl from './template/TitleTpl';
import CacheListTable from './template/CacheListTable';
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
      TitleTpl,
      CacheListTable
    },
    mounted () {
      this.$store.dispatch({
        type:'GET_CACHE_GROUP_DATA_AC',
        amount:1
      }).then((res) => {
         this.pageTotal=res.data.data.length;
      })
    }
  }

</script>
<style lang="scss">

</style>
