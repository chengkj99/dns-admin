<template>
  <div id="dialog-form-add">
    <el-dialog title="添加调度信息" v-model="DialogFormVisibleAddCopy">
      <el-form :model="form">
        <el-form-item label="调度平台"  :label-width="formLabelWidth">
          <el-input :disabled="true" v-model="form.scheduleName" :value="Schedule" placeholder="调度平台名称"></el-input>
        </el-form-item>
        <el-form-item label="域名" :label-width="formLabelWidth">
          <el-input :disabled="true" v-model="form.domainName" :value="Domain" placeholder="请选择域名"></el-input>
        </el-form-item>
        <!--<el-form-item label="域名" :label-width="formLabelWidth">-->
        <!--<el-select v-model="form.domainName"  placeholder="请选择域名">-->
        <!--<el-option :value="val.name" v-for ="val in DomainNameData">-->
        <!--&lt;!&ndash;{{val}}&ndash;&gt;-->
        <!--</el-option>-->
        <!--</el-select>-->
        <!--</el-form-item>-->
        <el-form-item label="区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择区域">
            <el-option :label="val" :value="val+'-view'"  mark="view" v-for ="val in RegionNameData.view"></el-option>
            <el-option :label="val" :value="val+'-big_view'"  mark="big_view" v-for ="val in RegionNameData.big_view"></el-option>
            <el-option :label="val" :value="val+'-isp'"  mark="isp" v-for ="val in RegionNameData.isp"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="缓存组" :label-width="formLabelWidth">
          <el-select v-model="form.cacheGroup"  placeholder="请选择缓存组">
            <el-option :value="val.group_name.name" v-for=" val in CacheGroupNameData"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="权重"  :label-width="formLabelWidth">
          <el-input v-model="form.weight" type="number" placeholder="权重"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelHandle">取 消</el-button>
        <el-button type="primary" @click="saveHandle">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
    export default{
        props:['DialogFormVisibleAdd','Schedule','Domain'],
        data(){
            return{
              RegionNameData:this.$store.state.RegionNameData,
              CacheGroupNameData:this.$store.CacheGroupNameData,
              form: {
                scheduleName: '',
                domainName: '',
                viewType:'',
                region:'',
                cacheGroup:'',
                weight:''
              },
              formLabelWidth: '120px',
              DialogFormVisibleAddCopy:false
            }
        },
        mounted () {
          this.form['scheduleName']=this.Schedule;
          this.form['domainName']=this.Domain;
        },
        watch: {
          DialogFormVisibleAddCopy (val , oldVal) {
            console.log(val,oldVal)
          }
        },
        computed:{
          //DomainNameData () {
            //return this.$store.state.DomainNameData
          //},
          DialogFormVisibleAddCopy () {
            return this.DialogFormVisibleAdd
          },
          RegionNameData () {
            return this.$store.state.RegionNameData
          },
          CacheGroupNameData () {
            return this.$store.state.CacheGroupNameData
          },
        },

        methods: {
          cancelHandle () {
            this.$emit('ModalChangeAdd')
          },
          saveHandle () {
            this.$store.dispatch({
              type:'ADD_DISPATCH_PLATFORM_AC',
              amount:{
               "schedule":this.form.scheduleName,
               "domain":this.form.domainName,
               "view":this.form.region.split('-')[0],
               "view_type":this.form.region.split('-')[1],
               "group_name":this.form.cacheGroup,
               "weight":this.form.weight
              }
            }).then(
              (res) => {
                this.$emit('ModalChangeAdd');
                this.$emit('ModalDataChange');
                this.$message({
                   message: '恭喜你，添加成功',
                   type: 'success'
                })
              },
              (res) => {
                this.$message.error(res.data.error)
              })
          }
        },
        components:{

        }
    }
</script>
<style lang="scss">
  #dialog-form-add{

    .el-dialog__wrapper{
    }

  }



</style>
