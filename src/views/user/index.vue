<template>
  <div class="user">
    <div class="header">
      <div class="search">
        用户名：
        <el-input placeholder="请输入用户名"  style="width: 300px;" v-model="serachName"></el-input>
        <el-button type="primary" style="margin-left: 15px;" icon="el-icon-search">查询</el-button>
      </div>
      <div class="operation">
        <el-button icon="el-icon-refresh" :loading="loading" circle @click="refresh"></el-button>
        <el-button type="success" @click="addSystemUser">新增用户</el-button>
        <el-button disabled>导出Excel</el-button>
      </div>
    </div>
    <el-tabs v-model="activeTab" @tab-click="handleClick" type="border-card" v-loading="loading">
      <el-tab-pane v-for="tab in userTabs" :key="tab.value" :name="tab.value">
        <span slot="label">
          <i :class="`iconfont icon-${tab.icon}`"></i>{{tab.label}}
        </span>
        <user-table @refresh="refresh" v-if="activeTab === tab.value" :users="users"></user-table>
      </el-tab-pane>
    </el-tabs>
    <div class="page-wrapper">
      <el-pagination
        :current-page.sync="currentPage"
        :page-size="limit"
        background
        @current-change="handlePaginationClick"
        layout="total, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>
    <el-dialog title="新增系统用户" :visible.sync="showDialog" width="25%">
      <el-form ref="userForm" label-width="80px" :model="userForm">
        <el-form-item label="账号">
          <el-input
            placeholder="请输入账号"
            v-model="userForm.account">
          </el-input>
        </el-form-item>
        <el-form-item label="姓名">
          <el-input
            placeholder="请输入姓名"
            v-model="userForm.name">
          </el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input
            placeholder="请输入密码"
            v-model="userForm.firstPassword"
            show-password>
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input
            placeholder="请再次输入密码"
            v-model="userForm.secondPassword"
            show-password>
          </el-input>
        </el-form-item>
        <el-form-item label="角色">
          <el-input
            v-model="role"
            :disabled="true">
          </el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="showDialog = false">确 定</el-button>
        <el-button @click="showDialog = false">取 消</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { getUsers } from '@/api/user';
import userTable from './user-table';

export default {
  components: {
    userTable
  },
  data() {
    return {
      activeTab: 'checkingUsers',
      userTabs: [
        { label: '待处理用户', value: 'checkingUsers', icon: 'daishenhe' },
        { label: '未绑定用户', value: 'unboundUers', icon: 'weibangding' },
        { label: '普通用户', value: 'ordinaryUsers', icon: 'yonghu' },
        { label: '系统用户', value: 'systemUsers', icon: 'xitongyonghu' },
        { label: '所有用户', value: 'allUsers', icon: 'suoyouyonghu' }
      ],
      users: [],
      start: 0,
      limit: 8,
      total: 0,
      currentPage: 1,
      serachName: '',
      loading: false,
      showDialog: false,
      userForm: {},
      role: '系统用户'
    };
  },
  async mounted() {
    this.users = await this.getSomeUsers(this.activeTab, 0, this.limit);
  },
  methods: {
    addSystemUser() {
      this.showDialog = true;
    },
    async getSomeUsers(type, start, limit) {
      this.loading = true;
      const result = await getUsers(this.activeTab, start, limit);
      this.total = result.total;
      this.loading = false;
      return result.users;
    },
    async handleClick() {
      this.users = await this.getSomeUsers(this.activeTab, 0, this.limit);
    },
    async refresh() {
      this.users = await this.getSomeUsers(this.activeTab, 0, this.limit);
    },
    async handlePaginationClick() {
      this.users = await this.getSomeUsers(
        this.activeTab,
        (this.currentPage - 1) * this.limit,
        this.limit);
    }
  }
};
</script>

<style lang="stylus" scoped>
.user
  text-align: left
  .header
    display: flex
    justify-content: space-between
    padding: 15px 0 30px 0
  .page-wrapper
    padding: 15px 0
    display: flex
    justify-content: flex-end
</style>
