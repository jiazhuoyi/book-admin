<template>
  <div class="dashboard">
    <head-info></head-info>
    <div class="analyzer-wrapper">
      <el-row :gutter="10">
        <el-col :span="12">
          <user-analyzer></user-analyzer>
        </el-col>
        <el-col :span="12">
          <methods-analyzer></methods-analyzer>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import HeadInfo from '@/views/dashboard/head-info';
import UserAnalyzer from '@/views/dashboard/user-analyzer';
import MethodsAnalyzer from '@/views/dashboard/methods-analyzer';

export default {
  components: {
    HeadInfo,
    UserAnalyzer,
    MethodsAnalyzer
  }
};
</script>


<style lang="stylus" scoped>
.dashboard
  .analyzer-wrapper
    width: 100%
    padding: 10px 0
</style>
