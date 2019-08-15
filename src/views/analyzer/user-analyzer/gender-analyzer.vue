<template>
  <div class="gender-analyzer">
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
        text: '用户性别统计'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        data: ['男', '女']
      },
      series: [{
        name: '性别',
        type: 'pie',
        radius: ['40%', '60%'],
        data: [
          { value: 50,
            name: '男',
            itemStyle: {
              color: '#409eff'
            }
          },
          { value: 15,
            name: '女',
            itemStyle: {
              color: '#67c23a'
            }
          }
        ]
      }]
    });
  }
};
</script>

<style lang="stylus" scoped>
.gender-analyzer
  .chart
    width: 100%
    height: 300px
</style>
