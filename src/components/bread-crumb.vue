<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-10 23:48:38
 * @LastEditTime: 2019-09-03 18:41:29
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="bread-crumb">
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item
        v-for="item in breadlist"
        :key="item.path">
        {{item.meta.bread}}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breadlist: []
    };
  },
  watch: {
    $route() {
      this.getBreadCrumb();
    }
  },
  mounted() {
    this.getBreadCrumb();
  },
  methods: {
    getBreadCrumb() {
      this.breadlist = this.$route.matched
        .filter(item => (item.path !== '/dashboard') && (item.meta.bread));
    }
  }
};
</script>

<style lang="stylus" scoped>
.bread-crumb >>> .is-link
  font-weight: unset
</style>

