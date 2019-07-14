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

export function submitISBN(data) {
  return request({
    url: '/manage/isbn',
    method: 'post',
    data
  });
}

export function submitBook(data) {
  return request({
    url: '/manage/book',
    method: 'post',
    data
  });
}

export function updateBookAmount(data) {
  return request({
    url: '/manage/book/amount',
    method: 'put',
    data
  });
}
