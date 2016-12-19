<template>
  <div id="cache-list-table-node">
    <el-table
      :data="listData"
      border
      style="width: 100%">

      <el-table-column
        inline-template
        label="名称"
        width="250">
        <div>
          <el-icon name="joint_name"></el-icon>
          <span>{{ row.joint_name }}</span>
        </div>
      </el-table-column>

      <el-table-column
        inline-template
        label="zone"
        width="200">
        <div>
          <span style="margin-left: 10px">{{ row.joint_domain }}</span>
        </div>
      </el-table-column>

      <el-table-column
        inline-template
        label="在线状态"
        width="150">
        <div>
          <el-icon name="status"></el-icon>
          <template v-if="row.status=='enable'">
            <span class="font-success">上线中</span>
          </template>
          <template v-else>
            <span class="font-warning">已下线</span>
          </template>
        </div>
      </el-table-column>

      <el-table-column
        inline-template
        label="使用平台"
        width="300">
        <span>{{row.schedule_name}}.{{row.schedule_domain}}</span>
      </el-table-column>

      <el-table-column
        inline-template
        label="备注"
        width="100">
        <span>无</span>
      </el-table-column>

      <el-table-column
        :context="_self"
        inline-template
        label="操作"
        width="200">
        <div>
          <template v-if="row.status=='enable'">
            <el-button
              size="small"
              :context="_self"
              @click="handleOffline($index, row)"
            >
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

          <el-button
            size="small"
            :context="_self"
            @click="handleDeleteCustomGroup($index, row)">
            删除
          </el-button>

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
        pageTotal:0,
        form: {
          groupName: '',
          IPS: '',
        },

        formLabelWidth: '120px',
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
    created () {

    },
    mounted () {

    },
    methods: {

      handleDeleteCustomGroup(index, row) {
        console.log(index, row);
        this.$store.dispatch({
          type:'DEL_CUSTOM_GROUP_DATA_AC',
          amount:{
            "joint":row.joint_name,
            "joint_domain":row.joint_domain,
            "schedule":row.schedule_name,
            "schedule_domain":row.schedule_domain
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
          type:'UPDATE_CUSTOM_GROUP_DATA_AC',
          amount:{
            "joint":row.joint_name,
            "joint_domain":row.joint_domain,
            "schedule":row.schedule_name,
            "schedule_domain":row.schedule_domain,
            "status":"disable"
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
          type:'UPDATE_CUSTOM_GROUP_DATA_AC',
          amount:{
            "joint":row.joint_name,
            "joint_domain":row.joint_domain,
            "schedule":row.schedule_name,
            "schedule_domain":row.schedule_domain,
            "status":"enable"
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
