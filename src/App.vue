<template>
  <div id="app">
    <Headers></Headers>
    <Mains></Mains>

  </div>
</template>

<script>
import Headers from './components/basic/Headers'
import Mains from './components/basic/Mains'
import Navs from './components/basic/Navs'

export default {
  name: 'app',
  components: {
    Headers,
    Navs,
    Mains
  }
}
</script>

<style>


#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body{
  margin:0;
}
</style>
