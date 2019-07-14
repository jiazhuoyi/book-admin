<template>
  <div class="add-book">
    <div class="search-form">
      <el-form ref="bookForm"
        label-width="150px"
        :model="bookForm">
        <el-form-item label="请输入该书的ISBN：">
          <el-input
            style="width: 300px"
            placeholder="请输入账号"
            v-model="bookForm.isbn">
          </el-input>
          <el-button
            type="primary"
            style="margin-left: 15px;"
            icon="el-icon-search"
            @click="submit">查询
          </el-button>
          <span class="tip">（数据来自豆瓣）</span>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div class="book-detail">
      <el-card class="box-card" v-if="book">
        <div class="info"></div>
      </el-card>
    </div> -->
    <book-detail :book="book" v-if="Object.keys(this.book).length !== 0"></book-detail>
  </div>
</template>

<script>
import { submitISBN } from '@/api/book';

import bookDetail from './book-detail';

export default {
  components: {
    bookDetail
  },
  data() {
    return {
      bookForm: {},
      book: {}
    };
  },
  methods: {
    async submit() {
      const result = await submitISBN({ isbn: this.bookForm.isbn });
      this.book = result.book;
    }
  }
};
</script>

<style lang="stylus" scoped>
.add-book
  text-align: left
  .tip
    color: #666666
    font-size: 12px
</style>
