import request from '@/utils/request';

export function query(data) {
  return request({
    url: '/manage/query',
    method: 'post',
    data
  });
}

export function getSystemConfig() {
  return request({
    url: '/manage/system',
    method: 'get'
  });
}

export function getDashboard() {
  return request({
    url: '/manage/dashboard',
    method: 'get'
  });
}