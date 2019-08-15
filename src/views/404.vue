<template>
  <div class="error-page">
    <div class="wrapper">
      <img src="../../static/img/404.svg" alt="">
      <div class="buttons">
        <a href="javascript:history.back(-1)" class="btn">返回上一页</a>
        <router-link to="/dashboard">
          <a href="" class="btn">返回首页</a>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="stylus">
.error-page
  background-color: rgb(84, 92, 100)
  width: 100%
  height: 100%
  .wrapper
    position: absolute
    left: 50%
    top: 40%
    transform: translate(-50%,-50%)
    .buttons
      .btn
        background-color: #26C0FF
        border-radius: 4px
        color: #ffffff
        text-decoration: none
        cursor: pointer
        padding: 10px 15px
        margin-right: 10px
        font-size: 14px
</style>
