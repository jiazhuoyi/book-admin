<template>
  <div class="update-info">
    <el-card class="box-card" shadow="always">
      <div slot="header" class="header">
        <span>个人信息</span>
      </div>
      <el-row>
        <el-col :span="8">
          <div class="img">
            <avatar :url="infoForm.avatar" width="100" height="100"></avatar>
          </div>
        </el-col>
        <el-col :span="16" style="text-align: left">
          <el-form
            class="info-form"
            :model="infoForm"
            status-icon
            ref="infoForm"
            label-width="60px"
            :rules="infoRules">
            <el-form-item label="账号" prop="account" :error="accountError">
              <el-input v-model="infoForm.account">
              </el-input>
            </el-form-item>
            <el-form-item label="昵称" prop="name" :error="nameError">
              <el-input v-model="infoForm.name">
              </el-input>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <upload-img size="mini" :is-image="false" :on-success="uploadSuccess"></upload-img>
        </el-col>
        <el-col :span="16">
          <el-row>
            <el-button
              type="primary"
              size="small"
              style="margin-right: 15px"
              @click="submitForm('infoForm')">
                保 存
            </el-button>
            <router-link to="/my/info">
              <el-button size="small">
                取 消
              </el-button>
            </router-link>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>
<script>
import { updateUserInfo } from '@/api/user';
import Avatar from '@/components/avatar';
import UploadImg from '@/components/upload-img';

export default {
  components: {
    Avatar,
    UploadImg
  },
  data() {
    return {
      infoForm: {},
      nameError: '',
      accountError: '',
      infoRules: {
        name: [
          { required: true, message: '请输入昵称', trigger: 'blur' },
          { min: 2, max: 10, message: '请输入2~10字之内的昵称', trigger: ['blur', 'change'] }
        ],
        account: [
          { required: true, message: '请输入账号', trigger: 'blur' }
        ]
      }
    };
  },
  async created() {
    const result = await this.$store.dispatch('getUserInfo', this.$store.state.user.state);
    this.infoForm = result.user;
  },
  methods: {
    uploadSuccess(res) {
      this.infoForm.avatar = res.key;
    },
    submitForm(formName) {
      this.$refs[formName].validate(async (valid) => {
        if (valid) {
          const result = await updateUserInfo(this.infoForm);
          if (result) {
            this.$message({
              message: '保存成功',
              type: 'success'
            });
            this.$router.push({ path: '/my/info' });
          }
        }
        return false;
      });
    }
  }
};
</script>

<style lang="stylus">
@import "~@/styles/index"
.update-info
  .box-card
    width: 50%
    margin: auto
    .header
      text-align: left
    .info-form
      width: 70%
</style>

