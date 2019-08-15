<template>
  <div class="user-total">
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
        text: '用户数量统计'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        data: ['系统用户', '普通用户'],
        right: '0%'
      },
      series: [{
        name: '用户数量',
        type: 'pie',
        radius: ['40%', '60%'],
        data: [
          { value: 50,
            name: '普通用户',
            itemStyle: {
              normal: {
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#00cefc' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#367bec' // 100% 处的颜色
                  }]
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          },
          { value: 15,
            name: '系统用户',
            itemStyle: {
              normal: {
                color: { // 完成的圆环的颜色
                  colorStops: [{
                    offset: 0,
                    color: '#B6A2DE' // 0% 处的颜色
                  }, {
                    offset: 1,
                    color: '#B6A2DE' // 100% 处的颜色
                  }]
                },
                label: {
                  show: false
                },
                labelLine: {
                  show: false
                }
              }
            }
          }
        ]
        // itemStyle: {
        //   emphasis: {
        //     shadowBlur: 10,
        //     shadowOffsetX: 0,
        //     shadowColor: 'rgba(0, 0, 0, 0.5)'
        //   }
        // }
      }]
    });
  }
};
</script>

<style lang="stylus" scoped>
.user-total
  .chart
    width: 100%
    height: 300px
</style>
