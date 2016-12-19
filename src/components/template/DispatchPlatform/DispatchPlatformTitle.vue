<template>
    <div id="title-node">
        <h2>
          {{TitleName}}
          <span>
            <img @click="addCacheGroupHandle" src="../../../assets/add.svg">
          </span>
        </h2>

      <!-- 添加调度平台信息-->
      <el-dialog title="添加调度平台域名信息" v-model="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="调度平台"  :label-width="formLabelWidth">
            <el-input v-model="form.scheduleName" placeholder="调度平台名称"></el-input>
          </el-form-item>
          <el-form-item label="域名" :label-width="formLabelWidth">
            <el-select v-model="form.domainName"  placeholder="请选择域名">
              <el-option :value="val.name" v-for ="val in DomainNameData">
                <!--{{val}}-->
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
    h2 {
      span{
        cursor: pointer;
        img{
          cursor: inherit;
        }
      }
    }

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
            domainName:'',

            DomainNameData:this.$store.state.DomainNameData
          },

          formLabelWidth: '120px'
        }
      },
      computed:{
        DomainNameData () {
          return this.$store.state.DomainNameData
        }
      },
      methods:{
        addCacheGroupHandle () {
          this.dialogFormVisible=true;
        },

        saveHandle () {

          this.$store.dispatch({
            type:'ADD_SCHEDULE_LIST_AC',
            amount:{
             "schedule":this.form.scheduleName,
             "domain":this.form.domainName,
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
