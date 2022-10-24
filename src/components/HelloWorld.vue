<template>
  <div className="bk">
    <section id="content">
      <div className="header">
        <a href="javascript:;" className="current">我要登录</a>
        <a href="javascript:;">我要注册</a>
      </div>
      <div id=body>
        <div className="dom" style="display: block;">
          <div className="s1">
            <br><br><br>
            <h>账号</h>
            <input className="input" type="text" id="login_id" placeholder="手机/邮箱/用户名">
          </div>
          <div className="s1">
            <h>密码</h>
            <input className="input" type="password" id="login_pwd" placeholder="密码">
          </div>
          <div className="s1">
            <input type="checkbox">
            <span>记住密码</span>
          </div>
          <span>&ensp;&ensp;</span>
          <br><br><br>
          <input className="button" type="button" v-on:click="login" value="登&nbsp;录">

          <br><br><br>
          <div className="s1">
            <span>&ensp;&ensp;&ensp;&ensp;</span>
            <a href="#">找回密码</a>
            <span>|</span>
            <span>还没有注册帐号?</span>
            <a href="#">立即注册</a>
          </div>
        </div>
        <div className="dom">
          <form>
            <br><br><br>
            <div className="s1">
              <h>手机号码</h>
              <input className="input" type="text" placeholder="填写你的手机号码作为登录账户">
            </div>
            <div className="s1">
              <h>用户名</h>
              <input className="input" type="password" placeholder="中、英文均可, 最长20个字符或10个汉字">
            </div>
            <div className="s1">
              <h>密码</h>
              <input className="input" type="text" placeholder="6-30位英文、数字、符号, 区分大小写">
            </div>
            <span>&ensp;</span>
            <br><br><br>
            <input className="button" type="submit" value="注&nbsp;册">
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
window.onload = function () {
  // 1.1 获取需要的标签
  let as = document.getElementsByClassName('header')[0].getElementsByTagName('a');
  let contents = document.getElementsByClassName('dom');
  // 1.2 遍历
  for (let i = 0; i < as.length; i++) {
    // 1.2.1 取出单个对象
    let a = as[i];
    a.id = i;
    // 1.2.2 监听鼠标的移动事件
    a.onclick = function () {
      // 让所有的a的class都清除
      for (let j = 0; j < as.length; j++) {
        as[j].className = '';
        contents[j].style.display = 'none';
      }
      // 设置当前a的class
      this.className = 'current';
      // 从contents数组中取出对应的标签
      contents[this.id].style.display = 'block';
    }
  }
}
import axios from "axios";

export default {
  name: 'HelloWorld',
  methods: {
    login() {
      axios({
        method: 'POST',    //提交方法
        url: '/api/MyServlet',    //后端的servlet登录接口
        data: {
          userName: document.getElementById("login_id").value,    //传输的用户名
          password: document.getElementById("login_pwd").value,    //传输的密码
        },
      }).then(res => {
        if(res.data){
          this.$router.push("home");
        }
        else{
          alert("密码错误！");
        }
      })
    },
    reg() {
      axios({
        method: 'POST',    //提交方法
        url: '/api/MyServlet',    //后端的servlet登录接口
        data: {
          userName: 3519,    //传输的用户名
          password: 123456,    //传输的密码
        },
      }).then(res => {
        console.log(res);     //对后端servlet接口返回的数据进行输出
      })
    },
  }
}

</script>

