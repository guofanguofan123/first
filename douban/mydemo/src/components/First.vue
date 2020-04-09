<template>
  <div class="start">
    <div class="middle">
        <img src="../images/middle.jpg" alt="">   
    </div>
    <div class="middle_text">
        <div class="middle_text_f">
            <div class="middle_text_s1">最近热门电影</div>
            <div class="middle_text_s2">
                <label v-for="(title,i) in tabTitle" :key="i" @click="cur=i" :class="{active:cur==i}">{{title.name}}</label>
            </div>
            <a href="javascript:;">更多>></a>
        </div>
        <hr/>
    </div>
        <div class="middle_img_outside">
            <div class="middle_img_inside">
              <a href="javascript:;" v-for="(items,index) in imglist" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="javascript:;" v-for="(items,index) in imglist1" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="javascript:;" v-for="(items,index) in imglist2" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="javascript:;" v-for="(items,index) in imglist3" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="javascript:;" v-for="(items,index) in imglist4" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="javascript:;" v-for="(items,index) in imglist5" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="javascript:;" v-for="(items,index) in imglist6" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="javascript:;" v-for="(items,index) in imglist7" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="javascript:;" v-for="(items,index) in imglist8" :key="index" v-show="cur==index" >
                <img :src="items.url" alt="">
                <p>{{items.text}}<strong>{{items.score}}</strong></p>
              </a>
              <a href="javascript:;" v-for="(items,index) in imglist9" :key="index" v-show="cur==index" >
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
            tabTitle:[{name:"热门"},{name:"最新"},{name:"豆瓣高分"},{name:"冷门影片"},{name:"华语"},
            {name:"欧美"},{name:"韩国"},{name:"日本"}],
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
            imglist2:[
                {
                    url:require("@/images/p2546997679.jpg"),
                    text:"金发男子",
                    score:8.1
                },
                {
                    url:require("@/images/p2495722363.jpg"),
                    text:"机动战士高达 雷霆宙域 BANDIT",
                    score:8.3
                },                {
                    url:require("@/images/p2495722363.jpg"),
                    text:"机动战士高达 雷霆宙域 BANDIT",
                    score:8.3
                },
                {
                    url:require("@/images/p2495722363.jpg"),
                    text:"机动战士高达 雷霆宙域 BANDIT",
                    score:8.3
                },
                {
                    url:require("@/images/p2540021544.jpg"),
                    text:"拾芳",
                    score:7.1
                },
                {
                    url:require("@/images/p2564470856.jpg"),
                    text:"小怪物",
                    score:6.3
                },
                {
                    url:require("@/images/p2571799297.jpg"),
                    text:"坏家伙们",
                    score:6.5
                },
                {
                    url:require("@/images/p2495722363.jpg"),
                    text:"机动战士高达 雷霆宙域 BANDIT",
                    score:8.3
                },
            ],
            imglist3:[
                {
                    url:require("@/images/p2564470856.jpg"),
                    text:"小怪物",
                    score:6.3
                },
                {
                    url:require("@/images/p2548881555.jpg"),
                    text:"狂赌之渊 电影版",
                    score:6.9
                },                
                {
                    url:require("@/images/p480747492.jpg"),
                    text:"肖申克的救赎",
                    score:9.7
                },
                {
                    url:require("@/images/p2556701763.jpg"),
                    text:"燃烧女子的肖像",
                    score:8.2
                },
                {
                    url:require("@/images/p2569126226.jpg"),
                    text:"毛驴上树",
                    score:6.1
                },
                {
                    url:require("@/images/p2568662107.jpg"),
                    text:"禁闭男童",
                    score:6.1
                },
                {
                    url:require("@/images/p1363250216.jpg"),
                    text:"熔炉",
                    score:9.3
                },
                {
                    url:require("@/images/p2548881555.jpg"),
                    text:"狂赌之渊 电影版",
                    score:6.9
                },
            ],
            imglist4:[
                {
                    url:require("@/images/p2548881555.jpg"),
                    text:"狂赌之渊 电影版",
                    score:6.9
                },
                {
                    url:require("@/images/p2568662107.jpg"),
                    text:"禁闭男童",
                    score:6.1
                },                {
                    url:require("@/images/p511118051.jpg"),
                    text:"这个杀手不太冷",
                    score:9.4
                },
                {
                    url:require("@/images/p2569220021.jpg"),
                    text:"悲惨世界",
                    score:8.4
                },
                {
                    url:require("@/images/p2545472803.jpg"),
                    text:"流浪地球",
                    score:7.9
                },
                {
                    url:require("@/images/p2549177902.jpg"),
                    text:"绿皮书",
                    score:8.9
                },
                {
                    url:require("@/images/p2118532944.jpg"),
                    text:"素媛",
                    score:9.2
                },
                {
                    url:require("@/images/p2540569580.jpg"),
                    text:"Build NEW WORLD 假面骑士",
                    score:7.1
                },
            ],
            imglist5:[
                {
                    url:require("@/images/p2565751382.jpg"),
                    text:"送你上青云",
                    score:7.2
                },
                {
                    url:require("@/images/p2571799297.jpg"),
                    text:"坏家伙们",
                    score:6.5
                },                {
                     url:require("@/images/p2549177902.jpg"),
                    text:"绿皮书",
                    score:8.9
                },
                {
                    url:require("@/images/p2550633838.jpg"),
                    text:"海兽之子",
                    score:8.1
                },
                {
                    url:require("@/images/p2529206747.jpg"),
                    text:"西虹市首富",
                    score:6.5
                },
                {
                    url:require("@/images/p457760035.jpg"),
                    text:"泰坦尼克号",
                    score:9.4
                },
                {
                    url:require("@/images/p480225538.jpg"),
                    text:"杀人回忆",
                    score:8.8
                },
                {
                    url:require("@/images/p2540924496.jpg"),
                    text:"龙猫",
                    score:9.2
                },
            ],
            imglist6:[
                {
                    url:require("@/images/p2568288336.jpg"),
                    text:"罗小黑战记",
                    score:8.2
                },
                {
                    url:require("@/images/p2559465064.jpg"),
                    text:"保险库",
                    score:5.3
                },                {
                    url:require("@/images/p2457983084.jpg"),
                    text:"摔跤吧！爸爸",
                    score:9.1
                },
                {
                    url:require("@/images/p2527221882.jpg"),
                    text:"续·终物语",
                    score:8.7
                },
                {
                    url:require("@/images/p2561716440.jpg"),
                    text:"霸王别姬",
                    score:9.6
                },
                {
                    url:require("@/images/p2315672647.jpg"),
                    text:"疯狂动物城",
                    score:9.2
                },
                {
                    url:require("@/images/p2158166535.jpg"),
                    text:"辩护人",
                    score:9.2
                },
                {
                    url:require("@/images/p2530599636.jpg"),
                    text:"小偷家族",
                    score:8.7
                },
            ],
            imglist7:[
                {
                    url:require("@/images/p2561542089.jpg"),
                    text:"银河补习班",
                    score:6.2
                },
                {
                    url:require("@/images/p2565922635.jpg"),
                    text:"我的A级秘密",
                    score:5.1
                },                
                {
                    url:require("@/images/p2557573348.jpg"),
                    text:"千与千寻",
                    score:9.3
                },
                {
                    url:require("@/images/p2562774107.jpg"),
                    text:"猴子",
                    score:8.1
                },
                {
                    url:require("@/images/p2539661066.jpg"),
                    text:"无名之辈",
                    score:8.1
                },
                {
                    url:require("@/images/p2559011361.jpg"),
                    text:"阿甘正传",
                    score:9.5
                },
                {
                    url:require("@/images/p1816276065.jpg"),
                    text:"7号房的礼物",
                    score:8.8
                },
                {
                    url:require("@/images/p2174346180.jpg"),
                    text:"哈尔的移动城堡",
                    score:9.1
                },
            ],
            imglist8:[
                {
                    url:require("@/images/p2562859558.jpg"),
                    text:"小丑回魂2",
                    score:6.4
                },
                {
                    url:require("@/images/p2540021544.jpg"),
                    text:"拾芳",
                    score:7.1
                },                
                {
                    url:require("@/images/p457760035.jpg"),
                    text:"泰坦尼克号",
                    score:9.4
                },
                {
                    url:require("@/images/p2526007439.jpg"),
                    text:"小树的故事",
                    score:8.7
                },
                {
                    url:require("@/images/p2529571873.jpg"),
                    text:"一出好戏",
                    score:7.1
                },
                {
                    url:require("@/images/p2503997609.jpg"),
                    text:"寻梦环游记",
                    score:9.1
                },
                {
                    url:require("@/images/p2016930906.jpg"),
                    text:"恐怖直播",
                    score:8.8
                },
                {
                    url:require("@/images/p1446261379.jpg"),
                    text:"天空之城",
                    score:9.1
                },
            ],
            imglist9:[
                {
                    url:require("@/images/p2561439800.jpg"),
                    text:"寄生虫",
                    score:8.7
                },
                {
                    url:require("@/images/p2540569580.jpg"),
                    text:"Build NEW WORLD 假面骑士",
                    score:7.1
                },                
                {
                    url:require("@/images/p2315672647.jpg"),
                    text:"疯狂动物城",
                    score:9.2
                },
                {
                    url:require("@/images/p2303850444.jpg"),
                    text:"老人日记",
                    score:8.3
                },
                {
                    url:require("@/images/p2542973862.jpg"),
                    text:"飞驰人生",
                    score:6.9
                },
                {
                    url:require("@/images/p2541280047.jpg"),
                    text:"海王",
                    score:7.6
                },
                {
                    url:require("@/images/p1374786017.jpg"),
                    text:"阳光姐妹淘",
                    score:8.8
                },
                {
                    url:require("@/images/p449897379.jpg"),
                    text:"情书",
                    score:8.9
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
    .middle img{width:820px}
    .middle_text_f{
        width:820px;
        margin:5px auto;
    }
    .middle_text_s1{
        float: left;
        font-size:16px;
        font-weight: 600;
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
        margin:0 ;
    }
    .middle_img_outside a{
        float: left;
        text-decoration: none;
        font-size:13px;
        position: relative;
        margin-right: 13px;
    }
    .middle_img_inside img{
        text-align:center; 
        width:150px;
        height: 200px;
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
