<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-02 15:26:40
 * @LastEditTime: 2019-08-16 22:36:08
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="consumer-analyzer">
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
        text: '用户状态'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c} ({d}%)'
      },
      legend: {
        data: ['有效', '未绑定', '待处理'],
        right: '0%'
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
