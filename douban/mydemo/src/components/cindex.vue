<template>
  <div class="cindex-container">
  <my-header v-show="denglu"></my-header>
  <my-header2 v-show="geren"></my-header2>
    <h1>最受欢迎的影评</h1>
    <div class="cindex-container-first">
      <ul class="cindex-container-ul">
        <li class=container-first-li>
          <span>最受欢迎的</span>
        </li>
        <li class=container-second-li>
          <a href="javascript:;"><span>/ 新片评论</span></a>
        </li>
      </ul>
    </div>
    <!-- 第二部分 -->
    <div v-for="(item,i) of list"  :key="i" class="main-reviem-item" >
    <!-- 图片 -->
      <a class="subject-img" href="javascript:;" @click="getSubject($event,item)" >         
        <img  :title="item.title"  :src="'http://localhost:4000/'+item.cover">
      </a> 
      <!-- 基本信息 -->
        <div class="main-hd">
          <!-- 头像 -->
          <a href="javascript:;" class="avator">
            <img style="width:24px; height:24px"  :src="'http://localhost:4000/'+item.utou">
          </a>
          <!-- 用户昵称 -->
          <a href="javascript:;" class="name1">{{item.uname}}</a>
          <!-- 评分 -->
          <span title="力荐" >
           <el-rate v-model="value" disabled  text-color="#ff9900" :core-template="{value}">
           </el-rate>
          </span>
          <!-- 评论时间 -->
          <span class="main-meta">{{item.pubdates}}</span>
        </div>
        <!-- 内容部分 -->
        <div class="main-bd">
          <h2>
            <a href="javascript:;" class="name1">{{item.subtitle}}</a>
          </h2>
        <!-- 标题 -->
          <!-- 评论 -->
        <div>
          <div class="short-content">
            <p class="spoiler-tip" >
              {{item | explainLen}}
            </p> 
            <a href="javascript:;"  class="name1 name-title" :title="item.isExpand?'收起':'(展开)'"  @click.stop="toggleUp(item,$event)">{{item.isExpand?'收起':'(展开)'}}</a>  
          </div>  
          <!-- 详情 -->
          <div class="cindex-detail" style="display:none">
            <!-- 来源 -->
              <a  href="javascript:;"  class="report_review right">举报</a>
              <div class="main-author">
                <span>来自大唐App</span>
              </div>
              <!-- 评价  -->
              <div class="main-panel-useful">
                <button class="useful_count" @click="btnup()" ><img src="@/img/zan.png">有用{{item.zann}}
                </button>
                <button class="useless_count disabled" @click="btndown()" ><img src="@/img/cai.png">
                没用 {{item.caii}}
                </button>
              </div>
          </div>
       
            <!-- 底部按钮 -->
            <div class="cindex-action">
              <a href="javascript:;" class="action-btn"  title="有用">
                  <img src="@/img/up.png">
                  <span  @click="btnup" :data-i="i">{{item.zan}}</span>
              </a>
              <a href="javascript:;" class="action-btn" title="没用" >
                  <img src="@/img/down.png">
                  <span @click="btndown" :data-i="i">{{item.cai}} </span>
              </a>
              <a href="javascript:;" class="cindex-reply">{{item.response}}回应</a>
            </div>  
        </div>           
          </div>
          <div class="clear"></div>                
      </div>   
         <div class="block">
           <!-- <span>s</span> -->
  <ul class="pagination">
        <li class="page-item disabled">
            <a class="page-link" href="javascript:;">上一页</a>
        </li>
        <li class="page-item active">
            <a class="page-link" href="javascript:;">1</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="http://localhost:8080/#/page2">2</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:;">3</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:;">4</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:;">5</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:;">6</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:;">7</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:;">8</a>
        </li>
       <li class="page-item">
            <a class="page-link" href="javascript:;">9</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:;">10</a>
        </li>
        <li class="page-item">
            <a class="page-link" href="javascript:;">下一页</a>
        </li>
    </ul>
</div>
   <my-footer class="clear"></my-footer>
    </div>
</template>
<script>
export default {
  data() {
    return {      
      list:{},
      value:5,
      denglu:true,
      geren:false
    }
  },
  methods:{
    getSubject($event,item){
      var sid=item.sid;
//        var url="getSubject";
//          var obj={sid:sid};
//        this.axios.get(
//          url,{params:obj}
//        )
//        .then(result=>{
         
//        })
//        .catch(err=>{
//          console.log(err)
//        })

      this.$router.push(`/subject/${sid}`);
    },
     btnup(e){
       var i=e.target.dataset.i;    
         this.list[i].zan++
     },
     btndown(e){
      var i=e.target.dataset.i;
      this.list[i].cai++
    },
    toggleUp(item, e){
      
      var target = e.target.parentNode;//点击后获取当前评论
      item.isExpand = !item.isExpand;//切换状态
      let target1 = e.target.parentElement.nextElementSibling;
        if (item.isExpand) {
          //true
          //当下全文状态
          target1.style.display="";
          target.style.height = "auto";
        } else {
            //false
          // 当下收起状态
          target1.style.display="none";
          target.style.height = "6.65rem";//收起状态的容器高度
          //收起状态的高度
          
        }
      }
    },
      created(){  
         var url="cindex";
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
          this.list=result.data.result.slice(0,5)
          console.log(this.list);        
         }
       })
       .catch(err=>{
         console.log(err)
       })
     },
    filters: {
      explainLen: function (item) {
        console.log(item)
        if (!item.msgtext) return;
        if (item.isExpand) {
          //当下全文状态
            return item.msgtext.substr(0, item.msgtext.length - 1);
        } else {
          
        return item.msgtext.substr(0,160)+"...";
        }
      }
    }
  }
