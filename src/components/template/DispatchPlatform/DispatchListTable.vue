<template>
  <div id="dispatch-platform-node">

    <div class="table-header">
      <h3>区域：全网默认
        <span @click="addCacheGroupHandle">
          <img src="../../../assets/add-record.svg">
        </span>
        <span>
          <img src="../../../assets/edit.svg">
        </span>
        <span>
          <img src="../../../assets/details.svg">
        </span>
      </h3>
    </div>
    <el-table
      :data="ListData"
      border
      style="width: 100%">
      <el-table-column
        inline-template
        label="运营商区域"
        >
        <div>
          <el-icon name="isp"></el-icon>
          <span style="margin-left: 10px">{{ row.isp }}</span>
        </div>
      </el-table-column>
      <el-table-column
        inline-template
        label="运营商区域"
        >
        <div>
          <el-icon name="isp"></el-icon>
          <span style="margin-left: 10px">{{ row.big_view_list }}</span>
        </div>
      </el-table-column>
      <!--<el-table-column-->
        <!--inline-template-->
        <!--label="大区"-->
        <!--&gt;-->
        <!--<el-popover trigger="hover" placement="top">-->
          <!--<p>姓名: {{ row.name }}</p>-->
          <!--<p>住址: {{ row.address }}</p>-->
          <!--<div slot="reference" class="name-wrapper">-->
            <!--<el-tag>{{ row.name }}</el-tag>-->
          <!--</div>-->
        <!--</el-popover>-->
      <!--</el-table-column>-->
    </el-table>



    <el-dialog title="添加调度信息" v-model="dialogFormVisible">
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
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveHandle">确 定</el-button>
      </div>
    </el-dialog>

  </div>

</template>

<script>
  export default {
    props:['ListData'],
    data() {
      return {
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
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      addCacheGroupHandle () {
          this.dialogFormVisible=true;
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

<style lang="scss">
  #dispatch-platform-node{
    .table-header{

      h3{
        display: block;
        position: relative;
        margin: 10px 0px;
        line-height: 50px;
        height: 50px;
        font-size: 1.23em;

        span{
          display: inline-block;

          img{
            display: inline-block;
            vertical-align: sub;
            width: 25px;
            height: auto;
            margin-left: 15px;


          }
        }
      }
    }


  }



</style>
