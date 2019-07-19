<template>
  <div class="purchase">
    <el-tabs v-model="activeTab" @tab-click="handleClick" type="border-card">
      <el-tab-pane v-for="tab in purchaseTabs" :key="tab.value" :name="tab.value">
        <span slot="label">
          <i :class="`iconfont icon-${tab.icon}`"></i>{{tab.label}}
        </span>
        <el-table :data="purchases" v-if="tab.value === activeTab" v-loading="loading">
          <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
          <el-table-column prop="title" label="书名"></el-table-column>
          <el-table-column prop="author" label="作者"></el-table-column>
          <el-table-column prop="isbn" label="ISBN"></el-table-column>
          <el-table-column label="状态" width="150" align="center">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.status === 1" type="info">已处理</el-tag>
              <el-tag v-else type="success">待处理</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="时间" width="300" align="left">
            <template slot-scope="scope">
              <span>{{ scope.row.create_date | date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="200">
            <template slot-scope="scope">
              <el-button type="success"
                size="mini"
                @click="update(scope.row.id)"
                v-if="scope.row.status === 0">处理</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <div class="page-wrapper">
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
import { getpurchases, updatepurchase } from '@/api/purchase';

export default {
  data() {
    return {
      purchaseTabs: [
        { label: '待处理', value: 'dealingPurchases', icon: 'daishenhe' },
        { label: '所有', value: 'allPurchases', icon: 'dingdan' }
      ],
      activeTab: 'dealingPurchases',
      purchases: [],
      currentPage: 1,
      start: 0,
      limit: 10,
      total: 0,
      loading: false
    };
  },
  async mounted() {
    this.purchases = await this.getSomepurchases(this.activeTab, this.start, this.limit);
  },
  methods: {
    async update(id) {
      await updatepurchase({ id, type: 'purchase_pass' });
      await this.refresh();
    },
    async refresh() {
      this.purchases = await this.getSomepurchases(this.activeTab, this.start, this.limit);
    },
    async handleClick() {
      this.purchases = await this.getSomepurchases(this.activeTab, this.start, this.limit);
    },
    async handlePaginationClick() {
      this.purchases = await this.getSomepurchases(
        this.activeTab,
        (this.currentPage - 1) * this.limit,
        this.limit);
    },
    async getSomepurchases(type, start, limit) {
      this.loading = true;
      const result = await getpurchases(type, start, limit);
      this.total = result.total;
      this.loading = false;
      return result.purchases;
    }
  }
};
</script>

<style lang="stylus" scoped>
.purchase
  text-align: left
  .page-wrapper
    padding: 15px 0
    display: flex
    justify-content: flex-end
</style>
