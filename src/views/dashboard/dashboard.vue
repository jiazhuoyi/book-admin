<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 23:48:38
 * @LastEditTime: 2019-08-24 03:16:28
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="dashboard">
    <head-info :user="userTotal" :order="orderTotal"></head-info>
    <widget
      :order="orderCount"
      :user="userCount"
      :book="bookCount"
      :purchase="purchaseCount"
      :suggestion="suggestionCount"
    >
    </widget>
    <div class="analyzer-wrapper">
      <el-row :gutter="10">
        <el-col :span="12">
          <user-analyzer></user-analyzer>
        </el-col>
        <el-col :span="12">
          <methods-analyzer></methods-analyzer>
        </el-col>
      </el-row>
    </div>
    <div class="total-analyzer">
      <el-row :gutter="10">
        <el-col :span="6">
          <order-analyzer></order-analyzer>
        </el-col>
        <el-col :span="6">
          <user-total></user-total>
        </el-col>
        <el-col :span="6">
          <consumer-analyzer></consumer-analyzer>
        </el-col>
        <el-col :span="6">
          <book-analyzer></book-analyzer>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import { getDashboard } from '@/api/api';
import HeadInfo from '@/views/dashboard/head-info';
import UserAnalyzer from '@/views/dashboard/user-analyzer';
import UserTotal from '@/views/dashboard/user-total';
import ConsumerAnalyzer from '@/views/dashboard/consumer-analyzer';
import MethodsAnalyzer from '@/views/dashboard/methods-analyzer';
import BookAnalyzer from '@/views/dashboard/components/book-analyzer';
import OrderAnalyzer from '@/views/dashboard/order-analyzer';
import Widget from '@/views/dashboard/widget';

export default {
  components: {
    HeadInfo,
    UserAnalyzer,
    MethodsAnalyzer,
    UserTotal,
    ConsumerAnalyzer,
    BookAnalyzer,
    Widget,
    OrderAnalyzer
  },
  data() {
    return {
      orderTotal: 0,
      userTotal: 0,
      orderCount: 0,
      userCount: 0,
      bookCount: 0,
      purchaseCount: 0,
      suggestionCount: 0
    };
  },
  async mounted() {
    const result = await getDashboard();
    this.orderTotal = result.orderTotal;
    this.userTotal = result.userTotal;
    this.orderCount = result.orderCount;
    this.userCount = result.userCount;
    this.bookCount = result.bookCount;
    this.purchaseCount = result.purchaseCount;
    this.suggestionCount = result.suggestionCount;
  }
};
</script>


<style lang="stylus" scoped>
.dashboard
  .analyzer-wrapper
    width: 100%
    padding: 10px 0
</style>
