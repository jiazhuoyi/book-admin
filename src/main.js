/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 23:48:38
 * @LastEditTime: 2019-08-16 22:32:26
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import { Message } from 'element-ui';
// import { Button, Select } from 'element-ui';
// import ELEMENT from 'element-ui';
// import 'element-ui/lib/theme-chalk/index.css';
// import 'font-awesome/css/font-awesome.min.css';
// import 'quill/dist/quill.core.css';
// import 'quill/dist/quill.snow.css';
// import 'quill/dist/quill.bubble.css';
import './assets/iconfont/iconfont.css';
import elementUI from './utils/element-ui';

import App from './App';
import router from './router';
import store from './store';
import filters from './utils/filter';
import echarts from './utils/echarts';

Vue.config.productionTip = false;

// Vue.use(ELEMENT);

// Vue.use(Button);
// Vue.use(Select);
Object.keys(elementUI).forEach((name) => {
  // console.log('name:', name);
  // Vue.component(name, elementUI[name]);
  Vue.use(elementUI[name]);
});
Vue.prototype.$message = Message;
Vue.prototype.$echarts = echarts;
Vue.use(filters);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
