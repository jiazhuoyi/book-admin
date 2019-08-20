<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 23:48:38
 * @LastEditTime: 2019-08-16 22:35:28
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="methods-analyzer">
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
        text: '图书热度排行(前五名)'
      },
      grid: {
        left: '2%',
        right: '10%',
        top: '12%',
        bottom: '18%',
        containLabel: true
      },
      tooltip: {},
      // xAxis: {
      //   data: ['人生海海', '岛上书店', '时间简史', '数据结构', '软件工程']
      // },
      xAxis: [{
        axisTick: {
          show: false
        },
        type: 'value',
        axisLine: {
          show: false
        },
        axisLabel: {
          show: false
        },
        splitLine: {
          show: false
        }
      }],
      yAxis: {
        data: ['人生海海', '岛上书店', '时间简史', '数据结构', '软件工程'],
        axisTick: {
          show: false
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          show: true,
          // color: "#fff",
          fontSize: 14
        }
      },
      series: [{
        type: 'bar',
        label: {
          normal: {
            show: true,
            position: 'right'
          }
        },
        barWidth: 24,
        data: [2, 5, 6, 7, 10]
      }]
    });
  }
};
</script>

<style lang="stylus" scoped>
.methods-analyzer
  .chart
    width: 100%
    height: 300px
</style>
