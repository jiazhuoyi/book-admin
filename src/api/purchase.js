/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-20 02:45:31
 * @LastEditTime: 2019-08-14 02:44:11
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request';

export function getpurchases(type, start, limit) {
  return request({
    url: '/purchase',
    method: 'get',
    params: {
      type,
      start,
      limit
    }
  });
}

export function updatepurchase(data) {
  return request({
    url: '/purchase',
    method: 'put',
    data
  });
}
