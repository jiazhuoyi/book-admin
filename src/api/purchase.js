import request from '@/utils/request';

export function getpurchases(type, start, limit) {
  return request({
    url: '/manage/purchase',
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
    url: '/manage/purchase',
    method: 'put',
    data
  });
}
