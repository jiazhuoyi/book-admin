<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 23:48:38
 * @LastEditTime: 2019-09-03 18:41:24
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="navbar">
    <i
      class="el-icon-s-fold hamburger"
      :class="{'is-active': !$store.state.sidebar.open }"
      @click="toggleOpen">
    </i>
    <bread-crumb class="bread"></bread-crumb>
    <div class="right-menu">
      <screen-full class="right-menu-item"></screen-full>
      <el-dropdown trigger="click" @command="handleCommand">
        <div class="my">
          <avatar :url="$store.state.user.avatar" width="40" height="40"></avatar>
          <span class="right-item">{{$store.state.user.name}}</span>
          <i class="el-icon-arrow-down el-icon--right"></i>
        </div>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="my">
            <div class="dropdown-item">
              <img class="my-icon" src="static/icons/profile.svg">
              <span>我的</span>
            </div>
          </el-dropdown-item>
          <el-dropdown-item command="logout" divided>
            <div class="dropdown-item">
              <img class="my-icon" src="static/icons/logout.svg">
              <span>退出</span>
            </div>
          </el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
// import { getNoticeCount } from '@/api/notice';
import Badge from '@/components/badge';
import Avatar from '@/components/avatar';
import ScreenFull from '@/components/screen-full';
import BreadCrumb from '@/components/bread-crumb';

export default {
  name: 'Navbar',
  components: {
    Badge,
    Avatar,
    ScreenFull,
    BreadCrumb
  },
  data() {
    return {
      noticeMax: 99,
      noticeCount: 12,
      isHidden: true,
      siderOpen: true
    };
  },
  // async mounted() {
  //   const result = await getNoticeCount();
  //   this.$store.commit('setTotalCount', result.totalCount);
  // },
  methods: {
    handleCommand(command) {
      if (command === 'logout') {
        this.$store.dispatch('logout').then(() => {
          this.$message({
            message: '退出登录',
            type: 'success'
          });
          this.$router.push({ path: '/login' });
        }).catch((error) => {
          this.$message({
            message: error.msg,
            type: 'error'
          });
        });
      } else if (command === 'my') {
        this.$router.push({ path: '/my/info' });
      } else {
        this.$router.push({ path: '/dashboard' });
      }
    },
    toggleOpen() {
      this.$store.commit('setSidebarOpen');
    }
  }
};
</script>

<style lang="stylus">
@import "~@/styles/index"
.navbar
  width: 100%
  box-sizing: border-box
  padding: 0px $nav-padding
  height: $nav-height
  line-height: $nav-height
  background-color: $navbackgroundColor
  border-bottom: 1px solid #d8dce5
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.12), 0 0 3px 0 rgba(0,0,0,.04)
  .hamburger
    float: left
    line-height: $nav-height
    font-size: 18px
    &:hover
      cursor: pointer
  .is-active
    transform: rotate(180deg)
  .bread
    float: left
    height: $nav-height
    margin-left: $nav-padding
    display: flex
    align-items: center
  .right-menu
    float: right
    &-item
      display: inline-block
      padding: 0 8px
      &:hover
        cursor: pointer
        background: rgba(0, 0, 0, .025)
    .my
      display: inline-block
      line-height: $nav-height
      cursor: pointer
      .right-item
        line-height: $navLogoHeight
        font-weight: bolder
.dropdown-item
  .my-icon
    vertical-align: middle
    width: 18px
    height: 18px
    margin-right: 10px
</style>

