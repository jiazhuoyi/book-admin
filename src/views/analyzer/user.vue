<template>
  <div class="user">
    <div class="bar">
      <el-row :gutter="20">
        <el-col :span="12">
          <user-active></user-active>
        </el-col>
        <el-col :span="12">
          <newuser-analyzer></newuser-analyzer>
        </el-col>
      </el-row>
    </div>
    <div class="pie">
      <el-row :gutter="10">
        <el-col :span="8">
          <user-total></user-total>
        </el-col>
        <el-col :span="8">
          <consumer-analyzer></consumer-analyzer>
        </el-col>
        <el-col :span="8">
          <gender-analyzer></gender-analyzer>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
import UserActive from './user-analyzer/user-active';
import UserTotal from './user-analyzer/user-total';
import ConsumerAnalyzer from './user-analyzer/consumer-analyzer';
import GenderAnalyzer from './user-analyzer/gender-analyzer';
import NewuserAnalyzer from './user-analyzer/newuser-analyzer';

export default {
  components: {
    UserActive,
    UserTotal,
    ConsumerAnalyzer,
    GenderAnalyzer,
    NewuserAnalyzer
  }
};
</script>

<style lang="stylus" scoped>
.user
  .pie
    margin-top: 15px
</style>

