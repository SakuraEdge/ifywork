<template>
  <div>
    <div class="outer_label">
      <img class="inner_label login_logo" src="../assets/logo.png">
    </div>
    <div class="login_form">
      <input type="text"  class="qxs-ic_user qxs-icon"  placeholder="用户名" v-model="userName">
      <input type="text"  class="qxs-ic_password qxs-icon"  placeholder="密码" v-model="password">
      <el-button class="login_btn" type="primary" round :loading="isBtnLoading">登录</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: '',
      password: '',
      isBtnLoading: false
    }
  },
  created() {
    if (JSON.parse(localStorage.getItem('user')) && JSON.parse(localStorage.getItem('user')).userName) {
      this.userName = JSON.parse(localStorage.getItem('user')).userName;
      this.password = JSON.parse(localStorage.getItem('user')).password;
    }
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return '登录中...';
      return '登录';
    }
  },
  methods: {
    login() {
      if (!this.userName) {
        this.$message.error('请输入用户名');
        return;
      }
      if (!this.password) {
        this.$message.error('请输入密码');
        return;
      }
      //  开始真正的登陆请求

    }
  }
}
</script>

<style>
.login_form {
  padding-top: 5%;
  padding-left: 35%;
  padding-right: 10%;
}
.qxs-ic_user {
  background-size: 13px 15px;
  background: no-repeat 3%;
}
.qxs-ic_password {
  background-size: 13px 15px;
  background: no-repeat 3%;
  margin-bottom: 20px;
}
.login_logo {
  height: 100%;
}
.login_btn {
  margin-left: 5%;
  width: 50%;
  font-size: 16px;
  background: -webkit-linear-gradient(left, #000099, #2154FA); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #000099, #2154FA); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #000099, #2154FA); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #000099 , #2154FA); /* 标准的语法 */
  filter: brightness(1.4);
}
</style>