<template>
  <div class="suggestion">
    <el-tabs v-model="activeTab" @tab-click="handleClick" type="border-card">
      <el-tab-pane v-for="tab in suggestionTbs" :key="tab.value" :name="tab.value">
        <span slot="label">
          <i :class="`iconfont icon-${tab.icon}`"></i>{{tab.label}}
        </span>
        <el-table :data="suggestions" v-if="tab.value === activeTab" v-loading="loading">
          <el-table-column type="index" label="序号" width="80" align="center"></el-table-column>
          <el-table-column prop="content" label="投诉内容"></el-table-column>
          <el-table-column label="状态" width="150" align="center">
            <template slot-scope="scope">
              <el-tag v-if="scope.row.status === '1'" type="info">已处理</el-tag>
              <el-tag v-else type="success">待处理</el-tag>
            </template>
          </el-table-column>
          <el-table-column label="时间" width="300" align="left">
            <template slot-scope="scope">
              <span>{{ scope.row.create_date | date }}</span>
            </template>
          </el-table-column>
          <el-table-column
            label="操作"
            width="200">
            <template slot-scope="scope">
              <el-button type="success"
                size="mini"
                @click="update(scope.row.id)"
                v-if="scope.row.status === 0">处理</el-button>
            </template>
          </el-table-column>
        </el-table>
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
  </div>
</template>

<script>
import { getSuggestions, updateSuggestion } from '@/api/suggestion';

export default {
  data() {
    return {
      suggestionTbs: [
        { label: '待处理', value: 'dealingSuggestions', icon: 'daishenhe' },
        { label: '所有', value: 'allSuggestions', icon: 'dingdan' }
      ],
      activeTab: 'dealingSuggestions',
      suggestions: [],
      currentPage: 1,
      start: 0,
      limit: 10,
      total: 0,
      loading: false
    };
  },
  async mounted() {
    this.suggestions = await this.getSomeSuggestions(this.activeTab, this.start, this.limit);
  },
  methods: {
    async update(id) {
      await updateSuggestion({ id, type: 'suggestion_pass' });
      await this.refresh();
    },
    async refresh() {
      this.suggestions = await this.getSomeSuggestions(this.activeTab, this.start, this.limit);
    },
    async handleClick() {
      this.suggestions = await this.getSomeSuggestions(this.activeTab, this.start, this.limit);
    },
    async handlePaginationClick() {
      this.suggestions = await this.getSomeSuggestions(
        this.activeTab,
        (this.currentPage - 1) * this.limit,
        this.limit);
    },
    async getSomeSuggestions(type, start, limit) {
      this.loading = true;
      const result = await getSuggestions(type, start, limit);
      this.total = result.total;
      this.loading = false;
      return result.suggestions;
    }
  }
};
</script>

<style lang="stylus" scoped>
.suggestion
  text-align: left
  .page-wrapper
    padding: 15px 0
    display: flex
    justify-content: flex-end
</style>
