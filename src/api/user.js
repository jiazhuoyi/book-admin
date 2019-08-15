/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 23:48:38
 * @LastEditTime: 2019-08-14 02:44:33
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request';

export function updateUserInfo(data) {
  return request({
    url: '/user-info',
    method: 'put',
    data
  });
}

export function getUserInfo() {
  return request({
    url: '/user-info',
    method: 'get'
  });
}

export function getLoginlogs() {
  return request({
    url: '/login-logs',
    method: 'get'
  });
}

export function updatePassword(data) {
  return request({
    url: '/password',
    method: 'put',
    data
  });
}

export function getQiniuToken() {
  return request({
    url: '/qiniu-token',
    method: 'get'
  });
}

export function signup(data) {
  return request({
    url: '/signup',
    method: 'post',
    data
  });
}

export function getUsers(type, start, limit) {
  return request({
    url: '/users',
    method: 'get',
    params: {
      type,
      start,
      limit
    }
  });
}

export function updateUser(data) {
  return request({
    url: '/user',
    method: 'put',
    data
  });
}
