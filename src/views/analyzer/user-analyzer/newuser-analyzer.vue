<template>
  <div class="user-method">
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
        text: '新增用户统计(近10天)'
      },
      // grid: {
      //   left: '2%',
      //   right: '10%',
      //   top: '12%',
      //   bottom: '18%',
      //   containLabel: true
      // },
      tooltip: {
        formatter: '{b}: 新增{c}位'
      },
      xAxis: {
        boundaryGap: false,
        data: [
          '07-27', '07-28', '07-29', '07-30', '07-31', '08-01', '08-02', '08-03', '08-04', '08-05']
      },
      yAxis: {
        type: 'value',
        minInterval: 1
      },
      series: [{
        type: 'line',
        data: [1, 2, 1, 0, 2, 0, 0, 1, 2, 3],
        lineStyle: {
          color: '#67c23a'
        },
        itemStyle: {
          color: '#67c23a'
        }
      }]
    });
  }
};
</script>

<style lang="stylus" scoped>
.user-method
  .chart
    width: 100%
    height: 300px
</style>
