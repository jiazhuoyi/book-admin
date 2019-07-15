<template>
  <div class="order">
    <search></search>
    <!-- <el-tabs v-model="activeTab" type="card">
      <el-tab-pane name="checking">
        <span slot="label"><i class="iconfont icon-daishenhe"></i> 待审核</span>
        待审核
      </el-tab-pane>
      <el-tab-pane name="borrowing">
        <span slot="label"><i class="iconfont icon-jieshu"></i> 借书中</span>
        借书中
      </el-tab-pane>
      <el-tab-pane label="已还书" name="returned">
        <span slot="label"><i class="iconfont icon-huanshuzhong"></i> 已还书</span>
        已还书f
      </el-tab-pane>
      <el-tab-pane label="已过期" name="expired">
        <span slot="label"><i class="iconfont icon-guoqi1"></i> 已过期</span>
        已过期
      </el-tab-pane>
    </el-tabs> -->
    <el-tabs
      v-model="activeTab"
      @tab-click="handleClick"
      type="border-card">
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
  </div>
</template>

<script>
import { getOrders } from '@/api/order';
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
      orderTabs: [
        { label: '待审核', value: 'checkingOrders', icon: 'daishenhe' },
        { label: '借书中', value: 'borrowingOrders', icon: 'jieshu' },
        { label: '已还书', value: 'returnedOrders', icon: 'huanshuzhong' },
        { label: '已过期', value: 'expiredOrders', icon: 'guoqi1' }
      ],
      start: 0,
      limit: 10
    };
  },
  async mounted() {
    this.orders = (await getOrders('checkingOrders', 0, this.limit)).orders;
  },
  methods: {
    async getSomeOrders(type, start, limit) {
      const result = await getOrders(type, 0, limit);
      this.total = result.total;
      return result.orders;
    },
    refresh() {
      this.getSomeOrders(this.activeTab, this.start, this.limit);
    },
    async handleClick() {
      this.orders = await this.getSomeOrders(this.activeTab, 0, this.limit);
    }
  }
};
</script>