</script>
<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
  .cindex-container{
    width:820px;
    margin:auto;
    height:auto;
    color: #111;
    font-size: 13px;  
    }
  .cindex-container a{
    text-decoration: none;
    }
  .cindex-container-first{
    margin-bottom:45px;
    }
  .cindex-container>h1{
    color:#494949;
    text-align:left;
    }
  .cindex-container-ul{
     float: left;
     list-style-type: none;
  }
  .cindex-container-ul>li{
    float: left;
  }
  .container-first-li{
    margin-right:7px;
    cursor: default;
  }
  .container-second-li{
    cursor: pointer;
  }
  .container-second-li>a:visited {
    color: #669;
    text-decoration: none;
}
.container-second-li>a:link {
    color: #37a;
    text-decoration: none;
}
.container-second-li>a:hover {
    color: #37a;
}
.main-reviem-item{
  padding-top:20px;
  margin-top:5px;  
  border-top:1px solid #eaeaea;
  width: 100%;
  float:left;
  /* height:auto */
}
.clear{clear:both}
.subject-img{
  display: block;   
  cursor: pointer; 
}
.subject-img>img{
  width:75px;
  height:106.94px;
 
 
  
}
.main-hd{
 position: absolute;
  margin-top:-108px; 
  margin-left:100px;
  display: block;
}
.main-hd *{
  display:inline-block;
  vertical-align:middle;
}

.name1{
  font-size: 13px;
  font-weight: normal;
  color: #37a;
}
 .name1:visited {
  cursor: pointer;
  color: #37a;
  margin-left:10px;
} 
.name1:hover{
  background: #37a;  
  color:azure;
  cursor: pointer;
}
.name1:active{
  background: #ffac2d;  
  color:azure;
  cursor: pointer;
}
.main-meta{
  font-weight: 300;
  color: #999;
  margin-left:5px
}
.name-title{
  font-size: 14px;
  margin-bottom: 10px;
  margin-top: 0;
}
.main-bd{
  width: 100%;
  height: auto;
  padding: 0 10px 0 100px;
  box-sizing: border-box
}
.main-bd{
  float: left;
  padding-top:0px;
  margin-top:-92px;
  text-align:left;
}
.main-bd h2{
  margin-top:5px;  
}
.spoiler-tip{
  margin-bottom:5px;
  margin-top:-8px;
  color:#494949;;
  overflow: hidden;
  text-overflow:ellipsis;
  /* display:-webkit-box; */
  -webkit-line-clap:2;
  -webkit-box-orient:vertical;
}
.name-title{
  color: #37a;
  
}
.cindex-action{
  margin-top: -5px; 
  padding:10px 0;
}
.action-btn>img{
  width: 12px;
  height: 9px;
}
.action-btn{
  width: 12px;
  height: 9px;
  color: #3377aa;
  padding: 4px 6px;
  margin-right: 4px;
  border-radius: 2px;
  background-color: #f0f7f9;
}
.cindex-reply {
  margin-left: 10px;
  color:#37a;
  cursor: pointer;
 text-decoration: none;   
}
.cindex-reply:link {
    color: #37a;
}
.cindex-reply:visited {
    color: #666699;
}
.cindex-reply:hover {
    background:#37a; 
    color:aliceblue;
}
.name-title-bottom{
  float: right;
  color: #aaaaaa;
  cursor: pointer;
}
.cindex-action-bottom{
  border-top:1px solid #eaeaea;
  padding:20px;
}
/* .cindex-newpage{
  overflow: hidden;
  height:600px;
}
.cindex-newpage h2{
 margin-top:-2px
} */
.main-author{
  color: #aaaaaa;
  margin-top:20px;
}
.spoiler-tip-new{
  color: #111;
}
.main-panel-useful{
  margin-top:30px;
  text-align: center
}
.useful_count{
  cursor: auto;
  border-color: #c2e0ca;
  background:#fff;
  line-height: 1.2;
  border-radius: 2px;
  font: 400 13.3333px Arial;
  border:0px;
  width: 85px;
  height: 33px;
  margin-right:20px;
  border:1px solid #a4d0a1;
}
.useless_count{
  cursor: auto;
  border-color: #c2e0ca;
  background:#fff;
  line-height: 1.2;
  border-radius: 2px;
  font: 400 13.3333px Arial;
  border:0px;
  width: 85px;
  height: 33px;
  margin-right:20px;
  border:1px solid #a4d0a1;
}
.useful_count img{
  width: 14px;
    height: 16px;
   
}
.useless_count img{
  width: 14px;
   height: 16px;
}
.report_review{
  color: #fff;
  float:right;
  margin-top:5px
}
.report_review:hover{
  background: #aaa; 
  color: #fff;
  cursor: pointer;
}
.pagination{
  float:right;
  margin-top:0px;
}
.page-link{
  padding: 4px 8px;
}
</style>




<style>
.el-pagination{
 margin-left:212px !important;
}
  .el-rate {
    height: 24px;
  }
  .el-rate__icon {
  margin-right: 0px !important;
  vertical-align:middle !important;
  }
   .el-rate__item{
    width: 11px !important;
    height:11px !important;
    vertical-align:middle !important;
  } 
</style>