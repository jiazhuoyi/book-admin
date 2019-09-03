<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 23:48:38
 * @LastEditTime: 2019-09-03 17:37:05
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="sidebar">
    <el-menu
      :default-active="$route.path"
      :collapse-transition="false"
      class="el-menu-verical-demo bar"
      background-color="#545c64"
      text-color="#fff"
      router
      :collapse="!$store.state.sidebar.open"
      active-text-color="#ffd04b">
      <sidebar-item
        v-for="(item, index) in sideBar"
        :key="item.meta.title"
        :index="index"
        :item="item">
      </sidebar-item>
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from '@/components/sidebar-item';

export default {
  name: 'Sidebar',
  components: {
    SidebarItem
  },
  props: {
    sideBar: Array
  }
};
</script>


<style lang="stylus">
.sidebar
  text-align: left
  color: $sidebar-color
  background-color: $sidebar-bg-color
  .bar
    height: 100%
</style>

