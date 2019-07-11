<template>
  <div class="user">
    <el-tabs v-model="activeTab" type="card" :header-cell-style="{background: '#1D1F21'}">
      <el-tab-pane name="checkingUsers">
        <span slot="label"><i class="iconfont icon-daishenhe"></i> 待审核用户</span>
      </el-tab-pane>
      <el-tab-pane name="unboundUers">
        <span slot="label"><i class="iconfont icon-weibangding"></i> 未绑定用户</span>
        未绑定用户
      </el-tab-pane>
      <el-tab-pane name="ordinaryUsers">
        <span slot="label"><i class="iconfont icon-yonghu"></i> 普通用户</span>
        普通用户
      </el-tab-pane>
      <el-tab-pane name="systemUsers">
        <span slot="label"><i class="iconfont icon-xitongyonghu"></i> 系统用户</span>
        系统用户
      </el-tab-pane>
      <el-tab-pane name="allUsers">
        <span slot="label"><i class="iconfont icon-suoyouyonghu"></i> 所有用户</span>
        所有用户
      </el-tab-pane>
    </el-tabs>
    <el-table :data="users">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column label="头像" align="center">
        <template slot-scope="scope">
          <el-avatar :src="scope.row.avatarUrl"> user </el-avatar>
        </template>
      </el-table-column>
      <el-table-column prop="nickName" label="微信昵称"></el-table-column>
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="emid" label="员工编号"></el-table-column>
      <el-table-column label="状态" width="150">
        <template slot-scope="scope">
          <el-tag v-show="scope.row.status == 0" type="warning">未绑定</el-tag>
          <el-tag v-show="scope.row.status == 1">待审核</el-tag>
          <el-tag v-show="scope.row.status == 2" type="success">有效</el-tag>
          <el-tag v-show="scope.row.status == 6" type="danger">被驳回</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="申请时间" width="200" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.createAt | date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="success" size="mini">通过</el-button>
          <el-button type="danger" size="mini">驳回</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="page-wrapper">
      <el-pagination
        :current-page="1"
        :page-size="10"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="4000">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getUsers } from '@/api/user';

export default {
  data() {
    return {
      activeTab: 'checkingUsers',
      users: []
    };
  },
  async mounted() {
    this.users = (await getUsers('all', 0, 100)).users;
  }
};
</script>

<style lang="stylus" scoped>
.user
  .page-wrapper
    padding: 15px 0
    display: flex
    justify-content: flex-end
</style>
