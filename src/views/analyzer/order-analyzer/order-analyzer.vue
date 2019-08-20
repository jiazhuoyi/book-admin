<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-04 23:02:19
 * @LastEditTime: 2019-08-16 22:36:52
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
        text: '有效订单状态统计'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b} : {c}个'
      },
      legend: {
        data: ['待审核', '借书中', '已过期'],
        right: '10%'
      },
      series: [{
        type: 'pie',
        radius: ['40%', '60%'],
        data: [
          { value: 5,
            name: '待审核',
            itemStyle: {
              color: '#ed5565'
            }
          },
          { value: 10,
            name: '借书中',
            itemStyle: {
              color: '#67c23a'
            }
          },
          { value: 2,
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
    height: 400px
</style>
