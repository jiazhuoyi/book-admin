const BookData = {
  title: '书名',
  author: '作者',
  publisher: '出版社',
  isbn13: 'ISBN',
  status: '库存',
  createAt: '入库时间'
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

const formatter = {
  bookConvertTableData(sourceArr) {
    const result = sourceArr.map((item) => {
      const targetObj = {};
      Object.keys(item).map((objItem) => {
        if (!BookData[objItem]) {
          return '';
        }
        if (objItem === 'author') {
          const ss = item[objItem];
          targetObj[`${BookData[objItem]}`] = ss.join('/');
        } else if (objItem === 'createAt') {
          targetObj[`${BookData[objItem]}`] = DateFormatter(item[objItem]);
        } else {
          targetObj[`${BookData[objItem]}`] = item[objItem];
        }
        return '';
      });
      return targetObj;
    });
    return result;
  }
};

export default formatter;

