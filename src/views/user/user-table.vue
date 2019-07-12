<template>
  <div class="user-table">
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
          <el-tag v-show="scope.row.status == 0" type="warning" effect="dark">未绑定</el-tag>
          <el-tag v-show="scope.row.status == 1" effect="dark">待审核</el-tag>
          <el-tag v-show="scope.row.status == 2" type="success" effect="dark">有效</el-tag>
          <el-tag v-show="scope.row.status == 6" type="danger" effect="dark">被驳回</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="角色" width="150">
        <template slot-scope="scope">
          <el-tag v-show="scope.row.role === 'manager'" type="danger">系统用户</el-tag>
          <el-tag v-show="scope.row.role === 'consumer'" type="success">普通用户</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="申请时间" width="200" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.createAt | date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="250">
        <template slot-scope="scope">
          <el-button type="success" size="mini" v-if="scope.row.status === 1">通过</el-button>
          <el-button type="danger" size="mini" v-if="scope.row.status === 1">驳回</el-button>
          <el-button size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['users']
};
</script>

