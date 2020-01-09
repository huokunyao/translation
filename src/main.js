// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router';
import store from './store/store';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/public.less';
import md5 from 'js-md5';
import { Message } from 'element-ui';
import './sever/httpServer.js';

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$md5 = md5;
Vue.prototype.msg = Message;

// Vue.http.interceptors.push((request,next)=>{
//   //request.credentials = true; // 接口每次请求会跨域携带cookie
//   //request.method= 'POST'; // 请求方式（get,post）
//   request.headers.set('Content-Type','application/x-www-form-urlencoded') // 请求headers携带参数
//   next(function(response){
//    return response;
//   });
//  })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
})
