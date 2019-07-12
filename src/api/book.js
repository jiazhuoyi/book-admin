import request from '@/utils/request';

export function getBooks(type, start, limit) {
  return request({
    url: '/manage/books',
    method: 'get',
    params: {
      type,
      start,
      limit
    }
  });
}

export function updateNotices(obj) {
  return request({
    url: '/notice',
    method: 'get',
    params: {
      status: obj.status,
      pageNumber: obj.pageNumber,
      limit: obj.limit
    }
  });
}
