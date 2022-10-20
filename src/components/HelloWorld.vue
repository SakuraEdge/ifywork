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
            <p class="title">用户登录</p>
            <div class="login-form__item">
              <img src="../assets/picture/login/user.png" class="input-img">
              <input placeholder="身份证号码 | 邮箱 | 手机号" id="lo-account" class="input" tabindex="1">
            </div>
            <div class="login-form__item">
              <img src="../assets/picture/login/password.png" class="input-img">
              <input placeholder="请输入密码" id="lo-psw" class="input" tabindex="2" type="password">
            </div>
            <div>
              <br/><br/><br/><br/>
            </div>
            <div class="login-form__item ">
              <a href="javascript:void(0)" class="login-btn" tabindex="5" id="login">登 录</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </body>
</template>

<script>
export default {
}
</script>

<style>

</style>