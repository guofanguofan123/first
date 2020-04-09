<template>
<div >
    <div class="nav">
        <div class="nav-logo">
            <a>大唐datang</a>
        </div>
        <div class="nav-list">
        <ul>
            <li><a href="">首页</a></li>
            <li><a href="">我的大唐</a></li>
            <li><a href="">浏览发现</a></li>
            <li><a href="">话题广场</a></li>
        </ul>
        </div>
    </div>
    <div id="container">
    <img src="../img/my_login.jpg" class="my_login">
    <div class="outside">
        <div class="inside">
            <div class="inside_1" :class="{isit:ind==0}" @click="to_reg">
                <label for="" >用户注册</label>
            </div>
            <div class="inside_2" :class="{isit:ind==1}"  @click="to_log">
                <label for="" >密码登录</label>
            </div>
        </div>
        <div class="inside_text" v-show="b">
            <label for="">
                请仔细阅读
                <a href="">大唐使用协议、隐私政策</a>
            </label>
        </div>
        <div class="inside_err" v-show="b">{{reg_check}}</div>
        <div class="inside_err" v-show="a">{{log_check}}</div>
        <div class="inside_input">
           
            <input type="text" placeholder="请输入用户名" v-show="b" v-model="reg_uname">
            <input type="text" placeholder="请输入用户名" style="display:none" v-show="a" v-model="uname">
        </div>
        <div class="inside_input" v-show="b">
            <input type="password" placeholder="请输入密码" v-model="reg_upwd">
        </div>
        <div class="inside_input" style="display:none" v-show="a">
            <input type="password" placeholder="密码" v-model="upwd">
            <a href="" >找回密码</a>
        </div>
        <div class="inside-btn" v-show="a">
        <a href="javascript:;" @click="login">
            <span>登录大唐</span>
        </a>
        </div>
        <div class="inside-btn" v-show="b">
        <a href="javascript:;" @click="reg">
            <span>注册大唐</span>
        </a>
        </div>
        <div class="inside_bottom">
            <p>
              <input type="checkbox">
              <label for="">下次自动登录</label>
              <a href="" v-show="b">收不到验证码</a>
              <a href="" style="display:none" v-show="a">海外手机登录</a>
            </p>
        </div>
        <div class="inside_bottom_line">
            <span>———————— 第三方登录 ———————</span>
        </div>
        <div class="inside_bottom_three">
            <a href="https://www.douban.com/accounts/connect/wechat/?from=movie&amp;redir=https%3A//movie.douban.com/explore" class="link-3rd-wx link-3rd-wx-on" target="_top" title="用微信登录">
                <img src="../img/weixin.png" alt="">
            </a>
            <a href="https://www.douban.com/accounts/connect/sina_weibo/?from=movie&amp;redir=https%3A//movie.douban.com/explore&amp;fallback=" class="link-3rd-wb link-3rd-wb-on" target="_top" title="用微博登录">
                <img src="../img/weibo.png" alt="">
            </a>
            <a target="_top" href="https://www.douban.com/accounts/connect/qq/?from=movie&amp;redir=https%3A//movie.douban.com/explore" class="link-3rd-qq link-3rd-qq-on" title="用QQ登录">
                <img src="../img/QQ.png" alt="">
            </a>
        </div>
    </div>
    </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            a:false,
            b:true,
            ind:0,
            uname:"",
            upwd:"",
            reg_uname:"",
            reg_upwd:"",
            reg_check:"",
            log_check:""
        }
    },
    methods:{
        //功能：用户注册
        reg(){
            var u=this.reg_uname;
            var p=this.reg_upwd;

            //创建正则表达式 3~12 字母数字
            var reg = /^[a-z0-9]{3,12}$/i;
            //4:验证用户名
            if(reg.test(u)==false){
            //5:验证不成功 提示消息
            this.reg_check="用户名格式错误";
            return;
            }
            //6:验证密码
            if(reg.test(p)==false){
            //7:验证不成功 提示消息
            this.reg_check="密码格式错误";
            return;
            }

            var url="reg";
            var obj={uname:u,upwd:p};
            this.axios.get(
                url,
                {params:obj}
            ).then(res=>{
                console.log(res)
                if(res.data.code<0){
                    this.reg_check="注册失败";
                }else{
                    //this.$router.push("/Mypagination")  //本页面就是login
                    this.reg_check="注册成功，即将跳转至登录页面";
                    setTimeout(()=>{
                         this.to_log();
                    }, 3000);
                   
                    
                }
            })
        },
        to_reg(){
              this.a = false;
              this.b=true;
              this.ind=0;
        },
        to_log(){
              this.a = true;
              this.b=false;
              this.ind=1;
        },
        login(){
        //功能:完成用户登录操作
        //1:获取用户输入用户名
        var u = this.uname;
        //2:获取用户输入密码
        var p = this.upwd;
                    //3:创建正则表达式 3~12 字母数字
                    var reg = /^[a-z0-9]{3,12}$/i;
                    //4:验证用户名
                    if(reg.test(u)==false){
                    //5:验证不成功 提示消息
                    this.log_check="用户名格式错误";
                    return;
                    }
                    //6:验证密码
                    if(reg.test(p)==false){
                    //7:验证不成功 提示消息
                    this.log_check="密码格式错误";
                    return;
                    }
        //8:发送ajax请求
        var url = "login";
        var obj = {uname:u,upwd:p};
        this.axios.get(
        url,
        {params:obj}
        ).then(res=>{
        console.log(res.data.code);
        if(res.data.code<0){
           this.log_check="用户名或密码错误 请重新输入";
        }else{
            //跳转Mypagination组件
            this.$router.push("/Mypagination");
        }
        });
        }
    },
    watch:{
        reg_uname(){
            var url = "checkname";
            var obj = {uname:this.reg_uname};
            this.axios.get(
            url,
            {params:obj}
            ).then(res=>{
            if(res.data.code>0){
                console.log("可以注册");
            }else{
                console.log("用户名重复");
            }
            })
        }
    }
}
</script>
<style scoped>
       .my_login{}
       #container{
           display:flex;
           justify-content:center;
       }
       .my_login{}
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
      a{
        text-decoration: none;
          color: #41ac52;
        }
      .outside{
          border:1px solid #000;
          width:340px;
          height: 450px;
          margin:0;
      }
      .inside{
          display:flex;
          padding:50px 25px 10px 25px;
      }
      .inside label{
          cursor:pointer;
      }
      .inside_1,.inside_2{
          border-bottom:1px solid #888;
          width:50%;
          height: 50%;
          font-size:18px;
          color:#888;
          line-height: 2;
          text-align:center;
      }
      .isit{
            font-weight: 600;
            color:#000;
          border-bottom: 2px solid #000;
      }
      .inside_2:active{
          opacity: 1;
          border-bottom: 2px solid #494949;
          font-weight: 600;
      }
      .inside_text{
          text-align: left;
          padding-left:25px;
      }
      .inside_text label{
          color: #9b9b9b;
          font-size:15px;
      }
      .inside_text label a{
          text-decoration: none;
          border:none;
          font-size:80%;
          cursor:pointer;
      }
      .inside_err{
          width: 280px;
          height: 20px;
          color:#d8a23a;
      }
      .inside_input{
          border-radius: 2px;
          width:280px;
          height:37px;
          margin:7px auto;
          border:1px solid rgba(0,0,0,0.1);
          text-align: start;
      }
      .inside_input span{
          font-size:15px;
          padding-right:10px;
          padding-left:10px;
          font-weight: 700;
          cursor: pointer;
          color:#9b9b9b;
      }
      .inside_input input{
          width:120px;
          height:35px;
          text-align: start;
          border:none;
          padding-left:10px;
          padding-right: 40px;
          outline:none;
      }
      .inside_input a{
          text-decoration: none;
          color:#41ac52;
          cursor: pointer;
          font-size:14px;
          text-align:right;
      }
      .inside-btn{
          display: block;
          height:36px;
          background-color: rgba(66,189,86,.5);
          margin:0 28px;
          border-radius: 2px;
          
      }
      .inside-btn span{
          color:#fff;
          font-size:15px;
          font-weight: 600;
          padding-top:10px;
          display: block;
          text-align: center;
      }
      .inside_bottom{
          margin:0 28px;
          margin-bottom: 50px;
      }
      .inside_bottom p{
          font-size:14px;
          text-align:justify;
      }
      .inside_bottom p a{
          margin-left: 80px;
      }
      .inside_bottom_line span{
          width:280px;
          font-size:13px;
          opacity: 0.5;
          margin:0 28px;
      }
      .inside_bottom_three{
          margin:0 28px;
      }
      .inside_bottom_three img{
          border-radius: 50%;
          width:38px;
          height: 36px;
          margin:5px 15px;
      }
</style>


