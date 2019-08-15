/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-15 18:59:07
 * @LastEditTime: 2019-07-15 18:59:07
 * @LastEditors: your name
 */
import request from '@/utils/request';

export function getOrders(type, start, limit) {
  return request({
    url: '/orders',
    method: 'get',
    params: {
      type,
      start,
      limit
    }
  });
}

export function updateOrder(data) {
  return request({
    url: '/order',
    method: 'put',
    data
  });
}
