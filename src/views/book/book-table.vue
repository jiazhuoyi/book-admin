<template>
  <div class="book-table">
    <el-table :data="books" v-loading="loading">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="title" label="书名"></el-table-column>
      <el-table-column label="图片" align="center">
        <template slot-scope="scope">
          <el-popover placement="right" trigger="hover">
            <el-image  style="width: 240px; height: 320px" :src="scope.row.image"></el-image>
            <el-image  style="width: 30px; height: 40px" :src="scope.row.image" slot="reference"></el-image>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="publisher" label="出版社"></el-table-column>
      <el-table-column prop="isbn13" label="ISBN"></el-table-column>
      <el-table-column label="状态" width="150">
        <template slot-scope="scope">
          <el-tag v-show="scope.row.status > 0" type="success" effect="dark">
            还剩{{scope.row.status}}本
          </el-tag>
          <el-tag v-show="scope.row.status <= 0" type="danger" effect="dark">告罄</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="入库时间" width="200" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.createAt | date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary">修改数量</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  props: ['books']
};
</script>

