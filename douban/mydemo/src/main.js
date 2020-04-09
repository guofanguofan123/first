// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import MyHeader from './components/MyHeader'
import MyHeader2 from './components/MyHeader2'
import MyFooter from './components/MyFooter'
import { Button } from 'vant'
Vue.use(Button)
Vue.use(ElementUI);


Vue.component("my-header2",MyHeader2);
Vue.component("my-header",MyHeader);
Vue.component("my-footer",MyFooter);


//5:引入axios模块
import axios from "axios"
//6:配置服务器基础路径
axios.defaults.baseURL="http://127.0.0.1:4000/"
//7:配置保存session信息
axios.defaults.withCredentials=true
//8:axios 注册vue
Vue.prototype.axios = axios

import 'bootstrap3/dist/css/bootstrap.css'
import 'bootstrap3/dist/js/bootstrap.js'
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el:"#app",
  router,
components:{App},
template:'<App>',
  render: h => h(App)
  }).$mount('#app')