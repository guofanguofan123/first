<template>
  <div id="app">
    <my-header v-show="denglu"></my-header>
    <my-header2 v-show="geren"></my-header2>
    <CarouselTop></CarouselTop>
    <First></First>
    // <second>  </second>
    <CarouselBottom></CarouselBottom>
    <indexBottom></indexBottom>
    <my-footer></my-footer>
  </div>
</template>

<script>
  // import Second from './Second.vue';
  import CarouselTop from './CarouselTop.vue';
  import CarouselBottom from './CarouselBottom.vue';
  import indexBottom from './indexBottom.vue'
  import First from './First.vue'
  export default {
  data () {
    return {
      denglu:true,
      geren:false
    }
  },
  components:{ 
      // "Second": Second,
      "First": First,
      "CarouselTop": CarouselTop,
      "CarouselBottom": CarouselBottom,
      "indexBottom": indexBottom
  },
      created(){  
         var url="index";
         var obj={};
       this.axios.get(
         url,{params:obj}
       )
       .then(result=>{
         if(result.data.code<0){
           console.log("查询失败")
         }else{
         //若已经登录
          if(result.data.isLog=="true"){
            this.denglu=!this.denglu;
            this.geren=!this.geren;
          }     
         }
       })
       .catch(err=>{
         console.log(err)
       })
     },
}  
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
