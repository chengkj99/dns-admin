<template>
  <div id="dialog-form-update">
    <el-dialog title="调度覆盖信息" v-model="DialogFormVisibleUpdateCopy">
      <div class="table-box">
        <table class="table">
          <thead>
          <tr>
            <th>区域</th>
            <th>缓存组</th>
            <!--<th>权重</th>-->
            <th>备注</th>
            <th>操作</th>
          </tr>
          </thead>
          <tbody v-for="(val, key, index) in ScheduleListDataDetails">
          <template v-if="val!=null" v-for=" (v,i) in val">
            <tr>
              <td v-if="i==0" :rowspan="val.length">
                <template v-if="v.view">
                  {{v.view }}
                </template>
                <template v-if="v.big_view">
                  {{v.big_view }}
                </template>
              </td>
              <td>
                {{v.group_name }}
              </td>
              <!--<td>-->
                <!--<el-input type="number" disabled="true" v-model="form.weight" :value="v.weight"></el-input>-->
              <!--</td>-->
              <td>
                <el-input type="text" v-model="form.comment" :value="v.comment" placeholder="添加备注信息" ></el-input>
              </td>
              <td class="button-box">
                <template>
                <!--<template v-if="v.view">-->
                  <!--<button-->
                    <!--:data-schedule="v.schedule_name"-->
                    <!--:data-domain="v.domain_name"-->
                    <!--:data-view="v.view"-->
                    <!--:data-group-name="v.group_name"-->
                    <!--@click="updateHandle">-->
                    <!--提交修改-->
                  <!--</button>-->
                  <!--<button @click="onlineHandle">-->
                    <!--<template v-if="v.status=='enable'">下线</template>-->
                    <!--<template v-else>上线</template>-->
                  <!--</button>-->
                  <button
                    :data-schedule="v.schedule_name"
                    :data-domain="v.domain_name"
                    :data-view="v.big_view"
                    data-view-type="big_view"
                    :data-group-name="v.group_name"
                    @click="delHandle">
                    删除
                  </button>
                </template>
                <!--<template v-if="v.big_view">-->
                  <!--<button-->
                    <!--:data-schedule="v.schedule_name"-->
                    <!--:data-domain="v.domain_name"-->
                    <!--:data-big-view="v.big_view"-->
                    <!--:data-group-name="v.group_name"-->
                    <!--@click="updateHandle">提交修改</button>-->
                  <!--<button @click="onlineHandle">-->
                    <!--<template v-if="v.status=='enable'">下线</template>-->
                    <!--<template v-else>上线</template>-->
                  <!--</button>-->
                  <!--<button @click="delHandle">删除</button>-->
                <!--</template>-->

              </td>
            </tr>
          </template>
          </tbody>
        </table>
        <!--<table  v-else class="table">-->
          <!--<thead>-->
          <!--<tr>-->
            <!--<th>运营商区域</th>-->
            <!--<th>大区</th>-->
          <!--</tr>-->
          <!--</thead>-->
          <!--<tbody>-->
          <!--<tr>-->
            <!--<td colspan="2"-->
                <!--style="height:80px;line-height:80px;text-align:center"-->
            <!--&gt;-->
              <!--暂无数据-->
            <!--</td>-->
          <!--</tr>-->
          <!--</tbody>-->
        <!--</table>-->


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
      props:['DialogFormVisibleUpdate','FormData'],
      data(){
        return{
          DialogFormVisibleUpdateCopy:false,
          form: {
           // weight:'',
            comment:'none',
            schedule:'',
            domain:'',
            view:'',
            group_name:'',
            view_type:''
          },
          formLabelWidth: '120px',
          ScheduleListDataDetails:null,
        }
      },
      components:{

      },
      computed:{
        DialogFormVisibleUpdateCopy () {
          return this.DialogFormVisibleUpdate
        },
      },
      beforeCreate () {
        console.log('beforeCreate')

      },
      created () {
        this.$store.dispatch({
          type:'GET_SCHEDULE_LIST_DETAILS_DATA_AC',
          amount:this.FormData
        })
        .then(
          (res) => {
            if(res.data.code==200){
              this.ScheduleListDataDetails=res.data.data;
              console.log('this.ScheduleListDataDetails:',this.ScheduleListDataDetails)
            }
          }
        )
        console.log('created')
      },
      beforeMount () {
              console.log('beforeMount')
      },
      mounted () {
              console.log('mounted')
      },
      methods:{

        updateHandle (e) {

          var dataSet=e.target.dataset;
          this.form.schedule=dataSet.schedule
          this.form.domain=dataSet.domain
          this.form.domain=dataSet.domain
          this.form.group_name=dataSet.groupName
          this.form.view=dataSet.view
          this.form.bigView=dataSet.bigView
          console.log(this.form)
          this.$store.dispatch({
            type:'UPDATE_SCHEDULE_WEIGHT_AC',
            amount:this.form
          })
          .then(
            (res) => {
              console.log(res)
              this.$message({
                 message: '恭喜你，添加成功',
                 type: 'success'
              })
              this.$emit('ModalChangeUpdate')
            },
            () => {
              this.$message.error(res.data.error)
            }
          )
        },
        onlineHandle () {

        },
        delHandle (e) {
          var dataSet=e.target.dataset;
          this.form.schedule=dataSet.schedule
          this.form.domain=dataSet.domain
          this.form.domain=dataSet.domain
          this.form.group_name=dataSet.groupName
          this.form.view=dataSet.view
          this.form.view_type=dataSet.viewType
          console.log(this.form)
          this.$store.dispatch({
            type:'DEL_SCHEDULE_WEIGHT_AC',
            amount:this.form
          })
          .then(
            (res) => {
              console.log(res)
              this.$message({
                 message: '恭喜你，添加成功',
                 type: 'success'
              })
              this.$emit('ModalChangeUpdate')
            },
            (res) => {
              this.$message.error(res.data.error)
            }
          )
        },

        cancelHandle () {
          this.$emit('ModalChangeUpdate')
        },
        confirmHandle () {
        console.log('this.form.weight::',this.form.weight)
          this.$emit('ModalChangeUpdate')
        }
      }
    }
</script>
<style lang="scss">

  #dialog-form-update{

    .table-box{
      th:nth-child(2),td:nth-child(2){
        width: 18%;
      }

      .button-box{
        >button{
          padding: 5px 8px;
          cursor:pointer ;
        }
      }
    }

    .el-dialog--small{
      width: 70%;
    }

  }
</style>
