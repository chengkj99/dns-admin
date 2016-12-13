<template>
    <div id="title-node">
        <h2>
          {{TitleName}}
          <span>
            <img @click="addCacheGroupHandle" src="../../../assets/add.svg">
          </span>
        </h2>



      <!-- 添加调度平台信息-->

    </div>
</template>

<style lang="scss">
  #title-node{
    @import "../../../assets/css/title";

  }
</style>

<script>
import ipsCheck from '../../../assets/js/ipsCheck.js'

    export default{
      props:['TitleName'],
      data(){
        return{
          dialogFormVisible:false,

          form: {
            scheduleName: '',
            domainName: '',
            viewType:'',
            region:'',
            cacheGroup:'',
            weight:''
          },
          DomainNameData:this.$store.state.DomainNameData,
          RegionNameData:this.$store.state.RegionNameData,
          CacheGroupNameData:this.$store.CacheGroupNameData,
          formLabelWidth: '120px'
          }
      },
      computed:{
        DomainNameData () {
          return this.$store.state.DomainNameData
        },
        RegionNameData () {
          return this.$store.state.RegionNameData
        },
        CacheGroupNameData () {
          return this.$store.state.CacheGroupNameData
        }
      },
      methods:{
        addCacheGroupHandle () {
          this.dialogFormVisible=true;
        },
        getViewType (val) {
          console.log('val',val)
          this.viewType=val;
        },
        saveHandle () {

          this.$store.dispatch({
            type:'ADD_DISPATCH_PLATFORM_AC',
            amount:{
             "schedule_name":this.form.scheduleName,
             "domain":this.form.domainName,
             "view":this.form.region.split('-')[0],
             "view_type":this.form.region.split('-')[1],
             "group_name":this.form.cacheGroup,
             "weight":this.form.weight
            }
          }).then( (res) => {
            this.dialogFormVisible=false;
            this.$message({
               message: '恭喜你，添加成功',
               type: 'success'
            });
          },(res) => {
            this.$message.error(res.data.error);
          })
        }
      }
    }
</script>
