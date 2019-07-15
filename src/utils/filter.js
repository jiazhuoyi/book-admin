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

const ORDER_STATUS = {
  0: { label: '待审核', color: '' },
  1: { label: '借书中', color: 'success' },
  2: { label: '续借中', color: 'success' },
  3: { label: '续借待审核', color: '' },
  4: { label: '已还书', color: 'info' },
  99: { label: '已过期', color: 'danger' }
};

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
  Vue.filter('role', (value) => {
    const roleMap = {
      manager: '系统用户',
      consumer: '普通用户'
    };
    return roleMap[value];
  });
  Vue.filter('order_label', (value) => {
    if (value === undefined) {
      return '未知状态';
    }
    return ORDER_STATUS[value].label;
  });
  Vue.filter('order_color', (value) => {
    if (value === undefined) {
      return 'info';
    }
    return ORDER_STATUS[value].color;
  });
  Vue.filter('order_date', (value, status) => {
    let time = '';
    if (status === 0 || status === 3) {
      time = value;
    } else if (status === 1 || status === 2) {
      time = value + (15 * 24 * 3600 * 1000);
    } else if (status === 4) {
      time = value;
    } else {
      time = value + (15 * 24 * 3600 * 1000);
    }
    const date = new Date(parseInt(time, 10));
    const year = date.getFullYear();
    const month = fillZero(date.getMonth() + 1);
    const day = fillZero(date.getDate());
    const hour = fillZero(date.getHours());
    const minutes = fillZero(date.getMinutes());
    const seconds = fillZero(date.getSeconds());
    const formatterTime = `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`;
    return formatterTime;
  });
}
