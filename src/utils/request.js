/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 23:48:38
 * @LastEditTime: 2019-08-15 02:35:50
 * @LastEditors: Please set LastEditors
 */
import axios from 'axios';
import router from '@/router';
import Vue from 'vue';
// import store from '@/store';
// import { Loading } from 'element-ui';

// const url = '/api/v1';
// const url = `${process.env.API_HOST}/api/v1`;
// let loadingInstance = '';

const url = process.env.NODE_ENV === 'production' ? `${process.env.API_HOST}/api/v1/manage` : '/api/v1/manage';

const request = axios.create({
  baseURL: url,
  timeout: 3000
});

request.interceptors.request.use((config) => {
  if (config.url === 'manage/login' || config.url === 'manage/signup') {
    return config;
  }
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.common.Authorization = `Bearer ${token}`;
  } else {
    router.push({ path: '/login', query: { redirect: window.location.pathname } });
  }
  return config;
});

request.interceptors.response.use((response) => {
  if (response.data.token) {
    localStorage.setItem('token', response.data.token);
  }
  return Promise.resolve(response.data);
}, (error) => {
  const data = error.response && error.response.data;
  switch (error.response.code) {
    case 404:
      Vue.prototype.$message.error('接口不存在');
      break;
    case 401:
      router.push({ path: '/login', query: { redirect: window.location.pathname } });
      break;
    case 403:
      Vue.prototype.$message.error(`code:${data.code}  ${data.message}`);
      if (data.code === 4010) {
        router.push({ path: '/login', query: { redirect: window.location.pathname } });
      }
      break;
    default:
      break;
  }
});

export default request;
