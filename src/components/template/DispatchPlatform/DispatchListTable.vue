<template>
  <div id="dispatch-platform-node">

    <div class="table-header">
      <h3>区域：全网默认
        <span>
          <img
            @click="addCacheGroupHandle"
            src="../../../assets/add-record.svg">
        </span>
        <span>
          <img
            data-view-type="default"
            data-view="默认"
            @click="updateDispatchPlatformHandle"
            src="../../../assets/edit.svg">
        </span>
        <span>
          <img
            data-view-type="default"
            data-view="默认"
            @click="detailsDispatchPlatformHandle"
            src="../../../assets/details.svg">
        </span>
      </h3>
    </div>
    <div class="table-box">
      <table class="table">
        <thead>
        <tr>
          <th>运营商区域</th>
          <th>大区</th>
        </tr>
        </thead>
        <tbody v-for=" val in ListData">

        <template v-if="val.isp=='移动'">
          <tr v-if="val.isp=='移动'" v-for="(v,index) in val.big_view_list">
            <td :rowspan="val.big_view_list.length" v-if="index==0">
              移动
              <span>
                <img
                  data-view-type="isp"
                  data-view="移动"
                  @click="updateDispatchPlatformHandle"
                  src="../../../assets/edit.svg">
              </span>
              <span>
                <img
                  data-view-type="isp"
                  data-view="移动"
                  @click="detailsDispatchPlatformHandle"
                  src="../../../assets/details.svg">
              </span>
            </td>
            <td>
              <a
                data-view-type="big_view"
                :data-view="v"
                @click="specificAreaHandle">{{v}}</a>
              <span>
                <img
                  data-view-type="big_view"
                  :data-view="v"
                  @click="updateDispatchPlatformHandle"
                  src="../../../assets/edit.svg">
              </span>
              <span>
                <img
                  data-view-type="big_view"
                  :data-view="v"
                  @click="detailsDispatchPlatformHandle"
                  src="../../../assets/details.svg">
              </span>
            </td>
          </tr>
        </template>
        <template v-if="val.isp=='联通'">
          <tr v-if="val.isp=='联通'" v-for="(v,index) in val.big_view_list">
            <td :rowspan="val.big_view_list.length" v-if="index==0">
              联通
              <span>
                <img
                  data-view-type="isp"
                  data-view="联通"
                  @click="updateDispatchPlatformHandle"
                  src="../../../assets/edit.svg">
              </span>
              <span>
                <img
                  data-view-type="isp"
                  data-view="联通"
                  @click="detailsDispatchPlatformHandle"
                  src="../../../assets/details.svg">
              </span>
            </td>
            <td>
              <a
                data-view-type="big_view"
                :data-view="v"
                @click="specificAreaHandle">{{v}}</a>
              <span>
                <img
                  data-view-type="big_view"
                  :data-view="v"
                  @click="updateDispatchPlatformHandle"
                  src="../../../assets/edit.svg">
              </span>
              <span>
                <img
                  data-view-type="big_view"
                  :data-view="v"
                  @click="detailsDispatchPlatformHandle"
                  src="../../../assets/details.svg">
              </span>
            </td>
          </tr>
        </template>
        <template v-if="val.isp=='电信'">
          <tr v-if="val.isp=='电信'" v-for="(v,index) in val.big_view_list">
            <td :rowSpan="val.big_view_list.length" v-if="index==0">
              电信
              <span>
                <img
                  data-view-type="isp"
                  data-view="联通"
                  @click="updateDispatchPlatformHandle"
                  src="../../../assets/edit.svg">
              </span>
              <span>
                <img
                  data-view-type="isp"
                  data-view="电信"
                  @click="detailsDispatchPlatformHandle"
                  src="../../../assets/details.svg">
              </span>
            </td>
            <td>
              <a
                data-view-type="big_view"
                :data-view="v"
                @click="specificAreaHandle">{{v}}</a>
              <span>
                <img
                  data-view-type="big_view"
                  :data-view="v"
                  @click="updateDispatchPlatformHandle"
                  src="../../../assets/edit.svg">
              </span>
              <span>
                <img
                  data-view-type="big_view"
                  :data-view="v"
                  @click="detailsDispatchPlatformHandle"
                  src="../../../assets/details.svg">
              </span>
            </td>
          </tr>
        </template>
        </tbody>
      </table>
    </div>


    <!-- 添加调度平台信息 -->
    <AddDispatchPlatformTableRecord
      :DialogFormVisibleAdd="DialogFormVisibleAdd"
      :Schedule="Schedule"
      :Domain="Domain"
      v-on:ModalChangeAdd="addCacheGroupHandle"
      v-on:ModalDataChange="getDispatchPlatformListData"
    >
    </AddDispatchPlatformTableRecord>

    <!-- 查看调度平台信息详情 -->
    <template v-if="DialogFormVisibleDetails">
      <DetailsDispatchPlatformTableRecord
        :DialogFormVisibleDetails="DialogFormVisibleDetails"
        :FormData="detailsForm"
        v-on:ModalChangeDetails="detailsBeforeHandle"
      >
      </DetailsDispatchPlatformTableRecord>
    </template>

    <!-- 修改调度平台信息详情 -->
    <template v-if="DialogFormVisibleUpdate">
      <UpdateDispatchPlatformTableRecord
        :DialogFormVisibleUpdate="DialogFormVisibleUpdate"
        :FormData="detailsForm"
        v-on:ModalChangeUpdate="updateBeforeHandle"
      >
      </UpdateDispatchPlatformTableRecord>
    </template>

    <!--  查询域名下view信息 -->
    <template v-if="DialogFormVisibleSpecificArea">
      <DetailsSpecificArea
        :BigViewName="BigViewName"
        :DialogFormVisibleSpecificArea="DialogFormVisibleSpecificArea"
        :FormData="specificAreaForm"
        v-on:ModalChangeSpecificArea="specificAreaBeforeHandle"
      >
      </DetailsSpecificArea>
    </template>


  </div>

