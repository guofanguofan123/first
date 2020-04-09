<template>
  <div class="start">
    <div class="middle_text">
        <div class="middle_text_f">
            <div class="middle_text_s1">最近热门电视剧</div>
            <div class="middle_text_s2">
                <!-- <label v-for="(title,index) in tabTitle" :key="index" @click="cur=index" :class="{active:cur==index}">{{title.name}}</label> -->
                <label></label>
            </div>
            <a href="">更多>></a>
        </div>
        <hr/>
    </div>
        <div class="middle_img_outside">
            <div class="middle_img_inside">
              <a href="" v-for="(items,index) in imglist" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="" v-for="(items,index) in imglist1" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="" v-for="(items,index) in imglist" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="" v-for="(items,index) in imglist" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="" v-for="(items,index) in imglist" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="" v-for="(items,index) in imglist" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="" v-for="(items,index) in imglist" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="" v-for="(items,index) in imglist" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="" v-for="(items,index) in imglist" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="" v-for="(items,index) in imglist" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>  
            </div>
        </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            tabTitle:[{name:"热门"},{name:"国产剧"},{name:"综艺"},{name:"美剧"},{name:"日剧"},
            {name:"韩剧"},{name:"日本动画"},{name:"纪录片"}],
            imglist:[
                {
                    url:require("@/images/p2569548689.jpg"),
                    text:"续命之徒:绝命毒师",
                    score:"8.3",
                },
                {
                    url:require("@/images/p2546997679.jpg"),
                    text:"金发男子",
                    score:"8.0",
                },
                {
                    url:require("@/images/p2563780504.jpg"),
                    text:"哪吒之魔童降世",
                    score:8.5,
                },
                {
                    url:require("@/images/p2549326655.jpg"),
                    text:"蜡笔小新:新婚旅行飓风之遗失的野",
                    score:8.3
                },
                {
                    url:require("@/images/p2563780504.jpg"),
                    text:"哪吒之魔童降世",
                    score:8.5
                },
                {
                    url:require("@/images/p480747492.jpg"),
                    text:"肖申克的救赎",
                    score:9.7
                },
                {
                    url:require("@/images/p2561439800.jpg"),
                    text:"寄生虫",
                    score:8.7
                },
                {
                    url:require("@/images/p2557573348.jpg"),
                    text:"千与千寻",
                    score:9.3
                },
            ],
            imglist1:[
                {
                    url:require("@/images/p2563780504.jpg"),
                    text:"哪吒之魔童降世",
                    score:"8.5"
                },
                {
                    url:require("@/images/p2564470856.jpg"),
                    text:"小怪物",
                    score:"6.3"
                },                {
                    url:require("@/images/p2561305376.jpg"),
                    text:"我不是药神",
                    score:9.0
                },
                {
                    url:require("@/images/p2546226109.jpg"),
                    text:"漫长的告别",
                    score:8.1
                },
                {
                    url:require("@/images/p2561305376.jpg"),
                    text:"我不是药神",
                    score:9.0
                },
                {
                    url:require("@/images/p511118051.jpg"),
                    text:"这个杀手不太冷",
                    score:9.4
                },
                {
                    url:require("@/images/p2360940399.jpg"),
                    text:"釜山行",
                    score:8.4
                },
                {
                    url:require("@/images/p2395733377.jpg"),
                    text:"你的名字。",
                    score:8.4
                },
            ],
        cur:0
        }
    },
    methods: {
       
    },
}
</script>
<style  scoped>
    .start{
        width:820px;
        margin:0 auto;
    }
    .middle_text_f{
        width:820px;
        margin:5px auto;
    }
    .middle_text_s1{
        float: left;
        font-size:16px;
        font-weight: 600;
        margin-left:8%;
        margin-right:0;
        width:20%;
    }
    .middle_text_s2{
        float: left;
        font-size:13px;
        color:#9b9b9b;
        padding:0;
        vertical-align: inherit;
    }
    .middle_text_s2 label{
        margin-right: 16px;
    }
    .middle_text_s2 label:hover{
        background-color: #37a;
        color:#fff;
    }
    .middle_text_s2 label:active{
        color:#111;
        background:none;
    }
    .middle_text a{
        text-decoration: none;
        font-size:13px;
        position: relative;
        top:2px;
        text-align:right;
    }
    .middle_text a:hover{
        background-color:#37a;
        color:#fff;
        text-decoration: none;
    }
    hr{
        display: block;
        opacity: 0.2;
        margin:10px 65px;
    }
    .middle_img_outside{
        margin:0 68px;
    }
    .middle_img_outside a{
        float: left;
        text-decoration: none;
        font-size:13px;
        position: relative;
        margin-right: 20px;
    }
    .middle_img_inside img{
        text-align:center; 
        width:115px;
        height: 160px;
        cursor: pointer;
    }
    .middle_img_inside p{
        display: block;
        color:#37a;
        width:115px;        
        height: 44px;
        text-align:center; 
        overflow: hidden; 
        cursor: pointer; 
    }
    .middle_img_inside p strong{
        color:#e09015;
    }
    .active{
       color:#000; 
    }
    
</style>