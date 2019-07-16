<template>
  <div class="search">
    <div class="wrapper">
      书名：
      <el-input placeholder="请输入书名"  style="width: 200px;" v-model="bookName"></el-input>
      <span class="text">用户姓名：</span>
      <el-input placeholder="请输入用户姓名"  style="width: 200px;" v-model="userName"></el-input>
      <el-button type="primary" style="margin-left: 15px;" icon="el-icon-search">查询</el-button>
    </div>
    <div class="operation">
      <el-button icon="el-icon-refresh" circle :loading="loading" @click="refresh"></el-button>
      <el-button disabled>导出Excel</el-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['loading'],
  data() {
    return {
      userName: '',
      bookName: ''
    };
  },
  methods: {
    refresh() {
      this.$emit('refresh');
    }
  }
};
</script>

<style lang="stylus" scoped>
.search
  display: flex
  justify-content: space-between
  padding: 0px 0 15px 0
  .wrapper
    .text
      margin-left: 15px
</style>

