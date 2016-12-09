<template>
    <div id="title-node">
        <h2>
          {{TitleName}}
          <span>
            <img @click="addHandle" src="../../assets/add.svg">
          </span>
        </h2>
    </div>
</template>

<style lang="scss">
  #title-node{
    h2{
      span{
        display: inline-block;
        vertical-align: middle;
      }
    }
  }
</style>

<script>
    export default{
      props:['TitleName'],
      data(){
        return{
        }
      },
      methods:{
        addHandle () {


        }
      }
    }
</script>