</template>

<script>
  import AddDispatchPlatformTableRecord from './AddDispatchPlatformTableRecord'
  import DetailsDispatchPlatformTableRecord from './DetailsDispatchPlatformTableRecord'
  import UpdateDispatchPlatformTableRecord from './UpdateDispatchPlatformTableRecord'
  import DetailsSpecificArea from './DetailsSpecificArea'
  export default {
    props:['Schedule','Domain'],
    components: {
      AddDispatchPlatformTableRecord,
      DetailsDispatchPlatformTableRecord,
      UpdateDispatchPlatformTableRecord,
      DetailsSpecificArea
    },
    data() {
      return {
        DialogFormVisibleAdd:false,
        DialogFormVisibleDetails:false,
        DialogFormVisibleUpdate:false,
        DialogFormVisibleSpecificArea:false,

        ListData:[],

        detailsForm:{
          schedule:this.Schedule,
          domain:this.Domain,
          view:'',
          view_type:'',
        },

        specificAreaForm:{
          schedule:this.Schedule,
          domain:this.Domain,
          view:'',
          view_type:'',
        },

      }
    },
    computed:{
    },
    mounted () {
      this.getDispatchPlatformListData();

    },
    methods: {
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      //添加全网默认信息弹窗显示
      addCacheGroupHandle () {
        console.log('this.DialogFormVisibleAdd::',this.DialogFormVisibleAdd)
        if(this.DialogFormVisibleAdd==true){
          this.DialogFormVisibleAdd=false;
        }else{
          this.DialogFormVisibleAdd=true;
        }
      },
      // 详情预操作
      detailsBeforeHandle () {
         if(this.DialogFormVisibleDetails==true){
           this.DialogFormVisibleDetails=false
         }else{
           this.DialogFormVisibleDetails=true
         }
      },
       // 修改预操作
       updateBeforeHandle () {
         if(this.DialogFormVisibleUpdate==true){
           this.DialogFormVisibleUpdate=false
         }else{
           this.DialogFormVisibleUpdate=true
         }
      },
      //查看详情
      detailsDispatchPlatformHandle (e) {
          let _this=e.target;
          this.detailsForm.view_type=_this.dataset.viewType;
          this.detailsForm.view=_this.dataset.view;

          this.detailsBeforeHandle();
      },
      //查看修改
      updateDispatchPlatformHandle (e) {
          let _this=e.target;
          this.detailsForm.view_type=_this.dataset.viewType;
          this.detailsForm.view=_this.dataset.view;

          this.updateBeforeHandle();
      },
      //添加全网默认信息弹窗显示
      getDispatchPlatformListData () {
        this.$store.dispatch({
          type:'GET_DISPATCH_PLATFORM_DATA_AC',
          amount:{
            "schedule":this.Schedule,
            "domain":this.Domain,
          }
        }).then( (res) => {
            this.ListData=res.data.data;
        })
      },
      //查看大区下的区域信息预操作
      specificAreaBeforeHandle () {
        if(this.DialogFormVisibleSpecificArea==true){
          this.DialogFormVisibleSpecificArea=false
        }else{
          this.DialogFormVisibleSpecificArea=true
        }
      },
      //添加全网默认信息弹窗显示
      specificAreaHandle (e) {
        let _this=e.target;
        this.specificAreaForm.view_type=_this.dataset.viewType;
        this.specificAreaForm.view=_this.dataset.view;

        this.BigViewName=_this.dataset.view;

        this.specificAreaBeforeHandle();

      },

    }
  }
</script>

<style lang="scss">
  #dispatch-platform-node{

    .img{
      span{
        display: inline-block;
        cursor: pointer;
        img{
          display: inline-block;
          vertical-align: sub;
          width: 20px;
          height: auto;
          margin-left: 15px;
        }
      }
    }

    .table-box{
      width: 100%;
      position: relative;
      display: block;
      table {
        border-collapse: collapse;
        width: 100%;
      }

      table, th, td {
        border: 1px solid #e0e6ed;
      }
      .table{

        thead{

          tr{
            background-color: #e0e6ed;

            th{
              text-align: left;
              padding: 0px 18px 0px 18px ;
              box-sizing: border-box;
              line-height: 40px;
              height: 40px;
              border-right: 1px solid #ddd;

              @extend .img;
            }
          }
        }
        tbody{

          tr{

            td{
              text-align: left;
              line-height: 35px;
              height: 35px;
              box-sizing: border-box;
              padding: 0px 18px 0px 18px;
              font-size: 15px;

              @extend .img;

              >a{
                color:#20a0ff;
                font-size: 14px;
                cursor: pointer;
                &:hover{
                  color:#4db3ff;
                }
                &:active{
                  color:#1d90e6;
                }
              }
            }
          }
        }
      }
    }

    .table-header{

      h3{
        display: block;
        position: relative;
        margin: 10px 0px;
        line-height: 50px;
        height: 50px;
        font-size: 16px;

        @extend .img;

      }
    }

  }



</style>
