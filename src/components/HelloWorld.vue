
<template>
  <body class="reg_login">
  <div class="login-page">
    <div class="logo-warp">
      <img src="../assets/picture/login/logo.png" class="logo">
    </div>
    <div class="content-warp" >
      <div class="login-warp">
        <div class="account-login" style="display: block;">
          <br/><br/>
          <div class="login-form">
            <form>
              <p class="title">用户登录</p>
              <div class="login-form__item">
                <img src="../assets/picture/login/user.png" class="input-img">
                <input placeholder="用户名" id="lo-account" class="input" tabindex="1">
              </div>
              <div class="login-form__item">
                <img src="../assets/picture/login/password.png" class="input-img">
                <input placeholder="请输入密码" id="lo-psw" class="input" tabindex="2" type="password">
              </div>
              <div>
                <br/><br/><br/><br/>
              </div>
              <div class="login-form__item ">
                <input type="button" v-on:click="msgpost" class="login-btn" tabindex="5" id="login" value="登 录">
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
import axios from "axios"

export default {
  name: 'HelloWorld',
  methods:{
    msgpost() {
      axios({
        method: 'POST',    //提交方法
        url: '/api/MyServlet',    //后端的servlet登录接口
        data: {
          userName: document.getElementById("lo-account").value,    //传输的用户名
          password: document.getElementById("lo-psw").value,    //传输的密码
        },
      }).then(res => {
        console.log(res);     //对后端servlet接口返回的数据进行输出
      })
    }
  }
}


</script>

<style>

</style>