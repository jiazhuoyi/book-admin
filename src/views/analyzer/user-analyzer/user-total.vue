<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-04 23:09:04
 * @LastEditTime: 2019-08-16 22:37:52
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="user-total">
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
        text: '用户统计'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        data: ['系统用户', '普通用户']
      },
      series: [{
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
