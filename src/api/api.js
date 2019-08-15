/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-18 01:53:08
 * @LastEditTime: 2019-08-14 02:43:33
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request';

export function query(data) {
  return request({
    url: '/query',
    method: 'post',
    data
  });
}

export function getSystemConfig() {
  return request({
    url: '/system',
    method: 'get'
  });
}

export function getDashboard() {
  return request({
    url: '/dashboard',
    method: 'get'
  });
}
