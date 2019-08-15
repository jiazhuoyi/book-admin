<template>
  <div class="order">
    <order-status></order-status>
    <div class="pie">
      <el-row :gutter="20">
        <el-col :span="8">
          <order-analyzer></order-analyzer>
        </el-col>
        <el-col :span="8">
          <order-analyzer></order-analyzer>
        </el-col>
        <el-col :span="8">
          <order-analyzer></order-analyzer>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import OrderAnalyzer from './order-analyzer/order-analyzer';
import OrderStatus from './order-analyzer/order-status';

export default {
  components: {
    OrderAnalyzer,
    OrderStatus
  }
};
</script>

<style lang="stylus" scoped>
.order
  .pie
    margin-top: 20px
</style>
