<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-04 19:55:32
 * @LastEditTime: 2019-08-20 18:52:46
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="order-analyzer">
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
        text: '订单状态'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}个'
      },
      legend: {
        data: ['待审核', '借书中', '已过期'],
        right: '0%'
      },
      series: [{
        type: 'pie',
        radius: ['40%', '60%'],
        data: [
          {
            value: 5,
            name: '待审核',
            itemStyle: {
              color: '#ed5565'
            }
          },
          {
            value: 10,
            name: '借书中',
            itemStyle: {
              color: '#67c23a'
            }
          },
          {
            value: 2,
            name: '已过期',
            itemStyle: {
              color: '#909399'
            }
          }
        ]
      }]
    });
  }
};
</script>

<style lang="stylus" scoped>
.order-analyzer
  .chart
    width: 100%
    height: 300px
</style>
