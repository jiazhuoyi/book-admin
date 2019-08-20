<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-15 13:23:00
 * @LastEditTime: 2019-08-16 22:34:34
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="user-analyzer">
    <el-card class="box-card" shadow="never">
      <div ref="myEchart" class="chart"></div>
    </el-card>
  </div>
</template>

<script>
export default {
  mounted() {
    const myChart = this.$echarts.init(this.$refs.myEchart);
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
    height: 300px
</style>
