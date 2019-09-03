<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-11 01:25:56
 * @LastEditTime: 2019-09-03 18:42:01
 * @LastEditors: Please set LastEditors
 -->
<template>
  <fragment>
    <template v-if="hasShowingChild(item)">
      <el-menu-item :index="getLink(item.path)" >
        <i :class="`iconfont ${item.meta.icon}`"></i>
        <span slot="title">{{item.meta.title}}</span>
      </el-menu-item>
    </template>
    <el-submenu :index="`${index + 1}`" v-else popper-append-to-body>
      <template slot="title">
        <i :class="`iconfont ${item.meta.icon}`"></i>
        <span>{{item.meta.title}}</span>
      </template>
      <el-menu-item
        v-for="child in item.children"
        v-if="child.meta.title"
        :key="child.meta.name"
        :index="getLink(item.path, child.path)">
        {{child.meta.title}}
      </el-menu-item>
    </el-submenu>
  </fragment>
</template>

<script>

export default {
  name: 'SidebarItem',
  props: {
    item: Object,
    index: Number
  },
  methods: {
    getLink(ppath, cpath) {
      return cpath ? `${ppath}/${cpath}` : ppath;
    },
    hasShowingChild(item) {
      let showing = [];
      showing = item.children.filter((child) => {
        if (child.meta.title) {
          return true;
        }
        return false;
      });
      return showing.length === 0;
    }
  }
};

</script>

