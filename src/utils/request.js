import axios from 'axios';
import router from '@/router';
import Vue from 'vue';
// import store from '@/store';
// import { Loading } from 'element-ui';

// const url = '/api/v1';
// const url = `${process.env.API_HOST}/api/v1`;
// let loadingInstance = '';

const url = process.env.NODE_ENV === 'production' ? `${process.env.API_HOST}/api/v1` : '/api/v1';

const request = axios.create({
  baseURL: url,
  timeout: 1000
});

request.interceptors.request.use((config) => {
  if (config.url === 'manage/login' || config.url === '/signup') {
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
  console.log('发生错误:', error.response);
  switch (error.response.status) {
    case 404:
      Vue.prototype.$message.error('接口错误');
      break;
    case 401:
      router.push({ path: '/login', query: { redirect: window.location.pathname } });
      break;
    default:
      break;
  }
});

export default request;
