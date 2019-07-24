import assign from 'lodash.assign';

const BookData = {
  title: '书名',
  author: '作者',
  publisher: '出版社',
  isbn13: 'ISBN',
  status: '库存',
  createAt: '入库时间'
};

const UserData = {
  nickName: '微信昵称',
  name: '姓名',
  emid: '员工编号',
  status: '状态',
  role: '角色',
  createAt: '申请时间'
};
const userStatusMap = {
  0: '未绑定',
  1: '待审核',
  2: '有效',
  6: '被驳回'
};

const OrderData = {
  title: '书名',
  isbn13: 'ISBN',
  name: '借书人姓名',
  emid: '员工编号',
  status: '状态',
  create_date: '时间'
};

const ORDER_STATUS = {
  0: '待审核',
  1: '借书中',
  2: '续借中',
  3: '续借待审核',
  4: '已还书',
  99: '已过期'
};

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

function DateFormatter(value) {
  const date = new Date(parseInt(value, 10));
  const year = date.getFullYear();
  const month = fillZero(date.getMonth() + 1);
  const day = fillZero(date.getDate());
  const hour = fillZero(date.getHours());
  const minutes = fillZero(date.getMinutes());
  const seconds = fillZero(date.getSeconds());
  return value ? `${year}-${month}-${day} ${hour}:${minutes}:${seconds}` : '';
}

/**
 * @description: 遍历对象数组，pick数组, 将对象索引变成中文
 * @param {type}  fn(item, objItem)  item: 数组遍历的当前对象  objItem: 当前对象的索引
 * @return: excel所需的数据
 */

function ArrayMap(arr, DataMap, fn) {
  const result = arr.map((item) => {
    const targetObj = {};
    Object.keys(item).map((objItem) => {
      if (DataMap[objItem]) {
        targetObj[`${DataMap[objItem]}`] = fn(item, objItem);
      }
      return '';
    });
    return targetObj;
  });
  return result;
}


const formatter = {
  /**
   * @description: 将订单对象数组转化成excel需要的格式
   * @param {type} sourceArr 源数组
   * @return: excel所需的数据
   */
  orderConvertTableData(sourceArr) {
    const arr = sourceArr.map(item => assign(item, item.book, item.user));
    const result = ArrayMap(arr, OrderData, (item, objItem) => {
      if (objItem === 'status') {
        return item[objItem] !== 'undefined' ? ORDER_STATUS[`${item[objItem]}`] : '未知状态';
      } else if (objItem === 'create_date') {
        return DateFormatter(item[objItem]);
      }
      return item[objItem];
    });
    return result;
  },
  userConvertTableData(sourceArr) {
    const result = ArrayMap(sourceArr, UserData, (item, objItem) => {
      if (objItem === 'createAt') {
        return DateFormatter(item[objItem]);
      } else if (objItem === 'role') {
        return item[objItem] === 'manager' ? '管理员' : '普通用户';
      } else if (objItem === 'status') {
        return item[objItem] !== 'undefined' ? userStatusMap[`${item[objItem]}`] : '未知状态';
      }
      return item[objItem];
    });
    return result;
  },
  bookConvertTableData(sourceArr) {
    const result = ArrayMap(sourceArr, BookData, (item, objItem) => {
      if (!BookData[objItem]) {
        return '';
      }
      if (objItem === 'author') {
        const ss = item[objItem];
        return ss.join('/');
      } else if (objItem === 'createAt') {
        return DateFormatter(item[objItem]);
      }
      return item[objItem];
    });
    return result;
  }
};

export default formatter;

