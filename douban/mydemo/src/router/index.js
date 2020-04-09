import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import cindex from '@/components/cindex.vue'
import page2 from '@/components/page2.vue'
import subject from '@/components/subject.vue'
import Login from '@/components/Login'
import Mypagination from '@/components/Mypagination'
import Search from '@/components/Search'
import MovieList from '@/components/MovieList'
import index from '@/components/index'
import { Rate } from 'vant';
Vue.use(Rate);
import $ from 'jquery' ;
import { Pagination } from 'vant';
Vue.use(Pagination); 
Vue.use(Router)

export default new Router({
  routes: [
    {path:'/index',component:index},
    {path:'/MovieList',component:MovieList},
    {path:'/Search',component:Search},
    {path:'/Mypagination',component:Mypagination},
    {path:'/Login',component:Login},
    {path:'/subject/:sid',component:subject},
    {path:'/cindex',component:cindex},
  
    {path:'/page2',component:page2},
   
      {path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
