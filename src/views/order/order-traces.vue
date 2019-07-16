<template>
  <div class="order-traces">
    <el-dialog
      title="订单轨迹"
      :visible.sync="show"
      width="30%"
      :before-close="handleClose">
      <el-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(trace, index) in traces"
          :key="index"
          :timestamp="trace.date | date">
          {{trace.content | trace_status}}
        </el-timeline-item>
      </el-timeline>
    </el-dialog>
  </div>
</template>

<script>
const TRACE_STATUS = {
  borrow_apply: '申请借书',
  borrow_checked: '审核通过',
  rejected: '申请被驳回',
  renew: '开始续期',
  return_apply: '申请还书',
  return_checked: '审核通过'
};

export default {
  props: ['show', 'traces'],
  data() {
    return {
      reverse: false
    };
  },
  filters: {
    trace_status(value) {
      return TRACE_STATUS[value];
    }
  },
  methods: {
    handleClose() {
      this.$emit('closetraces');
    }
  }
};
</script>

