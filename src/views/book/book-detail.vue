<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-14 18:58:10
 * @LastEditTime: 2019-08-14 19:29:21
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="book-detail">
    <el-card class="box-card">
      <div class="info">
        <el-row :gutter="20">
          <el-col :span="8">
            <el-image :src="book.image"></el-image>
          </el-col>
          <el-col :span="12">
            <span class="item">
              <span class="item-title">作者：</span>
              <!-- {{book.author}} -->
              <span class="author"
                v-for="(author, index) in book.author"
                :key="index">
                {{author}}
              </span>
            </span>
            <span class="item">
              <span class="item-title">出版社：</span>
              {{book.publisher}}
            </span>
            <span class="item">
              <span class="item-title">出版时间：</span>
              {{book.pubdate}}
            </span>
            <span class="item">
              <span class="item-title">页数：</span>
              {{book.pages}}
            </span>
            <span class="item">
              <span class="item-title">定价：</span>
              {{book.price}}
            </span>
            <span class="item">
              <span class="item-title">装帧：</span>
              {{book.binding}}
            </span>
            <span class="item">
              <span class="item-title">ISBN：</span>
              {{book.isbn13}}
            </span>
            <el-rate
              v-model="rating"
              disabled
              show-score
              text-color="#ff9900"
              :score-template="`${rating}分`">
            </el-rate>
            <span class="item amount">
              <span class="item-title">数量：</span>
              <el-input-number size="mini" v-model="num" :min="1" label="描述文字"></el-input-number>
            </span>
          </el-col>
        </el-row>
      </div>
      <el-row type="flex" class="row" justify="center">
        <el-col :span="6">
          <el-button type="primary" :disabled="disabled" @click="onSumbit">提交入库</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import { submitBook } from '@/api/book';

export default {
  props: ['book'],
  data() {
    return {
      num: 1
    };
  },
  computed: {
    rating() {
      if (this.book && this.book.rating && this.book.rating.average) {
        return Math.round((this.book.rating.average / 2) * 10) / 10;
      }
      return 5.0;
    },
    disabled() {
      if (Object.keys(this.book).length !== 0) return false;
      return true;
    }
  },
  methods: {
    async onSumbit() {
      this.book.status = this.num;
      await submitBook(this.book);
      this.$message({
        showClose: true,
        message: '该图书入库成功',
        type: 'success'
      });
      this.$router.push({ path: '/book' });
    }
  }
};
</script>

<style lang="stylus" scoped>
.book-detail
  .box-card
    width: 36%
    .item
      display: block
      font-size: 13px
      line-height: 1.62
      &-title
        color: #666666
      .author
        color: #3377aa
      .author:after
        content: ' / '
      .author:last-child:after
        content: ''
    .amount
      margin-top: 5px
    .row
      margin-top: 20px
</style>
