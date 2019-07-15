<template>
  <div class="system">
    <!-- <h1>系统配置</h1> -->
    <el-form ref="form" :model="system" label-width="200px">
      <el-form-item label="每人借书总数限制">
        <el-input-number size="mini" v-model="system.totalAmount" label="次132"></el-input-number>
        <span class="text">本</span>
        <!-- <el-input v-model="system.totalAmount"></el-input> -->
      </el-form-item>
      <el-form-item label="每人每次借书数量限制">
        <el-input-number size="mini" v-model="system.singleAmount"></el-input-number>
        <span class="text">本</span>
        <!-- <el-input v-model="system.singleAmount"></el-input> -->
      </el-form-item>
      <el-form-item label="每次借书周期限制">
        <el-input-number size="mini" v-model="system.singleCycle"></el-input-number>
        <span class="text">天</span>
        <!-- <el-input v-model="system.singleCycle"></el-input> -->
      </el-form-item>
      <el-form-item label="最长续借次数">
        <el-input-number size="mini" v-model="system.totaltimes"></el-input-number>
        <span class="text">次</span>
        <!-- <el-input v-model="system.totaltimes"></el-input> -->
      </el-form-item>
      <el-form-item>
        <el-button type="primary">提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      system: {
        totalAmount: 1,
        singleAmount: 1,
        singleCycle: 1,
        totaltimes: 1
      }
    };
  }
};
</script>

<style lang="stylus" scoped>
.system
  text-align: left
  .text
    margin-left: 10px
</style>
