<template>
  <div id="title-node">
    <h2>
      {{TitleName}}
      <span>
        <img @click="addCustomerAccessHandle" src="../../../assets/add.svg">
      </span>
    </h2>

    <!--新建客户接入-->
    <el-dialog title="新建接入" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="名称"   :label-width="formLabelWidth">
          <el-input v-model="form.joint" placeholder="名称"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="zone"  :label-width="formLabelWidth">
          <el-select v-model="form.jointDomain" placeholder="zone">
              <el-option
                v-for=" (item, index) in DomainNameData"
                :value="item.name"
              >
              </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :disabled="true" label="区域"   :label-width="formLabelWidth">
          <el-input :disabled="true" value="默认" placeholder="区域"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="记录值"  :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="记录值">
            <el-option
              v-for=" (item, index) in ScheduleListData"
              :value="item.name+'-'+item.domain_name"
              :label="item.name+'.'+item.domain_name"
            >
            </el-option>
          </el-select>
        </el-form-item>

      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveHandle">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<style lang="scss">
  #title-node{
    @import "../../../assets/css/main";

  }
</style>

<script>

    export default{
      props:['TitleName'],
      data(){
        return{
          dialogFormVisible:false,

          form: {
            joint: '',
            jointDomain: '',
            region:''
          },
          formLabelWidth: '120px',
          DomainNameData:this.$store.state.DomainNameData,
          ScheduleListData:this.$store.state.ScheduleListData
        }
      },
      computed: {
        DomainNameData () {
          return this.$store.state.DomainNameData
        },
        ScheduleListData () {
          return this.$store.state.ScheduleListData
        }
      },
      created () {

      },
      methods:{
        addCustomerAccessHandle () {
          this.dialogFormVisible=true;
        },
        saveHandle () {

          this.$store.dispatch({
            type:'ADD_CUSTOM_GROUP_DATA_AC',
            amount:{
              joint:this.form.joint,
              joint_domain:this.form.jointDomain,
              schedule:this.form.region.split('-')[0],
              schedule_domain:this.form.region.split('-')[1]

            }
          }).then( (res) => {
            this.dialogFormVisible=false;
            this.$message({
               message: '恭喜你，添加成功',
               type: 'success'
            });
            this.$store.dispatch({
              type:'GET_CUSTOM_GROUP_DATA_AC',
              amount:{
                page:1
              }
            })

          },(res) => {
            this.$message.error(res.data.error);
          })
        }
      }
    }
</script>
