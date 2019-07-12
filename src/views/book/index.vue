<template>
  <div class="book">
    <div class="header">
      <div class="search">
        书名：
        <el-input placeholder="请输入书名"  style="width: 300px;" v-model="serachName"></el-input>
        <el-button type="primary" style="margin-left: 15px;" icon="el-icon-search">查询</el-button>
      </div>
      <div class="operation">
        <el-button icon="el-icon-refresh" circle></el-button>
        <el-button type="success">图书入库</el-button>
        <el-button>导出Excel</el-button>
      </div>
    </div>
    <el-tabs v-model="activeTab" @tab-click="handleClick" type="border-card" v-loading="loading">
      <el-tab-pane v-for="tab in bookTabs" :key="tab.value" :name=tab.value>
        <span slot="label"><i :class="`iconfont icon-${tab.icon}`"></i> {{tab.label}}</span>
        <book-table v-if="activeTab === tab.value" :books="books"></book-table>
      </el-tab-pane>
    </el-tabs>
    <div class="page-wrapper">
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
  methods: {
    async getSomeBooks(type, start, limit) {
      this.loading = true;
      const result = await getBooks(type, start, limit);
      const books = result.books;
      this.total = result.total;
      this.loading = false;
      return books;
    },
    async handlePaginationClick() {
      this.books = await this.getSomeBooks(
        this.activeTab,
        (this.currentPage - 1) * this.limit,
        this.limit);
    },
    async handleClick() {
      this.books = await this.getSomeBooks(this.activeTab, 0, this.limit);
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

