/*
 * 全局使用的 filters
 */
function leftpad(str, len, ch = ' ') {
  let i = 0;
  let str1 = `${str}`;
  const len1 = len - str1.length;
  while (i < len1) {
    str1 = ch + str;
    i += 1;
  }
  return str1;
}

function fillZero(str, len = 2) {
  return leftpad(str, len, '0');
}


export default function (Vue) {
  Vue.filter('date', (value) => {
    const date = new Date(parseInt(value, 10));
    const year = date.getFullYear();
    const month = fillZero(date.getMonth() + 1);
    const day = fillZero(date.getDate());
    const hour = fillZero(date.getHours());
    const minutes = fillZero(date.getMinutes());
    const seconds = fillZero(date.getSeconds());
    return value ? `${year}-${month}-${day} ${hour}:${minutes}:${seconds}` : '';
  });
}
