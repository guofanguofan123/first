<template>
<div class="container">
<my-header v-show="denglu"></my-header>
<my-header2 v-show="geren"></my-header2>
  <div class="movList">
      <h1>选电影</h1> 
      <div>
          <a href="javascript:;" v-for="(item,i) in list" :key="i" >
                <p>{{item}}</p>
          </a>
      </div>
  </div> 
  <hr class="hr" />
  <div class="sort" >
    <div class="sort-left" v-for="(items,x) in btn" :key="x">
        <label >
            <input type="radio" name="sorts" >
              {{items}}
            </label>
    </div>
        <div class="sort-right">
            <label>
                <input type="checkbox" name="sort" id="">
                我没看过的
            </label>
            <label for="">
                <input type="checkbox" name="sort" id="">
                可在线播放
            </label>
        </div>
  </div>
  <div style="clear:both"></div>
  <div class="login-tip">
        注册登录后可以保存自己的观影记录，大唐也会根据你的口味为你推荐电影。
      <a href="javascript:;" v-for="(item3,b) in btn2" :key="b">{{item3}}</a>
  </div>
  <div style="clear:both"></div>
    <div class="intrmov" >
        <a href="javascript:;" v-for="(item5,d) in index" :key="d">
            <div v-for="(item4,d) in index" :key="d" @click="jump($event,item4)">
              <img :src="'http://localhost:4000/'+item4.cover"/>
              <p>{{item4.title}}<strong>{{item4.average}}</strong></p>  
            </div>
        </a>
            <div class="loadMore" @click="loging()">
              <span v-show="d">加载更多</span>
              <span v-show="c">加载中···</span>
            </div>
    </div>
    <my-footer></my-footer>
  </div>  
</template>
<script>
export default {
    data(){
        return{
            list:["热门","最新","经典","可播放","大唐高分","冷门佳片","华语","欧美","韩国","日本","动作","喜剧","爱情","科幻","悬疑","恐怖","文艺"],
            btn:["按热度排序","按时间排序","按评价排序"],
            btn2:["登录","注册"],
            index:[],
            c:false,
            d:true,
            denglu:true,
            geren:false
        }
    },
    methods:{
        jump:function($event,item4){
            var sid=item4.sid;
            this.$router.push(`/subject/${sid}`);
        },
        loging:function(){
            if(this.c==false){
                this.c=true;
                this.d=false;

            }else{
                this.c=false;
                this.d=true;
            }
        },
    },
    created(){  
         var url="Search";
         var obj={};
       this.axios.get(
         url,{params:obj}
       )
       .then(result=>{
         if(result.data.code<0){
           console.log("查询失败")
         }else{
         if(result.data.isLog=="true"){
            this.denglu=!this.denglu;
            this.geren=!this.geren;
          }
          this.index=result.data.result.slice(0,5)
         }
       })
       .catch(err=>{
         console.log(err)
       })
     },
}
</script>
<style scoped>
    .container{width:820px;margin:auto}
    h1{text-align:left;font-size:25px}
    hr{opacity:0.2;width:800px}
    .sort{
        padding:1rem 0 0 0;
        margin-bottom:2rem;
    }
    .sort-left{
        margin-right:1rem;
    }
    .sort-left label{
        width:100px;
        float: left;
        font-size:14px;
        padding-right: 5px;
        }
    .sort-right{
        margin-right: 1.2rem;
    }
    .sort-right label{
        width:100px;
        font-size:14px;
        float: right;
        padding:1px 1px;
    }
    .login-tip{
        display: none;
        background: #fdfce4;
        border:1px solid #fbf2b6;
        width:795px;
        height:36px;
        line-height: 36px;
        color:#777;
        font-size:13px;
        text-align: left;
    }
    .login-tip a:link{
        color:#37a;
        text-decoration: none;
        font-size:13px;
    }
    .login-tip a:visited{
        color:#669;
        text-decoration: none;
        font-size:13px;
    }
    .login-tip a:hover{
        background-color:#3251a7;
        color:#fff;
        text-decoration: none;
        font-size:13px;
    }
    .movList{
        width:820px;height:120px;
        margin:auto
    }
    .movList div a{
        width:85px;height:25px;
        float:left
        ;margin:0 5px 5px 0;
        text-decoration:none
    }
    .movList div a p{
        display:block;
        font-size:13px;
        color:#666;
        font-size:14px;
        cursor: pointer;
        text-align:center;
        margin:0 3px 5px 0;
        padding:2px 5px;
        border-radius: 2px;
    } 
    .movList div a p:hover{
        background-color:#e0e6e6
    }
    .intrmov a{
        text-decoration:none;color:#666;
        margin:0;clear:both
    }
    .intrmov{
        width:820px;
        margin-top:30px;
        }
    .intrmov p{
        font-size:13px;
        color:#2e96d5
    }
    .intrmov div{
        justify-content: space-between;
        float:left;
        }
    .intrmov a div{
        width:140px;height:190px;
        margin:0 24px 50px 0}
    .intrmov a div img{
        width:140px;height:190px;
        margin:0 0 10px 0
    }
    .intrmov a div p{
        width:140px;margin:0;padding:0;
        text-align:center
    } 
    .intrmov a div img:hover{opacity:0.7}
    .intrmov a div p strong{color:#e09015}
    .intrmov a .loadMore{width:820px;height:35px}

    .loadMore{width:820px;height:40px;
    display: block;
    height: 34px;
    line-height: 34px;
    text-align: center;
    font-size: 14px;
    background: #f7f7f7}

    .intrmov a .loadMore:hover{background-color:#d4d4d4} 
    .intrmov a .loadMore a div span{text-align:center}
</style>
    

