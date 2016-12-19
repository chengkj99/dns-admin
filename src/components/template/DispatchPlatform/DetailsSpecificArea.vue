<template>
  <!--DetailsSpecificArea.vue-->
  <div id="dialog-form-specific-area">
    <el-dialog :title="BigViewName+' 大区覆盖信息'" v-model="DialogFormVisibleSpecificAreaCopy">
      <div class="table-box">
        <table class="table">
          <thead>
          <tr>
            <th colspan="2">区域</th>
            <th>缓存组</th>
            <th>权重</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody v-for="( item , indexOut ) in SpecificAreaListData">
            <template v-for=" ( value, key, indexInter ) in item ">
              <template v-if="value.schedule_view_group">
                <tr v-for="(val,index) in value.schedule_view_group">
                  <td v-if="index==0" :rowspan="value.schedule_view_group.length">
                    {{item.view}}
                  </td>
                  <td class="self">自有</td>
                  <td>
                    {{val.group_name}}
                  </td>
                  <td>
                    <el-input type="number" v-model="selfWeight" :value="val.weight"></el-input>
                  </td>
                  <td class="button-box">
                    <button
                      :data-schedule-name="val.schedule_name"
                      :data-domain-name="val.domain_name"
                      :data-view="val.view"
                      :data-view-type="val.view_type"
                      :data-comment="val.comment"
                      :data-group-name="val.group_name"
                      @click="handleDelete"
                    >
                      删除
                    </button>
                    <template v-if="val.status=='enable'">
                      <button
                        :data-schedule-name="val.schedule_name"
                        :data-domain-name="val.domain_name"
                        :data-view="val.view"
                        :data-view-type="val.view_type"
                        :data-comment="val.comment"
                        :data-group-name="val.group_name"
                        @click="handleOffline"
                      >
                        下线
                      </button>
                    </template>
                    <template v-else>
                      <button
                        :data-schedule-name="val.schedule_name"
                        :data-domain-name="val.domain_name"
                        :data-view="val.view"
                        :data-view-type="val.view_type"
                        :data-comment="val.comment"
                        :data-group-name="val.group_name"
                        @click="handleOnline"
                      >
                        上线
                      </button>
                    </template>
                    <button
                      :data-schedule-name="val.schedule_name"
                      :data-domain-name="val.domain_name"
                      :data-view="val.view"
                      :data-comment="val.comment"
                      :data-group-name="val.group_name"
                      :data-weight="selfWeight"
                      @click="handleUpdateSelfWeight"
                    >
                      修改权重
                    </button>
                  </td>
                </tr>
              </template>
              <template v-if="value.borrowed_view_group">
                <tr v-for="(val,index) in value.borrowed_view_group">
                  <td v-if="index==0"  :rowspan="value.borrowed_view_group.length">
                    {{item.view}}
                  </td>
                  <td class="borrow">{{value.big_view}}（借用）</td>
                  <td>
                    {{val.group_name}}
                  </td>
                  <td v-if="index==0" :rowspan="value.borrowed_view_group.length">
                    <!--<el-input type="number" v-model="borrowedWeight" :value="val.weight"></el-input>-->
                    <el-input type="number" v-model="borrowedWeight" :value="value.big_view_sum"></el-input>
                  </td>
                  <td class="button-box" v-if="index==0" :rowspan="value.borrowed_view_group.length">

                    <button
                      :data-schedule-name="val.schedule_name"
                      :data-domain-name="val.domain_name"
                      :data-view="val.view"
                      :data-view-type="val.view_type"
                      :data-comment="val.comment"
                      :data-group-name="val.group_name"
                      @click="handleDelete"
                    >
                      删除
                    </button>

                    <button
                    :data-schedule-name="val.schedule_name"
                    :data-domain-name="val.domain_name"
                    :data-view="val.view"
                    :data-comment="val.comment"
                    :data-weight="borrowedWeight"
                    @click="handleUpdateBorrowWeight"
                    >
                      修改权重
                    </button>

                  </td>
                </tr>
              </template>
              <tr>
                <!--<td rowspan="value.view_detail.borrowed_view_group.length+value.view_detail.schedule_view_group.length">-->
                  <!--{{ value.view }}-->
                <!--</td>-->
                <!--<template v-if="val.borrowed_view_group">-->
                  <!---->
                <!--</template>-->
                <!--<td rowspan="val.schedule_view_group.length">-->
                  <!--自有-->
                <!--</td>-->
                <!--<td rowspan="val.borrowed_view_group.length">-->
                    <!--{{val.big_view}}-->
                <!--</td>-->
                <!--<td v-for="v in val.schedule_view_group">-->
                  <!--{{ v.view_detail.group_name}}-->
                <!--</td>-->
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelHandle">取 消</el-button>
        <el-button type="primary" @click="confirmHandle">确 定</el-button>
      </div>

    </el-dialog>

  </div>
</template>

