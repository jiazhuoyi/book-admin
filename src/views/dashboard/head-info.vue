<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 23:48:38
 * @LastEditTime: 2019-08-14 23:45:53
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="head-info">
    <el-card class="box-card">
      <div class="info">
        <div class="user item">
          <div class="photo">
            <thumb :url="$store.state.user.avatar" width="80" height="80"></thumb>
          </div>
          <div class="content">
            <div class="welcome">你好, {{$store.state.user.name}}
              <span class="role">({{$store.state.user.role | role}})</span>
            </div>
            <div class="ip">当前IP：{{$store.state.user.ip}}</div>
            <div class="last-login">上次登录时间：{{$store.state.user.last_login | date}}</div>
          </div>
        </div>
        <div class="system item">
          <div class="order test">
            <p class="title">待处理订单</p>
            <router-link class="content" to="/order">
              <countTo :startVal='0' :endVal='order'></countTo>条
            </router-link>
          </div>
          <div class="user test">
            <p class="title">待处理用户</p>
            <router-link class="content" to="/user">
              <countTo :startVal='0' :endVal='user'></countTo>位
            </router-link>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
import Thumb from '@/components/thumb';
import countTo from 'vue-count-to';

export default {
  components: {
    Thumb,
    countTo
  },
  props: ['order', 'user']
};
</script>

<style lang="stylus" scoped>
.head-info
  .info
    display: flex
    .item
      flex: 1
    .user
      text-align: left
      display: flex
      align-items: flex-start
      .photo
        margin-right: 15px
      .content
        margin-right: 15px
        .welcome
          font-size: 20px
          line-height: 30px
          .role
            font-size: 14px
            color: rgba(0,0,0,.45)
        .ip
          color: rgba(0,0,0,.45)
          line-height: 25px
        .last-login
          color: rgba(0,0,0,.45)
          line-height: 25px
    .system
      text-align: right
      .test
        display: inline-block
        width: 25%
        text-align: center
        .title
          color: rgba(0,0,0,.45)
          font-size: 18px
          margin-bottom: 10px
        .content
          display: block;
          font-size: 15px
          color: #41B883
          font-weight: 600
</style>

