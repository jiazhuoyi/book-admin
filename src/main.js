/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 23:48:38
 * @LastEditTime: 2019-09-03 17:47:07
 * @LastEditors: Please set LastEditors
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Fragment from 'vue-fragment';
import { Message } from 'element-ui';
import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';
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

Object.keys(elementUI).forEach((name) => {
  Vue.use(elementUI[name]);
});
Vue.prototype.$message = Message;
Vue.prototype.$echarts = echarts;
Vue.use(Fragment.Plugin);
Vue.use(filters);

Sentry.init({
  dsn: 'https://0621c40636ac41da80ae187085661592@sentry.io/1540307',
  integrations: [new Integrations.Vue({ Vue, attachProps: true })]
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
});
