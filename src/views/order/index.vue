<template>
  <div class="order">
    <search
      :loading="loading"
      @refresh="refresh"
      @clickbtn="search"
      v-bind.sync="searchValue">
    </search>
    <el-tabs
      v-model="activeTab"
      @tab-click="handleClick"
      type="border-card"
      v-loading="loading">
      <el-tab-pane v-for="tab in orderTabs" :key="tab.value" :name="tab.value">
        <span slot="label"><i :class="`iconfont icon-${tab.icon}`"></i> {{tab.label}}</span>
        <order-table
          @refresh="refresh"
          v-if="activeTab === tab.value"
          :orders="orders"
          :status="activeTab">
        </order-table>
      </el-tab-pane>
    </el-tabs>
    <div class="page-wrapper" v-if="!serachStatus">
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="limit"
        background
        @current-change="handlePaginationClick"
        layout="total, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getOrders } from '@/api/order';
import { query } from '@/api/api';
import search from './search';
import orderTable from './order-table';

export default {
  components: {
    search,
    orderTable
  },
  data() {
    return {
      activeTab: 'checkingOrders',
      orders: [],
      loading: false,
      orderTabs: [
        { label: '待审核', value: 'checkingOrders', icon: 'daishenhe' },
        { label: '借书中', value: 'borrowingOrders', icon: 'jieshu' },
        { label: '已还书', value: 'returnedOrders', icon: 'huanshuzhong' },
        { label: '已过期', value: 'expiredOrders', icon: 'guoqi1' },
        { label: '全部', value: 'allOrders', icon: 'tushu' }
      ],
      start: 0,
      limit: 10,
      currentPage: 1,
      total: 0,
      // bookname: ''
      searchValue: {
        bookname: '',
        username: ''
      },
      serachStatus: false
    };
  },
  async mounted() {
    this.orders = await this.getSomeOrders(this.activeTab, this.start, this.limit);
  },
  methods: {
    async getSomeOrders(type, start, limit) {
      this.loading = true;
      const result = await getOrders(type, start, limit);
      this.total = result.total;
      this.loading = false;
      return result.orders;
    },
    async refresh() {
      this.serachStatus = false;
      this.orders = await this.getSomeOrders(this.activeTab, this.start, this.limit);
    },
    async handleClick() {
      this.serachStatus = false;
      this.currentPage = 1;
      this.orders = await this.getSomeOrders(this.activeTab, 0, this.limit);
    },
    async handlePaginationClick() {
      this.orders = await this.getSomeOrders(this.activeTab,
        (this.currentPage - 1) * this.limit,
        this.limit);
    },
    async commonSearchApi(start, limit) {
      this.loading = true;
      this.activeTab = 'allOrders';
      this.serachStatus = true;
      const result = await query({
        type: 'search_order',
        value: {
          search_user: this.searchValue.username,
          search_book: this.searchValue.bookname
        },
        start,
        limit
      });
      this.orders = result.data;
      this.loading = false;
    },
    async search() {
      await this.commonSearchApi(this.start, this.limit);
    }
  }
};
</script>

<style lang="stylus" scoped>
.order
  text-align: left
  .page-wrapper
    padding: 15px 0
    display: flex
    justify-content: flex-end
</style>
