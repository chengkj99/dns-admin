<template>
  <div id="cache-list-table-node">
    <el-table
      :data="listData"
      border
      style="width: 100%">

      <el-table-column
        inline-template
        label="缓存组"
        width="280">
        <div>
          <el-icon name="group_name"></el-icon>
          <span>{{ row.group_name.name }}</span>
        </div>
      </el-table-column>

      <el-table-column
        inline-template
        label="状态"
        width="120">
        <div>
          <el-icon name="status"></el-icon>
          <template v-if="row.group_name.status=='enable'">
            <span class="font-success">在线</span>
          </template>
          <template v-else>
            <span class="font-warning">已下线</span>
          </template>
        </div>
      </el-table-column>

      <el-table-column
        inline-template
        label="ip"
        :context="_self"
        width="250">
        <div>
          <el-icon name="ip_info"></el-icon>
          <el-tag
            class="ip-group"
            v-for="(val,index) in row.ip_info"
            :closable="delStates==$index ? true :false"
            type="primary"
            :key="tag"
            :close-transition="false"
            @close="tagCloseHandle($index,index,row)"
          >
            {{val.ip}}
          </el-tag>

        </div>
      </el-table-column>

      <el-table-column
        inline-template
        label="备注"
        width="150">
        <span>无</span>
      </el-table-column>

      <el-table-column
        :context="_self"
        inline-template
        label="操作"
        width="400">
        <div>
          <el-button
            size="small"
            :context="_self"
            @click="addIPHandle($index, row)">
            添加IP
          </el-button>
          <el-button
            size="small"
            :context="_self"
            @click="delIPHandle($index, row)">
            删除IP
          </el-button>
          <el-button
            size="small"
            :context="_self"
            @click="handleReferenceQuery($index, row)">
            引用查询
          </el-button>
          <el-button
            size="small"
            :context="_self"
            @click="handleDeleteCacheGroup($index, row)">
            删除
          </el-button>
          <template v-if="row.group_name.status=='enable'">
            <el-button
              size="small"
              :context="_self"
              @click="handleOffline($index, row)">
              <template >下线</template>
            </el-button>
          </template>
          <template v-else>
            <el-button
              size="small"
              :context="_self"
              @click="handleOnline($index, row)">
              <template>上线</template>
            </el-button>
          </template>
        </div>
      </el-table-column>
    </el-table>

    <div class="block page">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="pageTotal">
      </el-pagination>
    </div>

    <!-- 添加IP -->
    <el-dialog title="添加IP" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item :disabled="true" label="缓存组名称" :label-width="formLabelWidth">
          <el-input v-model="form.groupName" :disabled="true"  auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item :disabled="true" label="IP" :label-width="formLabelWidth">
          <el-input v-model="form.IPS" placeholder="多个IP请用'；'分割" auto-complete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="saveIPHandle">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 引用查询 -->
    <el-dialog title="缓存组引用平台" v-model="dialogTableVisible">

      <el-table :data="CacheGroupCoverDataList">
        <el-table-column inline-template label="调度平台" width="200">
          <div>{{row.schedule_name}}.{{row.domain_name}}</div>
        </el-table-column>
        <el-table-column property="view" label="所属区域"></el-table-column>
      </el-table>
    </el-dialog>

  </div>
</template>

<script>
import ipsCheck from '../../../assets/js/ipsCheck.js'
  export default {
    props:['listData'],
    data() {
      return {
        currentPage1: 5,

        delStates:null,

        dialogFormVisible:false,
        dialogTableVisible:false,

        CacheGroupCoverDataList:this.$store.state.CacheGroupCoverDataList,

        form: {
          groupName: '',
          IPS: '',
        },

        formLabelWidth: '120px',

        pageTotal:0
      }
    },
    computed:{
      CacheGroupCoverDataList () {
        return this.$store.state.CacheGroupCoverDataList;
      },
      pageTotal () {
        return this.listData.length
      }
    },
    mounted () {

    },
    methods: {

      handleReferenceQuery(index, row) {
        //缓存组覆盖区域引用查询操作
        console.log(index, row);
        this.dialogTableVisible=true;
        this.$store.dispatch({
          type:'QUERY_CACHE_GROUP_COVER_AC',
          amount:{
            group_name:row.group_name.name
          }
        })
      },
      handleDeleteCacheGroup(index, row) {
        console.log(index, row);
        this.$store.dispatch({
          type:'DEL_CACHE_GROUP_AC',
          amount:{
            group_name:row.group_name.name
          }
        })
        .then(
          (res) => {
            this.$message({
              message:'删除成功！',
              type:'success'
            })
          },
          (res) => {
            this.$message.error(res.data.error)
          }
        )
      },
      handleOffline (index, row) {
        console.log(index, row);
        this.$store.dispatch({
          type:'OFFLINE_CACHE_GROUP_AC',
          amount:{
            group_name:row.group_name.name
          }
        })
        .then(
          (res) => {
            this.$message({
              message:'下线成功！',
              type:'success'
            })
          },
          (res) => {
            this.$message.error(res.data.error)
          }
        )
      },
      handleOnline (index, row) {
        console.log(index, row);
        this.$store.dispatch({
          type:'ONLINE_CACHE_GROUP_AC',
          amount:{
            group_name:row.group_name.name
          }
        })
        .then(
          (res) => {
            this.$message({
              message:'上线成功！',
              type:'success'
            })
          },
          (res) => {
            this.$message.error(res.data.error)
          }
        )
      },
      delIPHandle (index, row) {
        //删除预操作
        if(this.delStates==index){
          this.delStates=null;
        }else{
          this.delStates=index;
        }
      },
      addIPHandle (index, row) {
        this.delStates=null;
        this.form.groupName=row.group_name.name;
        if(this.dialogFormVisible==true){
          this.dialogFormVisible=false
        }else{
          this.dialogFormVisible=true
        }
      },
      saveIPHandle () {
        let IPS=this.form.IPS;

        this.$store.dispatch({
          type:'ADD_IP_AC',
          amount:{
            "group_name":this.form.groupName,
            "ips":ipsCheck(IPS)
          }
        })
        .then(
          (res) => {
            this.dialogFormVisible=false;
            this.$message({
              message:'恭喜你，添加成功！',
              type:'success'
            })
          },
          (res) => {
            this.$message.error(res.data.error)
          }

        )
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.$store.dispatch({
          type:'GET_CACHE_GROUP_DATA_AC',
          amount:{
            page:val
          }
        }).then( () => {

        })
        console.log(`当前页: ${val}`);
      },
      tagCloseHandle ($index,index,row) {
        let groupName=row.group_name.name;
        let ips=[row.ip_info[index].ip];
        this.$store.dispatch({
          type:'DEL_IP_AC',
          amount:{
            "group_name":groupName,
            "ips":ips
          }
        })
        .then(
          (res) => {
            this.$message({
              message: '删除成功！',
              type: 'success'
            })
          },
          (res) => {
            this.$message.error(res.data.error)
          }
        )
      },
    }

  }
</script>

<style lang="scss">
  #cache-list-table-node{

    .ip-group{

      margin:5px 10px 5px 0px;
      display:inline-block;

    }

    .page{
      position: relative;
      display: block;
      text-align: right;
      margin: 20px 0px 20px 0px;

    }

  }
</style>
