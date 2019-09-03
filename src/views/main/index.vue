<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-02 19:01:55
 * @LastEditTime: 2019-09-03 18:45:36
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="main">
    <div class="left-bar">
        <router-link to="/" class="header">
          <img
            src="static/icons/logo.png"
            alt="logo"
            class="max-logo"
            v-show="$store.state.sidebar.open">
          <img
            src="static/icons/logo.png"
            alt="logo"
            class="min-logo"
            v-show="!$store.state.sidebar.open">
          <span class="title" v-show="$store.state.sidebar.open">EBOOK</span>
        </router-link>
      <sidebar :class="classObj" :side-bar="sidenav"></sidebar>
    </div>
    <div
      class="app-wrapper"
      :class="{'close-siderbar': !$store.state.sidebar.open}">
      <navbar class="navbar"></navbar>
      <div class="app-container">
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from '@/components/sidebar';
import Navbar from '@/components/navbar/index';
import route from '@/router';

export default {
  name: 'Main',
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {
      sidenav: []
    };
  },
  computed: {
    classObj() {
      return {
        openSideBar: this.$store.state.sidebar.open,
        hideSideBar: !this.$store.state.sidebar.open
      };
    }
  },
  created() {
    this.sidenav = [];
    route.options.routes.forEach((item) => {
      if (item.meta && item.meta.title) {
        this.sidenav.push(item);
      }
    });
  }
};
</script>

<style lang="stylus" scoped>
@import "~@/styles/index"
.left-bar >>> .sidebar
  height: 100%
.main
  position: relative
  height: 100%
  .left-bar
    position: fixed
    top: 0
    left: 0
    bottom: 0
    min-height: 100%
    transition: width 0.28s;
    .header
      display: flex
      justify-content: center
      align-items: center
      background-color: rgb(84, 92, 100)
      box-sizing: border-box
      padding: 10px 0
      border-right: solid 1px #e6e6e6;
      height: $nav-height
      .max-logo
        width: $navLogoWidth
      .min-logo
        width: $navLogoWidth
      .title
        color: $sidebar-color
        margin-left: 10px
        font-size: 20px
    .openSideBar
      width: 200px
    .hideSideBar
      width: 65px
  .app-wrapper
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    overflow: hidden
    width: calc(100% - 200px)
    transition: width 0.28s;
    background-color: $bg-color
    .app-container
      width: 100%
      overflow: auto
      height: calc(100vh - 60px)
      box-sizing: border-box
      position: relative
      padding: 20px 20px 100px 20px
      .container
        background: #fff
        padding: $main-padding
        border-left: 1px solid #e8e8e8
        border-right: 1px solid #e8e8e8
        border-bottom: 1px solid #e8e8e8
  .close-siderbar
    width: calc(100% - 65px)
    background-color: $bg-color
</style>
