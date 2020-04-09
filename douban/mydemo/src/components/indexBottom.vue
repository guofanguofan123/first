<template>
<div class="container">
    <div class="top">
        <span class="span1">最受欢迎的影评</span>
        <a href="">
        <span>更多热门影评>></span>
        <span>新片影评>></span>
        </a>
    </div>
    <div class="ping">
        <hr>
        <div class="image">
        <a href="https://movie.douban.com/subject/1295409">
            <img :src="list[0].url"/>
        </a>
        </div>
        <div class="word">
        <span class="span2"><a href="https://movie.douban.com/subject/1295409">{{list[0].main}}</a></span>
        <span class="span3">{{list[0].user}} 评论 {{list[0].movname}}</span>
        <span class="span4">{{list[0].showspec}}<a href="https://movie.douban.com/subject/1295409">(全文)</a></span>
        </div>
        <hr>
        <div class="image">
        <a href="https://movie.douban.com/subject/26791452/">
            <img :src="list[1].url"/>
        </a>
        </div>
        <div class="word">
        <span class="span2"><a href="https://movie.douban.com/subject/1295409">{{list[0].main}}</a></span>
        <span class="span3">{{list[1].user}} 评论 {{list[1].movname}}</span>
        <span class="span4">{{list[1].showspec}}<a href="https://movie.douban.com/subject/26791452">(全文)</a></span>
        </div>
        <hr>
        <div class="image">
        <a href="https://movie.douban.com/subject/26985127/">
            <img :src="list[2].url"/>
        </a>
        </div>
        <div class="word">
        <span class="span2"><a href="https://movie.douban.com/subject/1295409">{{list[0].main}}</a></span>
        <span class="span3">{{list[2].user}} 评论 {{list[2].movname}}</span>
        <span class="span4">{{list[2].showspec}}<a href="https://movie.douban.com/subject/26985127">(全文)</a></span>
        </div>
        <hr>
        <div class="image">
        <a href="https://movie.douban.com/subject/30254589/">
            <img :src="list[3].url"/>
        </a>
        </div>
        <div class="word">
        <span class="span2"><a href="https://movie.douban.com/subject/1295409">{{list[0].main}}</a></span>
        <span class="span3">{{list[3].user}} 评论 {{list[3].movname}}</span>
        <span class="span4">{{list[3].showspec}}<a href="https://movie.douban.com/subject/30254589">(全文)</a></span>
        </div>
    </div>
</div>
</template>

<script>
export default{
    name:"indexBottom",
    data(){
        return{
            list:[
                {
                    url:require('@/images/p2272146906.jpg'),
                    main:"这是最好的结局",
                    user:"逆袭的泥巴",
                    movname:"《纵横四海》",
                    showspec:"其实我相信亚Joe一直都爱着红豆的，红豆最后是否还喜欢亚占我不确定，但是我觉得电影的结局是最好的结局。 亚占和亚Joe对爱的表达方式不同，亚占给人的感觉是体贴的，对红豆的照顾是全身心全方位的。亚Joe的对爱..."
                },
                {
                    url:require('@/images/p2543801665.jpg'),
                    main:"我不是来和女主比惨的，我真不是。",
                    user:"ran",
                    movname:"《塔利》",
                    showspec:"今天是我二宝来到这个世界的第21天。我今年35岁。怀孕六个月的时候因看不惯小人作威作福，一气之下傲娇离职。后来大着肚子去了个小创业公司，基本没要工资，还得自己贴钱交社保，结果公司为了省钱这个月拖到月底..."
                },
                {
                    url:require('@/images/p2529571873.jpg'),
                    main:"从《一出好戏》谈反乌托邦：世界尽头与冷酷仙境",
                    user:"夜第七章",
                    movname:"《一出好戏》",
                    showspec:"一 人类文明的「蝇王」式困境 看了黄渤的《一出好戏》，无端地想起了《蝇王》，虽然这不是他剧本的原型，美剧《迷失》和特稿《太平洋逃杀记》更接近于他对于故事的想象。 但《一出好戏》的剧本结构能与《蝇王》相..."
                },
                {
                    url:require('@/images/p2528959166.jpg'),
                    main:"豆瓣9.7，这部去年爆红一时的纪录片，今年有必要接着吹",
                    user:"大象点映",
                    movname:"《最后的棒棒》",
                    showspec:"作者：林春宵 2015年，一部极其朴实、诚恳的纪录片悄无声息地出现，当时没能激起什么水花，没背景没资本没观众没口碑，整整13集，近400分钟，以2.6万的低价卖给了爱奇艺。 去年，这部纪录片剧集，以遗珠之态被众..."
                }
            ]
        }
    }
}
</script>

<style scoped>
.word a{
    display:inline-block;
    color:#37a;
    cursor: pointer;
}
.word .span4 a:hover{
    color:#fff;
    background-color:#125588;
}
.span2{
    display:inline-block;
    width:690px;
    text-align:left;
    color:#37a;
    cursor: pointer;
    font-size:15px;
    margin:8px 0 3px 0;
}
.span3{
    display:block;
    width:690px;
    text-align:left;
    font-size:14px;
    color:#666;
    margin:8px 0 3px 0;
}
.span4{
    display:block;
    width:690px;
    text-align:left;
    font-size:14px;
    margin:8px 0 3px 0;
}
.ping{
    width:820px;
}
img{
    width:100px;
    height:140px;
    margin:0;
    float:left;
}
img:hover{
    opacity:0.8;
}
.image{
    width:130px;
    height:150px;
    margin:0;
    float:left;
}
.word{
    width:690px;
    height:150px;
    margin:0;
    float:left;    
}
.container{
    width:820px;
    margin:0 auto;
}
.top span{
    float:left;
}
.top{
    width:820px;height:20px;
    margin:0 0 10px 0; 
}
a span{
    margin:0 0 0 10px;
    font-size:14px;
    color:#37a;
}
a{
    text-decoration:none;
}
hr{
    width:820px;
    opacity:0.2;
}
</style>
