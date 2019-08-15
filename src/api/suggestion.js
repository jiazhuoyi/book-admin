import request from '@/utils/request';

export function getSuggestions(type, start, limit) {
  return request({
    url: '/suggestion',
    method: 'get',
    params: {
      type,
      start,
      limit
    }
  });
}

export function updateSuggestion(data) {
  return request({
    url: '/suggestion',
    method: 'put',
    data
  });
}
