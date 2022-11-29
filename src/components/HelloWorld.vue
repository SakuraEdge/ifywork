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
          <input className="button" type="button" v-on:click="login" style="margin-top: 115px;margin-left: 0px" value="登&nbsp;录">


        </div>
        <div className="dom">
          <div className="s1">
            <br><br><br>
            <h>手机号码</h>
            <input className="input" type="text" id="reg_tel" placeholder="填写你的手机号码作为登录账户">
          </div>
          <div className="s1">
            <h>用户名</h>
            <input className="input" type="text" id="reg_user" placeholder="中、英文均可, 最长20个字符或10个汉字">
          </div>
          <div className="s1">
            <h>密码</h>
            <input className="input" type="password" id="reg_pwd" placeholder="6-30位英文、数字、符号, 区分大小写">
          </div>
          <span>&ensp;</span>
          <input className="button" type="button" v-on:click="reg" style="margin-top: 61px;margin-left: 8px" value="注&nbsp;册">
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
import '@/css/login.css';


export default {
  name: 'HelloWorld',
  methods: {
    login() {
      function setName() {
        axios({
          method: 'POST',    //提交方法
          url: '/api/SetName',    //后端的servlet登录接口
          data: {
            userName: document.getElementById("login_id").value,    //传输的用户名
          },
        }).then(res =>{

        })
      }

      axios({
        method: 'POST',    //提交方法
        url: '/api/Login',    //后端的servlet登录接口
        data: {
          userName: document.getElementById("login_id").value,    //传输的用户名
          password: document.getElementById("login_pwd").value,    //传输的密码
        },
      }).then(res => {
        if(res.data){
          setName();
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
        url: '/api/Register',    //后端的servlet登录接口
        data: {
          userName: document.getElementById("reg_user").value,    //传输的用户名
          tel: document.getElementById("reg_tel").value,
          password: document.getElementById("reg_pwd").value,    //传输的密码
        },
      }).then(res => {
        alert("注册成功！你的唯一ID为:"+res.data+"\n请注意保存！");     //对后端servlet接口返回的数据进行输出
      })
    },
  }
}

</script>

