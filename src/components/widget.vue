<template>
  <div class="widget" :style="{backgroundColor: color}">
    <i :class="`iconfont icon-${image} icon`"></i>
    <div class="description">
      <span class="title">{{title}}</span>
      <countTo class="num" :startVal="0" :endVal='value'></countTo>{{unit}}
    </div>
  </div>
</template>

<script>
import countTo from 'vue-count-to';

export default {
  props: {
    title: String,
    color: {
      type: String,
      defalut: '#67c23a'
    },
    value: {
      type: Number,
      defalut: 0
    },
    unit: String,
    image: String
  },
  components: {
    countTo
  }
};
</script>

<style lang="stylus" scoped>
.widget
  background-color: #67c23a
  box-sizing: border-box
  height: 100px
  overflow: hidden
  color: #fff
  border-radius: 10px
  padding: 15px
  display: flex
  align-items: center
  justify-content: space-around
  .icon
    font-size: 60px
  .description
    font-size: 12px
    .title
      display: block
      margin-bottom: 5px
    .num
      margin-right: 10px
      font-weight: 600
      font-size: 40px
</style>
