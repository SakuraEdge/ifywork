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
          <div>
            <p>验证码：</p>
            <input style="
            width: 150px;margin: 0 0 0 0;border: 1px solid #D7E1F1;
            height: 40px;
            border-radius: 4px;
            line-height: 40px;
            padding-left: 50px;"
                   type="text" id="login_check" placeholder="请输入验证码">
            <canvas id="canvas" width="100" height="43" style="border: 1px solid #ccc;margin-top: 0;
            border-radius: 5px;vertical-align: top" @click="dj()"></canvas>

          </div>
          <div className="s1">
            <input type="checkbox">
            <span>记住密码</span>
          </div>
          <span>&ensp;&ensp;</span>
          <input className="button" type="button" v-on:click="login" style="margin-top: 35px;margin-left: 0px" value="登&nbsp;录">


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
          <input className="button" type="button" v-on:click="reg" style="margin-top: 65px;margin-left: 8px" value="注&nbsp;册">
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
  data() {
    return {
      showNum: []
    }
  },
  created() {
    setTimeout(()=>{
      let that = this;
      this.draw(that.showNum);
      },50);
  },
  methods: {
    login() {
      let that = this;
      let num = that.showNum.join("").toLowerCase();

      if(document.getElementById("login_check").value.toLowerCase() !== num){
        alert("验证码错误！");
        this.dj();
        return;
      }

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
        alert(res.data);     //对后端servlet接口返回的数据进行输出
      })
    },
    dj(){
      let that = this;
      this.draw(that.showNum);
    },
    draw(show_num) {
      let canvas_width=document.getElementById('canvas').clientWidth;
      let canvas_height=document.getElementById('canvas').clientHeight;
      let canvas = document.getElementById("canvas");//获取到canvas的对象，演员
      let context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
      canvas.width = canvas_width;
      canvas.height = canvas_height;
      let sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m";
      let aCode = sCode.split(",");
      let aLength = aCode.length;//获取到数组的长度

      for (let i = 0; i <= 3; i++) {
        let j = Math.floor(Math.random() * aLength);//获取到随机的索引值
        let deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
        let txt = aCode[j];//得到随机的一个内容
        show_num[i] = txt;
        let x = 10 + i * 20;//文字在canvas上的x坐标
        let y = 20 + Math.random() * 8;//文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = this.randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
  }
  for (let i = 0; i <= 5; i++) { //验证码上显示线条
    context.strokeStyle = this.randomColor();
    context.beginPath();
    context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
    context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
    context.stroke();
  }
  for (let i = 0; i <= 30; i++) { //验证码上显示小点
    context.strokeStyle = this.randomColor();
    context.beginPath();
    let x = Math.random() * canvas_width;
    let y = Math.random() * canvas_height;
    context.moveTo(x, y);
    context.lineTo(x + 1, y + 1);
    context.stroke();
  }
},
  randomColor() {//得到随机的颜色值
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
  }
}

</script>

