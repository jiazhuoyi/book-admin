<template>
  <div class="info">
    <el-card class="box-card" shadow="always">
      <div slot="header" class="header">
        <span>个人信息</span>
        <router-link to="/my/update-password">
          <el-button style="float: right; padding: 3px 0;margin-left: 15px" type="text">
            修改密码
          </el-button>
        </router-link>
        <router-link to="/my/update-info">
          <el-button style="float: right; padding: 3px 0" type="text">
            编辑资料
          </el-button>
        </router-link>
      </div>
      <el-row>
        <el-col :span="8">
          <!-- <div class="img">
            <avatar :url="user.avatar" width="100" height="100"></avatar>
          </div> -->
          <el-avatar
            :size="100"
            fit="fill"
            :src="url">
            无法加载头像
          </el-avatar>
        </el-col>
        <el-col :span="16" style="text-align: left">
          <p>账号：{{user.account}}</p>
          <p>昵称：{{user.name}}</p>
          <p>角色：系统用户</p>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
import Avatar from '@/components/avatar';

export default {
  data() {
    return {
      tel: '17628283184',
      user: {
      }
    };
  },
  computed: {
    url() {
      if (this.user.avatar) {
        return `https://cdn.jiazhuoyi.cn/${this.user.avatar}`;
      }
      return '';
    }
  },
  components: {
    Avatar
  },
  async created() {
    try {
      const result = await this.$store.dispatch('getUserInfo');
      this.user = result.user;
    } catch (error) {
      this.$message({
        message: error.message,
        type: 'error'
      });
    }
  }
};
</script>


<style lang="stylus">
.info
  .box-card
    width: 50%
    margin: auto
    .header
      text-align: left
    .img
      .avatar
        width: 50%
    .info-item
      line-height: 30px
</style>

