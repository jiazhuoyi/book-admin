/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-11 23:43:49
 * @LastEditTime: 2019-08-10 17:35:02
 * @LastEditors: Please set LastEditors
 */
import request from '@/utils/request';

export function getBooks(type, start, limit) {
  return request({
    url: '/book',
    method: 'get',
    params: {
      type,
      start,
      limit
    }
  });
}

// export function updateNotices(obj) {
//   return request({
//     url: '/notice',
//     method: 'get',
//     params: {
//       status: obj.status,
//       pageNumber: obj.pageNumber,
//       limit: obj.limit
//     }
//   });
// }

export function submitISBN(data) {
  return request({
    url: '/isbn',
    method: 'post',
    data
  });
}

export function submitBook(data) {
  return request({
    url: '/book',
    method: 'post',
    data
  });
}

export function updateBookAmount(data) {
  return request({
    url: '/book',
    method: 'put',
    data
  });
}
