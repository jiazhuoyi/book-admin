import request from '@/utils/request';

export function getOrders(type, start, limit) {
  return request({
    url: '/manage/orders',
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
    url: '/manage/order',
    method: 'put',
    data
  });
}
