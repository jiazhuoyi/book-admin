<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-12 19:19:37
 * @LastEditTime: 2019-08-15 15:00:50
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="book-table">
    <el-table :data="books" border>
      <el-table-column type="index" label="序号" width="50"></el-table-column>
      <el-table-column label="图片" align="center" width="200">
        <template slot-scope="scope">
          <el-popover placement="right" trigger="hover">
            <el-image
              style="width: 240px; height: 320px"
              :src="scope.row.image">
            </el-image>
            <el-image
              style="width: 60px; height: 80px"
              :src="scope.row.image"
              slot="reference">
            </el-image>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="信息" align="left">
        <template slot-scope="scope">
          <span class="title info">{{ scope.row.title }}</span>
          <span class="info">作者：
            <span
              class="author"
              v-for="(author, index) in scope.row.author"
              :key="index">
              {{author}}
            </span>
          </span>
          <span class="info">出版社：{{ scope.row.publisher }}</span>
          <span class="info">ISBN：{{ scope.row.isbn13 }}</span>
        </template>
      </el-table-column>
      <el-table-column width="150" align="center" prop="status" label="库存">
      </el-table-column>
      <el-table-column width="150" align="center" prop="borrow_count" label="借阅次数">
      </el-table-column>
      <el-table-column label="状态" width="150" align="center">
        <template slot-scope="scope">
          <el-tag v-if="scope.row.status > 0" type="success">
            还剩{{scope.row.status}}本
          </el-tag>
          <el-tag v-else type="danger">告罄</el-tag>
          <!-- <el-tag
            :type="(scope.row.status | order_status).color">
            {{(scope.row.status | order_status).label}}
          </el-tag> -->
        </template>
      </el-table-column>
      <el-table-column label="入库时间" width="200" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.createAt | date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="200" align="center">
        <template slot-scope="scope">
          <el-button
            type="primary"
            size="mini"
            @click="changeAmount(scope.row)">
            修改数量
          </el-button>
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

<style lang="stylus" scoped>
.book-table
  .info
    display: block
    font-size: 13px
  .title
    font-weight: 600
    font-size: 15px
  .author
    color: #3377aa
  .author:after
    content: ' / '
  .author:last-child:after
    content: ''
</style>
