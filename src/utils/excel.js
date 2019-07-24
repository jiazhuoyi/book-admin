import xlsx from 'xlsx';
import fileSaver from 'file-saver';

const excel = {
  exportExcel(data, header, sheetName, excelName) {
    const worksheet = xlsx.utils.json_to_sheet(data, { header });
    const newWorkBook = xlsx.utils.book_new();
    xlsx.utils.book_append_sheet(newWorkBook, worksheet, sheetName);
    const wbout = xlsx.write(newWorkBook, { bookType: 'xlsx', bookSST: false, type: 'array' });
    fileSaver.saveAs(new Blob([wbout],
      { type: 'application/octet-stream' }), excelName);
  }
};

export default excel;
