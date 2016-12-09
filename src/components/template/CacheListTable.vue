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
          <span style="margin-left: 10px">{{ row.group_name.status }}</span>
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
            :closable="delStates"
            :type="primary"
            :key="tag"
            :close-transition="false"
            @close="handleClose(tag)"
          >
            {{val.ip}} --{{$index}}
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
            @click="handleEdit($index, row)">
            详情
          </el-button>
          <el-button
            size="small"
            :context="_self"
            @click="handleEdit($index, row)">
            编辑
          </el-button>
          <el-button
            size="small"
            type="danger"
            :context="_self"
            @click="handleDelete($index, row)">
            删除
          </el-button>
          <el-button
            size="small"
            :context="_self"
            @click="handleDelete($index, row)">
            <template v-if="row.group_name.status=='enable'">下线</template>
            <template v-else>上线</template>
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
  export default {
    props:['listData','pageTotal'],
    data() {
      return {
        currentPage1: 5,

        delStates:false
      }
    },
    mounted () {
      console.log('uuu',this.listData)
    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      delIPHandle () {
        //console.log(index, row);
        this.delStates=true
      },
      addIPHandle () {
       // console.log(index, row);
        this.delStates=false
      },

      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentPage = val;
        this.$store.dispatch({
          type:'GET_CACHE_GROUP_DATA_AC',
          amount:val
        }).then( () => {

        })
        console.log(`当前页: ${val}`);
      }
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
