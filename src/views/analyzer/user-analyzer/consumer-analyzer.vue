<template>
  <div class="consumer-analyzer">
    <el-card class="box-card" shadow="never">
      <div ref="myEchart" class="chart"></div>
    </el-card>
  </div>
</template>

<script>
import echarts from 'echarts';

export default {
  mounted() {
    const myChart = echarts.init(this.$refs.myEchart);
    myChart.setOption({
      title: {
        text: '普通用户状态统计'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
      },
      legend: {
        data: ['有效', '未绑定', '待处理'],
        right: '10%'
      },
      series: [{
        type: 'pie',
        radius: ['40%', '60%'],
        data: [
          { value: 50, name: '有效' },
          { value: 5, name: '未绑定' },
          { value: 10, name: '待处理' }
        ]
      }]
    });
  }
};
</script>

<style lang="stylus" scoped>
.consumer-analyzer
  .chart
    width: 100%
    height: 300px
</style>
