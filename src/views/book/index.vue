<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-11 02:57:13
 * @LastEditTime: 2019-08-16 22:48:06
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="book">
    <div class="header">
      <div class="search">
        书名：
        <el-input placeholder="请输入书名"  style="width: 300px;" v-model="serachName"></el-input>
        <el-button
          type="primary"
          style="margin-left: 15px;"
          @click="search"
          icon="el-icon-search">
          查询
        </el-button>
      </div>
      <div class="operation">
        <el-button icon="el-icon-refresh" circle :loading="loading" @click="refresh"></el-button>
        <router-link to="/book/add">
          <el-button type="success">图书入库</el-button>
        </router-link>
        <el-button @click="onExport">导出Excel</el-button>
        <!-- <el-dropdown trigger="click">
          <el-button @click="onExport">导出Excel</el-button>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              导出({{currentLabel}})第{{currentPage}}页数据
            </el-dropdown-item>
            <el-dropdown-item>导出({{currentLabel}})所有页数据</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown> -->
      </div>
    </div>
    <el-tabs v-model="activeTab" @tab-click="handleClick" type="border-card" v-loading="loading">
      <el-tab-pane v-for="tab in bookTabs" :key="tab.value" :name="tab.value">
        <span slot="label"><i :class="`iconfont icon-${tab.icon}`"></i> {{tab.label}}</span>
        <book-table
          :id="tab.value"
          @refresh="refresh"
          v-if="activeTab === tab.value"
          :books="books">
        </book-table>
      </el-tab-pane>
    </el-tabs>
    <div class="page-wrapper" v-if="!serachStatus">
      <el-pagination
        :page-size="limit"
        :current-page.sync="currentPage"
        @current-change="handlePaginationClick"
        background
        layout="total, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getBooks } from '@/api/book';
import { query } from '@/api/api';
import formatter from '@/utils/formatterTable';
import excel from '@/utils/excel';
import bookTable from './book-table';

export default {
  components: {
    bookTable
  },
  data() {
    return {
      activeTab: 'all',
      currentPage: 1,
      books: [],
      start: 0,
      limit: 10,
      total: 0,
      loading: false,
      serachName: '',
      serachStatus: false, // 分页器根据该值判断是原tab分页还是搜索的结果分页
      bookTabs: [
        { label: '所有图书', value: 'all', icon: 'daishenhe' },
        { label: '可借图书', value: 'available', icon: 'jieshu' },
        { label: '不可借图书', value: 'unavailable', icon: 'bukexuan' }
      ]
    };
  },
  async mounted() {
    this.books = await this.getSomeBooks(this.activeTab, 0, this.limit);
  },
  computed: {
    currentLabel() {
      return (this.bookTabs.find(tab => tab.value === this.activeTab)).label;
    }
  },
  methods: {
    onExport() {
      // 根据el-table生成excel
      // const node = document.getElementById(this.activeTab);
      // const tableNode = node.getElementsByClassName('el-table');
      // const wb = xlsx.utils.table_to_book(tableNode[0]);
      // const wbout = xlsx.write(wb, { bookType: 'xlsx', bookSST: true, type: 'array' });
      // fileSaver.saveAs(new Blob([wbout], { type: 'application/octet-stream' }), '图书.xlsx');
      const data = formatter.bookConvertTableData(this.books);
      excel.exportExcel(data,
        ['书名', '作者', '出版社', 'ISBN', '库存', '入库时间'],
        '图书', `${this.currentLabel}第${this.currentPage}页.xlsx`);
    },
    async refresh() {
      this.books = await this.getSomeBooks(this.activeTab, 0, this.limit);
    },
    async getSomeBooks(type, start, limit) {
      this.books = [];
      this.loading = true;
      const result = await getBooks(type, start, limit);
      const books = result.books;
      this.total = result.total;
      this.loading = false;
      return books;
    },
    async handlePaginationClick() {
      if (this.serachStatus) {
        await this.commonSearchApi(
          (this.currentPage - 1) * this.limit,
          this.limit);
        return;
      }
      this.books = await this.getSomeBooks(
        this.activeTab,
        (this.currentPage - 1) * this.limit,
        this.limit);
    },
    async handleClick() {
      this.serachStatus = false;
      this.currentPage = 1;
      this.books = await this.getSomeBooks(this.activeTab, 0, this.limit);
    },
    async commonSearchApi(start, limit) {
      this.loading = true;
      this.activeTab = 'all';
      this.serachStatus = true;
      const result = await query({
        type: 'search_book',
        value: this.serachName,
        start,
        limit
      });
      this.books = result.data;
      this.total = result.total;
      this.loading = false;
    },
    async search() {
      await this.commonSearchApi(this.start, this.limit);
    }
  }
};
</script>

<style lang="stylus" scoped>
.book
  .header
    display: flex
    justify-content: space-between
    padding: 0px 0 15px 0
  .page-wrapper
    padding: 15px 0
    display: flex
    justify-content: flex-end
</style>

