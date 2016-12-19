
<!-- 客户接入层管理 -->

<template>
  <div  id="custom-access-node">
    <div>
      <CustomerAccessTitle TitleName="客户接入层管理"></CustomerAccessTitle>
    </div>
    <div>
      <CustomerAccessTable :listData="CustomerAccessListData"></CustomerAccessTable>
    </div>
  </div>
</template>
<script>
import CustomerAccessTitle from './template/CustomerAccess/CustomerAccessTitle';
import CustomerAccessTable from './template/CustomerAccess/CustomerAccessTable';
  export default {
    data () {
      return {
        CustomerAccessListData:this.$store.state.CustomerAccessListData,
        pageTotal:0
      }
    },
    computed: {
      CustomerAccessListData () {
        return this.$store.state.CustomerAccessListData
      }
    },
    created () {
      this.$store.dispatch('GET_IP_NAME_DATA_AC')
      this.$store.dispatch('GET_SCHEDULE_LIST_DATA_AC')

    },
    methods: {

    },
    components: {
      CustomerAccessTitle,
      CustomerAccessTable
    },
    mounted () {
      this.$store.dispatch({
        type:'GET_CUSTOM_GROUP_DATA_AC',
        amount:{
          page:1
        }
      })
    }
  }

</script>
<style lang="scss">

  #custom-access-node{
    @import "../assets/css/main";


  }

</style>
