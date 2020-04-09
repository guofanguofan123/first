<template>
<div class="container">
  <div class="nav">
    <div class="nav-logo">
      <a href="http://localhost:8080/#/index">大唐datang</a>
    </div>
    <div class="nav-list">
      <ul>
        <li><a href="http://localhost:8080/#/index">首页</a></li>
        <li><a href="">我的大唐</a></li>
        <li><a href="">浏览发现</a></li>
        <li><a href="">话题广场</a></li>
      </ul>
    </div>
  </div>
  <div class="title">
    <div class="title-div">
      <img class="title-img" :src="'http://127.0.0.1:4000/'+user_img"/>
    </div>
    <div class="title-lname">
      <div class="title-span1">
        <span class="title-top">{{user_name}}</span> 
      </div>
      <div class="title-span2">
        <span class="title-bottom">{{user_sign}}</span>
      </div>
    </div>
  </div>
  <table></table>
  <div class="title-list">
    <span class="list-span">我的主页</span>
    <span>&nbsp&nbsp广播&nbsp&nbsp相册&nbsp&nbsp日记&nbsp&nbsp豆列&nbsp&nbsp设置</span>
  </div>
  <div class="intr">
    <p class="intr-p1">{{user_name}}，这里是你的主页，用来展示你的生活和发现，也是别人认识你的地方。</p>
    <p class="intr-p2">完善你的个人资料，开始全新的大唐之旅吧。</p>
    <p class="intr-p3">①&nbsp上传头像√</p>
    <p class="intr-p4">②写一段自我介绍</p>
    <p class="intr-p5">以上选项也可以在页面右上角你的账号中找到。</p>
  </div>
  <div class="my-dairy">
      <span class="dairy-span1">我的日记&nbsp·&nbsp·&nbsp·&nbsp·&nbsp·&nbsp·</span>
      <span class="dairy-span2">(全部)</span>
      <button class="dairy-btn">+写日记</button>
      <p>在大唐上写日记，记录自己的生活、想法。</p>
  </div>
  <div class="my-photo">
    <span class="photo-span1">我的相册&nbsp·&nbsp·&nbsp·&nbsp·&nbsp·&nbsp·</span>
    <span class="photo-span2">(创建0&nbsp·&nbsp关注0)</span>
    <button class="photo-btn1">+发照片</button>
    <button class="photo-btn2">+新建相册</button>
    <p>可以有自己的相册来存放照片了。</p>
    <span class="liuyan">留言板&nbsp·&nbsp·&nbsp·&nbsp·&nbsp·&nbsp·</span>
    <span class="dairy-span2">(全部)</span>
    <input>
    <button class="">留言</button>
  </div>
</div>
</template>
<script>
  export default{
    data(){
      return{
        user_name:"",
        user_sign:"",
        user_img:""
      }
    },
    created(){
      var url="Mypagination";
      var obj={};
      this.axios.get(url,{params:obj}).then(res=>{
        if(res.data.data[0].user_name!==null){
        this.user_name=res.data.data[0].user_name;
        this.user_sign=res.data.data[0].user_sign;
        this.user_img=res.data.data[0].user_img;
        console.log(this.user_img)
        }else{
           this.user_name="新用户";
           this.user_sign="这个人很懒，什么也没写";
           this.user_img="/user_img/moren.png";
        }
      })
    }
  }
</script>
<style scoped>
  .container{width:820px;margin:0 auto}
  .nav{height:74px;background-color:#e0eee1;margin-bottom:50px;}
  .nav-logo{margin-left:10px;display:block;float:left;}
  .nav-logo a{text-decoration:none;font-size:12px;color:#072;display:block;font-size:25px;
       font-weight:bold;line-height:74px;margin-right:45px;}
  .nav-list{float:left;}
  ul,ol{list-style:none;padding-right:15px;color:#323232;padding:0;margin-left:10px; margin-top:26px;} 
  .nav-list li{list-style:none; text-align:center;display:inline-block;margin-right:18px;}
  .nav-list li:hover {background-color:#072}
  .nav-list a{ text-decoration:none;font-size:16px;color:#072;}
  .nav-list li:hover a{color:#fff}
  .title-img{width:50px;height:50px;}
  .title-top{font-size:23px;font-weight:bold;color:#494949;}
  .title-bottom{font-size:12px;color:#666;}
  .title-lname{float:left;}
  .title-div{margin-right:8px;float:left;}
  .list-span{color:#666699;}
  .title-span2{font-style: italic;color:#111;}
  .title-list{clear:left;height:12px;margin-left:58px;padding-top:7px;color:#37a;
     font-size:14px;margin-bottom:30px;}
  .intr{height:193px;background-color:#f8f8f8;}
  .intr{padding-top:12px;font-size:14px;color:#424242;padding-left:21px;}
   .intr-p3{margin-left:32px;}
   .intr-p4{margin-left:32px;color:#005500;}
   .my-dairy{margin-top:42px;}
   .dairy-span1{font-size:16px;color:#072}
   .dairy-span2{font-size:13px;color:#37a}
   .my-dairy p{font-size:13px;color:#111;}
   .dairy-btn{margin-left:595px;background:#fcf7f3;}
   .my-photo{ margin-top:46px;}
   .my-photo p{font-size:13px;color:#111;}
   .btn-div{display:inline-block}
   .photo-span1{font-size:16px;color:#072;}
   .photo-span2{font-size:13px;color:#37a}
   .photo-btn1{margin-left:461px;background:#fcf7f3;}
   .photo-btn2{background:#fcf7f3;}
   .liuyan{font-size:16px;color:#072;display:inline-block;margin-top:40px;}
   input{display:block;width:665px;height:60px;
         margin-top:23px;margin-bottom:18px}
</style>