<script>
    export default{
      props:['DialogFormVisibleSpecificArea','FormData','BigViewName'],
      data(){
        return{
          DialogFormVisibleSpecificAreaCopy:false,
          form: {
            name:'',
            region:'',
          },
          requestForm:{
            schedule:'',
            domain:'',
            view:'',
            view_type:'',
            group_name:'',
            comment:''
          },

          selfWeight:0,
          borrowedWeight:0,

          formLabelWidth: '120px',
          SpecificAreaListData:null,

        }
      },
      components:{

      },
      computed:{
        DialogFormVisibleSpecificAreaCopy () {
          return this.DialogFormVisibleSpecificArea
        },
      },
      beforeCreate () {
        console.log('beforeCreate')

      },
      created () {
        this.getScheduleDomainView()
        console.log('created')
      },
      beforeMount () {

              console.log('beforeMount')

      },
      mounted () {
              console.log('mounted')

      },
      methods:{
        cancelHandle () {
          this.$emit('ModalChangeSpecificArea')
        },
        confirmHandle () {
          this.$emit('ModalChangeSpecificArea')
        },
        getScheduleDomainView () {
          this.$store.dispatch({
            type:'GET_SCHEDULE_DOMAIN_VIEW_AC',
            amount:this.FormData
          })
          .then(
            (res) => {
              if(res.data.code==200){
                this.SpecificAreaListData=res.data.data;
                console.log('ListData:',res.data)
              }
            }
          )
        },
        handleOffline (e) {
        console.log('下线')
          let dataSet=e.target.dataset;
          let requestForm={
            schedule:dataSet.scheduleName,
            domain:dataSet.domainName,
            view:dataSet.view,
            view_type:dataSet.viewType,
            group_name:dataSet.groupName,
            comment:'none'
          }
          console.log(requestForm)
          this.$store.dispatch({
            type:'OFFLINE_SCHEDULE_GROUP_AC',
            amount:requestForm
          })
          .then(
            (res) => {
              this.$message({
                message:'下线成功！',
                type:'success'
              })
              this.getScheduleDomainView()
            },
            (res) => {
              this.$message.error(res.data.error)
            }
          )
        },

        handleOnline (e) {
          let dataSet=e.target.dataset;
          let requestForm={
            schedule:dataSet.scheduleName,
            domain:dataSet.domainName,
            view:dataSet.view,
            view_type:dataSet.viewType,
            group_name:dataSet.groupName,
            comment:'none'
          }
          this.$store.dispatch({
            type:'ONLINE_SCHEDULE_GROUP_AC',
            amount:requestForm
          })
          .then(
            (res) => {
              this.$message({
                message:'上线成功！',
                type:'success'
              })
              this.getScheduleDomainView()
            },
            (res) => {
              this.$message.error(res.data.error)
            }
          )
        },
        handleDelete(e) {
          let dataSet=e.target.dataset;
          let requestForm={
            schedule:dataSet.scheduleName,
            domain:dataSet.domainName,
            view:dataSet.view,
            view_type:dataSet.viewType,
            group_name:dataSet.groupName,
            comment:'none'
          }
          this.$store.dispatch({
            type:'DEL_SCHEDULE_GROUP_AC',
            amount:requestForm
          })
          .then(
            (res) => {
              this.$message({
                message:'删除成功！',
                type:'success'
              })
              this.getScheduleDomainView()
            },
            (res) => {
              this.$message.error(res.data.error)
            }
          )
        },
         handleUpdateSelfWeight(e) {
          let dataSet=e.target.dataset;
          let requestForm={
            schedule:dataSet.scheduleName,
            domain:dataSet.domainName,
            view:dataSet.view,
            group_name:dataSet.groupName,
            weight:Number(dataSet.weight),
            comment:'none'
          }
          this.$store.dispatch({
            type:'UPDATE_SCHEDULE_GROUP_SELF_WEIGHT_AC',
            amount:requestForm
          })
          .then(
            (res) => {
              this.$message({
                message:'修改成功！',
                type:'success'
              })
              this.getScheduleDomainView()
            },
            (res) => {
              this.$message.error(res.data.error)
            }
          )
        },
        handleUpdateBorrowWeight(e) {
          let dataSet=e.target.dataset;
          let requestForm={
            schedule:dataSet.scheduleName,
            domain:dataSet.domainName,
            view:dataSet.view,
            weight:Number(dataSet.weight),
            comment:'none'
          }
          this.$store.dispatch({
            type:'UPDATE_SCHEDULE_GROUP_BORROW_WEIGHT_AC',
            amount:requestForm
          })
          .then(
            (res) => {
              this.$message({
                message:'修改成功！',
                type:'success'
              })
              this.getScheduleDomainView()
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

  #dialog-form-specific-area{

    .el-dialog--small {
      width: 75%;
    }

    .table-box{

      table{

        td{

          &.borrow{
            color:#eea236;
          }
          &.self{
            color: #23d160;
          }
        }
      }

      .button-box{
        >button{
          padding: 5px 8px;
          cursor:pointer ;
        }
      }
    }

  }
</style>
