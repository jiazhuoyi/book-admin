<template>
  <div class="order-table">
    <el-table :data="orders">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="book.title" label="书名"></el-table-column>
      <el-table-column label="图片" align="center">
        <template slot-scope="scope">
          <el-popover placement="right" trigger="hover">
            <el-image
              style="width: 240px; height: 320px"
              :src="scope.row.book.image">
            </el-image>
            <el-image
              style="width: 30px; height: 40px"
              :src="scope.row.book.image"
              slot="reference">
            </el-image>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="book.isbn13" label="ISBN"></el-table-column>
      <el-table-column prop="user.name" label="借书人姓名"></el-table-column>
      <el-table-column label="头像" align="center">
        <template slot-scope="scope">
          <el-avatar :src="scope.row.user.avatarUrl"> user </el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="user.emid" label="员工编号"></el-table-column>
      <el-table-column label="状态" width="150">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.status | order_color">
            {{ scope.row.status | order_label }}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column label="订单轨迹" align="center" width="100">
        <template slot-scope="scope">
          <i class="el-icon-zoom-in traces-btn" @click="showTraces(scope.row)"></i>
        </template>
      </el-table-column>
      <el-table-column width="200" align="left">
        <template slot="header" slot-scope="scope">
          <span>{{order_date_msg}}</span>
        </template>
        <template slot-scope="scope">
          <span>{{ scope.row.create_date | order_date(scope.row.status) }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="success"
            size="mini"
            @click="update(scope.row._id, 'order_pass_borrow')"
            v-if="scope.row.status === 0">通过</el-button>
          <el-button type="success"
            size="mini"
            @click="update(scope.row._id, 'order_pass_return')"
            v-if="scope.row.status === 3">通过</el-button>
          <el-button
            type="danger"
            size="mini"
            @click="update(scope.row._id, 'order_reject')"
            v-if="scope.row.status === 0 || scope.row.status === 3">
            驳回
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <order-traces :show="dialogVisible" @closetraces="closetraces" :traces="traces"></order-traces>
  </div>
</template>

<script>
import { updateOrder } from '@/api/order';

import orderTraces from './order-traces';

export default {
  props: ['orders', 'status'],
  components: {
    orderTraces
  },
  data() {
    return {
      dialogVisible: false,
      traces: []
    };
  },
  computed: {
    order_date_msg() {
      const ORDER_TYPE = {
        checkingOrders: '申请时间', //  待审核订单
        borrowingOrders: '到期时间', //  借书中
        returnedOrders: '还书时间', // 已还书
        expiredOrders: '到期时间' // 已过期
      };
      return ORDER_TYPE[this.status] ? ORDER_TYPE[this.status] : '未知错误时间';
    }
  },
  methods: {
    refresh() {
      this.$emit('refresh');
    },
    async update(id, operation) {
      await updateOrder({ id, operation });
      this.refresh();
    },
    showTraces(order) {
      this.traces = [];
      Object.keys(order.traces)
        .map(key => this.traces.push({ date: order.traces[key], content: key }));
      this.dialogVisible = true;
    },
    closetraces() {
      this.dialogVisible = false;
    }
  }
};
</script>

<style lang="stylus" scoped>
.order-table
  .traces-btn:hover
    cursor: pointer
</style>
