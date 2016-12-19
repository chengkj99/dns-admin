<!-- 头部组件 -->


<template>
  <div id='header-node' class='hero-head'>
    <div class="container">
      <el-menu theme="dark"
               default-active="/CustomerAccess"
               router
               class="el-menu-demo el-menu-reset"
               mode="horizontal"
               @select="handleSelect">
        <el-menu-item   index="/CustomerAccess">
          客户接入层管理
        </el-menu-item>
        <!--<el-submenu index="/DispatchPlatform">-->
          <!--<template slot="title">调度平台管理</template>-->
          <!--<el-menu-item index="/DispatchPlatform">选项1</el-menu-item>-->
          <!--<el-menu-item index="2-2">选项2</el-menu-item>-->
          <!--<el-menu-item index="2-3">选项3</el-menu-item>-->
        <!--</el-submenu>-->
        <el-menu-item index="/DispatchPlatform">
          调度平台管理
        </el-menu-item>
        <el-menu-item index="/CacheGroup">
          缓存组管理
        </el-menu-item>

        <el-menu-item class="el-menu-logo" index="1">
          <img src="../../assets/dns.svg">
          <span>ADMIN</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>
<script>

  export default {
    data () {
      return {

      }

    },
    methods: {
      handleSelect () {
        console.log('12345')
      }

    }
  }
</script>


<style lang="scss">

  @import '../../assets/css/main';
  #header-node{

    width: 100%;
    position: relative;
    display: block;
    background-color: $Light-Black;
    box-shadow: 0px 1px 6px $Light-Black;;
    z-index: 1;
    color:white;

    .container{
      text-align: left;
      margin: auto;
      display: block;
      position: relative;
      font-weight: bold;
      font-size: 24px;
      width: 1200px;
      height: 62px;

      .el-menu-reset{
        width: 100%;
        display: inline-block;
        position: absolute;
        left: 0;

        .el-menu-logo{
          position: absolute;
          right: 0;

          &:hover{
            border-bottom: none !important;
          }
          img{
            display: inline-block;
            vertical-align: middle;
            width: 40px;
            height: auto;
          }

          span{

            display: inline-block;
            height: 100%;
            vertical-align: middle;
            font-size: 19px;
            color: $logo-gray;
          }

        }
      }

      img{
        height: auto;
        width: 30px;
        vertical-align: sub;
      }

      a{
        text-decoration:none;
        color:$nav-font-color;
        display: block;

      }
    }


  }

</style>
