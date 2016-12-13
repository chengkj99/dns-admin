<template>
    <div id="title-node">
        <h2>
          {{TitleName}}
          <span>
            <img @click="addCacheGroupHandle" src="../../../assets/add.svg">
          </span>
        </h2>



      <!-- 添加缓存组-->
      <el-dialog title="添加缓存组" v-model="dialogFormVisible">
        <el-form :model="form">
          <el-form-item :disabled="true" label="缓存组名称"   :label-width="formLabelWidth">
            <el-input v-model="form.groupName" placeholder="缓存组名称"  auto-complete="off"></el-input>
          </el-form-item>
          <el-form-item :disabled="true" label="IP" :label-width="formLabelWidth">
            <el-input v-model="form.IPS" placeholder="多个IP请用'；'分割" auto-complete="off"></el-input>
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
            groupName: '',
            IPS: '',
          },
          formLabelWidth: '120px'
          }
      },
      methods:{
        addCacheGroupHandle () {
          this.dialogFormVisible=true;
        },
        saveHandle () {

          this.$store.dispatch({
            type:'ADD_CACHE_GROUP_AC',
            amount:{
             "group_name":this.form.groupName,
             "ips":ipsCheck(this.form.IPS)
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
