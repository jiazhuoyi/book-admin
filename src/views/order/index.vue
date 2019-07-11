<template>
  <div class="order">
    <el-tabs v-model="activeTab" type="card">
      <el-tab-pane name="checking">
        <span slot="label"><i class="iconfont icon-daishenhe"></i> 待审核</span>
        待审核
      </el-tab-pane>
      <el-tab-pane name="borrowing">
        <span slot="label"><i class="iconfont icon-jieshu"></i> 借书中</span>
        借书中
      </el-tab-pane>
      <el-tab-pane label="已还书" name="returned">
        <span slot="label"><i class="iconfont icon-huanshuzhong"></i> 已还书</span>
        已还书
      </el-tab-pane>
      <el-tab-pane label="已过期" name="expired">
        <span slot="label"><i class="iconfont icon-guoqi1"></i> 已过期</span>
        已过期
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: 'borrowing'
    };
  }
};
</script>
