<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-20 17:43:34
 * @LastEditTime: 2019-08-20 18:37:45
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div class="screen-full">
    <!-- <i class="el-icon-rank" @click="click"></i> -->
    <i :class="`iconfont icon-${isFull? 'suoxiao' : 'quanping'}`" @click="click"></i>
  </div>
</template>

<script>
import screenfull from 'screenfull';

export default {
  data() {
    return {
      isFull: false
    };
  },
  methods: {
    click() {
      if (!screenfull.enabled) {
        this.$message({
          message: '您的浏览器不支持该特性',
          type: 'warning'
        });
        return;
      }
      this.changeScreen();
    },
    changeScreen() {
      screenfull.toggle();
    },
    change() {
      this.isFull = screenfull.isFullscreen;
    }
  },
  mounted() {
    if (screenfull.enabled) {
      screenfull.on('change', this.change);
    }
  },
  destory() {
    if (screenfull.enabled) {
      screenfull.off('change', this.change);
    }
  }
};
</script>

