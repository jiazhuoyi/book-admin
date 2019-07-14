<template>
  <div class="book-table">
    <el-table :data="books">
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column prop="title" label="书名"></el-table-column>
      <el-table-column label="图片" align="center">
        <template slot-scope="scope">
          <el-popover placement="right" trigger="hover">
            <el-image
              style="width: 240px; height: 320px"
              :src="scope.row.image">
            </el-image>
            <el-image
              style="width: 30px; height: 40px"
              :src="scope.row.image"
              slot="reference">
            </el-image>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column prop="author" label="作者"></el-table-column>
      <el-table-column prop="publisher" label="出版社"></el-table-column>
      <el-table-column prop="isbn13" label="ISBN"></el-table-column>
      <el-table-column label="状态" width="150">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status > 0" type="success" effect="dark">
            还剩{{scope.row.status}}本
          </el-tag>
          <el-tag v-else type="danger" effect="dark">告罄</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="入库时间" width="200" align="left">
        <template slot-scope="scope">
          <span>{{ scope.row.createAt | date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <el-button type="primary" @click="changeAmount(scope.row)">修改数量</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog
      title="修改数量"
      :visible.sync="dialogVisible"
      width="20%"
      :before-close="handleClose" center>
      <div class="content">
        <p>书名: {{book.title}}</p>
        <p>数量：
          <el-input-number size="mini" v-model="num"></el-input-number>
        </p>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="confirmAmount">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { updateBookAmount } from '@/api/book';

export default {
  props: ['books'],
  data() {
    return {
      book: {},
      num: 0,
      dialogVisible: false
    };
  },
  methods: {
    changeAmount(book) {
      this.dialogVisible = true;
      this.book = book;
      this.num = book.status;
    },
    async confirmAmount() {
      this.dialogVisible = false;
      await updateBookAmount({ id: this.book.id, amount: this.num });
      this.$emit('refresh');
      this.$message({
        showClose: true,
        message: '修改成功',
        type: 'success'
      });
      this.book = {};
    },
    handleClose() {
      this.book = {};
      this.dialogVisible = false;
    }
  }
};
</script>

