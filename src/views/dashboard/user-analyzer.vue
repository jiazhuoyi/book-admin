<template>
  <div class="user-analyzer">
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
        text: '活跃用户排行(前五名)'
      },
      tooltip: {},
      xAxis: {
        data: ['张三', '李四', '王五', '孙六', '王麻子']
      },
      yAxis: {},
      series: [{
        name: '借阅次数',
        type: 'bar',
        data: [5, 10, 36, 10, 13]
      }]
    });
  }
};
</script>

<style lang="stylus" scoped>
.user-analyzer
  .chart
    width: 100%
    height: 400px
</style>
