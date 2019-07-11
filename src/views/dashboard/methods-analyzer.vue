<template>
  <div class="methods-analyzer">
    <el-card class="box-card" shadow="never">
      <div ref="myEchart" class="chart"></div>
    </el-card>
  </div>
</template>

<script>
// import echarts from '@/utils/echarts';

export default {
  mounted() {
    const myChart = echarts.init(this.$refs.myEchart);
    myChart.setOption({
      title: {
        text: '图书热度排行(前五名)'
      },
      tooltip: {},
      xAxis: {
        data: ['人生海海', '岛上书店', '时间简史', '数据结构', '软件工程']
      },
      yAxis: {},
      series: [{
        name: '请求次数',
        type: 'bar',
        data: [5, 10, 36, 10, 13]
      }]
    });
  }
};
</script>

<style lang="stylus" scoped>
.methods-analyzer
  .chart
    width: 100%
    height: 400px
</style>
