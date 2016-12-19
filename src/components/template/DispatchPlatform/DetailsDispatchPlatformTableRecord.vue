<template>
  <div id="dialog-form-details">
    <el-dialog title="调度覆盖信息" v-model="DialogFormVisibleDetailsCopy">
      <div class="table-box">
        <table class="table">
          <thead>
          <tr>
            <th>区域</th>
            <th>缓存组</th>
            <th>权重</th>
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
                <td v-if="v.weight>=0">
                  {{v.weight}}
                </td>
                <td v-else>
                  无
                </td>
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
      props:['DialogFormVisibleDetails','FormData'],
      data(){
        return{
          DialogFormVisibleDetailsCopy:false,
          form: {
            name:'',
            region:'',
          },
          formLabelWidth: '120px',
          ScheduleListDataDetails:null,



        }
      },
      components:{

      },
      computed:{
        DialogFormVisibleDetailsCopy () {
          return this.DialogFormVisibleDetails
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
        cancelHandle () {
          this.$emit('ModalChangeDetails')
        },
        confirmHandle () {
          this.$emit('ModalChangeDetails')
        }
      }
    }
</script>
<style lang="scss">

  #dialog-form-details{
    @extend .table-box;
      .table-box{
        th{
          width: 33.33%;
        }
      }

  }
</style>
