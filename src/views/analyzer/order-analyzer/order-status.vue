<template>
  <div class="order-status">
    <el-row :gutter="20" type="flex" justify="space-between">
      <el-col :span="6">
        <widget
          title="待处理订单"
          color="#409eff"
          unit="个"
          image="daishenhe"
          :value="5">
        </widget>
      </el-col>
      <el-col :span="6">
        <widget
          title="借书中订单"
          color="#67c23a"
          unit="个"
          image="jieshu"
          :value="15">
        </widget>
      </el-col>
      <el-col :span="6">
        <widget
          title="已超时订单"
          color="#ed5565"
          unit="个"
          image="guoqi1"
          :value="2">
        </widget>
      </el-col>
      <el-col :span="6">
        <widget
          title="今日新增订单"
          color="#f8ac59"
          unit="个"
          image="tongji1"
          :value="5">
        </widget>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Widget from '@/components/widget';

export default {
  components: {
    Widget
  }
};
</script>

