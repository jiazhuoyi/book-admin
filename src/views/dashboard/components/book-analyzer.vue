<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-04 13:43:23
 * @LastEditTime: 2019-08-16 22:36:22
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="book-analyzer">
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
        text: '图书总数统计'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}本 ({d}%)'
      },
      legend: {
        data: ['可借', '已借'],
        right: '0%'
      },
      series: [{
        type: 'pie',
        radius: ['40%', '60%'],
        data: [
          {
            value: 50,
            name: '可借',
            itemStyle: {
              color: '#67c23a'
            }
          },
          {
            value: 10,
            name: '已借',
            itemStyle: {
              color: '#ed5565'
            }
          }
        ]
      }]
    });
  }
};
</script>

<style lang="stylus" scoped>
.book-analyzer
  .chart
    width: 100%
    height: 300px
</style>
