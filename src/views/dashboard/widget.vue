<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-04 17:18:16
 * @LastEditTime: 2019-08-14 18:32:49
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="widget">
    <el-row :gutter="24" type="flex" justify="space-between">
      <el-col :span="5">
        <div class="order item">
          <i class="iconfont icon-tongji1 icon"></i>
          <div class="description">
            <span class="title">今日订单数量</span>
            <countTo class="num" :startVal="0" :endVal="order"></countTo>个
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="user item">
          <i class="iconfont icon-yonghuzu icon"></i>
          <div class="description">
            <span class="title">今日新增用户</span>
            <countTo class="num" :startVal="0" :endVal="user"></countTo>位
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="book item">
          <i class="iconfont icon-tushu icon"></i>
          <div class="description">
            <span class="title">今日增加图书</span>
            <countTo class="num" :startVal="0" :endVal="book"></countTo>本
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="purchase item">
          <i class="iconfont icon-dingdan icon"></i>
          <div class="description">
            <span class="title">今日购书申请</span>
            <countTo class="num" :startVal="0" :endVal="purchase"></countTo>条
          </div>
        </div>
      </el-col>
      <el-col :span="5">
        <div class="suggestion item">
          <i class="iconfont icon-dingdan icon"></i>
          <div class="description">
            <span class="title">今日投诉建议</span>
            <countTo class="num" :startVal="0" :endVal="suggestion"></countTo>条
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  components: {
    countTo
  },
  props: ['order', 'user', 'book', 'purchase', 'suggestion']
};
</script>

<style lang="stylus" scoped>
.widget
  margin: 15px 0
  .order
    background-color: #ed5565
  .user
    background-color: #67c23a
  .book
    background-color: #409eff
  .purchase
    background-color: #f8ac59
  .suggestion
    // background-color: #d3d4d6
    background-color: #909399
  .item
    box-sizing: border-box
    height: 120px
    overflow: hidden
    color: #fff
    border-radius: 10px
    padding: 15px
    display: flex
    align-items: center
    justify-content: space-around
    .icon
      font-size: 60px
    .description
      font-size: 12px
      .title
        display: block
        margin-bottom: 5px
      .num
        margin-right: 10px
        font-weight: 600
        font-size: 40px
</style>

