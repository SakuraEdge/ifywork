<template>
  <body>
  <div class="homepage">
    <div class="header">
      <div class="header-box">
        <div class="logo"><a href="/" title="班级教务系统"><img
            style="height:100% !important;" class="logo1 pcbdmap"
            src="../static/picture/logo.png" /></a></div>
        <div class="search-box">
          <div class="searchbar-main">
            <form name="search">
              <div class="searchbar"><input class="search-input" type="text" name="wd"
                                            autocomplete="off" placeholder="搜索"><button class="search-btn search-go"
                                                                                        id="searchbutton" type="submit"><i class="icon-search"></i></button><button
                  class="cancel-btn" type="button">取消</button></div>
            </form>
          </div>
        </div>
        <div class="header-op">
          <div class="header-op-list">
            <div class="drop">
              <div class="header-op-list-btn header-op-history"><span><p id="TeacherName" style="color: #36ad6a">
                    未登录
                </p>
                </span></div>
              <div class="drop-content drop-history">
                <div class="drop-content-box">
                  <ul class="drop-content-items historical">
                    <li class="drop-item drop-item-title"><i
                        class="icon icon-history"></i><strong>我的班级记录</strong></li>
                  </ul>
                </div>
              </div>
              <div class="shortcuts-mobile-overlay"></div>
            </div>
            <div class="header-op-list-btn header-op-search"><i class="icon icon-search"></i></div>
          </div>
        </div>
      </div>
    </div>
    <div class="sidebar">
      <div class="navbar">
        <ul class="navbar-items swiper-wrapper">
          <li class="swiper-slide navbar-item"><a href="/home" class="links">
            <div class="current"></div><i class="icon-arrow-go"></i><i
              class="icon icon-home-o"></i><span>首页</span>
          </a></li>
          <li class="navbar-hr"></li>
          <li class="swiper-slide navbar-item active"><a href="" title="班级" class="links"><i
              class="icon-arrow-go"></i><i class="icon-dm"></i><span>班级</span></a></li>
          <li class="swiper-slide navbar-item"><a href="/course" title="课程" class="links" v-on:click="goCourse()"><i
              class="icon-arrow-go"></i><i class="icon-tv"></i><span>课程</span></a></li>
          <li class="navbar-hr"></li>
          <li class="swiper-slide navbar-item"><a href="/tag" class="links"><i
              class="icon-arrow-go"></i><i class="icon icon-ranking-o"></i><span>标签</span></a>
          </li>
          <li class="swiper-slide navbar-item"><a href="/person"
                                                  class="links"><i class="icon-arrow-go"></i><i
              class="icon icon-phone-o"></i><span>个人信息</span></a></li>
        </ul>
      </div>
      <div class="side-op">
        <div class="header-op-list">
          <div class="drop">
            <div class="header-op-list-btn header-op-history"><i
                class="icon icon-history-o"></i><span>班级记录</span></div>
            <div class="drop-content drop-history">
              <div class="drop-content-box">
                <ul class="drop-content-items historical">
                  <li class="drop-item drop-item-title"><i
                      class="icon icon-history"></i><strong>我的班级</strong></li>
                </ul>
              </div>
            </div>
            <div class="shortcuts-mobile-overlay"></div>
          </div>
          <div class="header-op-list-btn header-op-search"><i class="icon icon-search"></i></div>
        </div>
      </div>
    </div>
    <div class="main">
      <div class="content">
        <div>
          <div role="none" class="n-space" data-v-95e7e64a=""
               style="display: flex; flex-flow: row wrap; justify-content: flex-end; gap: 8px 12px;">
            <div role="none" style="max-width: 100%;"><button @click="dialogShow"
                                                              class="n-button n-button--primary-type n-button--medium-type n-button--ghost"
                                                              tabindex="0" type="button"
                                                              style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-bezier-ease-out:cubic-bezier(0, 0, 0.2, 1); --n-ripple-duration:0.6s; --n-opacity-disabled:0.5; --n-wave-opacity:0.6; font-weight: 400; --n-color:#0000; --n-color-hover:#0000; --n-color-pressed:#0000; --n-color-focus:#0000; --n-color-disabled:#0000; --n-ripple-color:#18a058; --n-text-color:#18a058; --n-text-color-hover:#36ad6a; --n-text-color-pressed:#0c7a43; --n-text-color-focus:#36ad6a; --n-text-color-disabled:#18a058; --n-border:1px solid #18a058; --n-border-hover:1px solid #36ad6a; --n-border-pressed:1px solid #0c7a43; --n-border-focus:1px solid #36ad6a; --n-border-disabled:1px solid #18a058; --n-width: initial; --n-height:34px; --n-font-size:14px; --n-padding:0 14px; --n-icon-size:18px; --n-icon-margin:6px; --n-border-radius:3px;">
              <!----><span class="n-button__icon">
                                      <div class="n-icon-slot" role="none"><i role="img" class="n-icon"
                                                                              data-v-95e7e64a="" style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1);"><svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
                                          data-v-95e7e64a="">
                                            <path
                                                d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67l-.5-.68C10.96 2.54 10.05 2 9 2C7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1s-1-.45-1-1s.45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83L8.62 12L11 8.76l1-1.36l1 1.36L15.38 12L17 10.83L14.92 8H20v6z"
                                                fill="currentColor"></path>
                                          </svg></i></div>
                                    </span><span class="n-button__content"> 创建班级 </span>
            </button>
            </div>
          </div>
          <div class="module">
            <div class="module-heading"><i class="icon-hot" style="color:#FF0000"></i>
              <h2 class="module-title">我的班级</h2>
            </div>
            <div class="module-main scroll-box">
              <div class="module-items module-poster-items-small scroll-content">
                <a v-for="i in dataList" v-bind:key="i"
                  href="" title=""
                  class="module-poster-item module-item">
                <div class="module-item-cover">
                  <div class="module-item-note">{{i}}</div>
                  <div class="module-item-pic"><img class="lazy lazyload"
                                                    alt="" referrerpolicy="no-referrer" src="../static/picture/backgroud.png"></div>
                </div>
                <div class="module-poster-item-info">
                  <div class="module-poster-item-title">{{i}}</div>
                </div>
              </a>


                <a href="" title=""
                     class="module-poster-item module-item">
                <div class="module-item-cover">
                </div>
                <div class="module-poster-item-info">
                </div>
              </a><a href="" title=""
                     class="module-poster-item module-item">
                <div class="module-item-cover">
                </div>
              </a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="dialog" class="dialog" style="text-align: center;display: none;position: absolute;left: 50%;top: 50%;transform: translate(-50%,-50%);/">
    <img @click="dialogNone" style="float: right;width: 30px;height: 30px" src="../static/picture/close.png">
    <h2><img src="" alt="" class="close" />创建班级</h2>
    <form id="loginForm" >
      <div class="info"></div>
      <div class="pass">班级名称：<input type="text" id="classname" class="text" /></div>
      <br>
      <div class="pass">最大人数：<input type="text" id="maxnum" class="text" /></div>
      <br>
      <div class="pass">班级地址：<input type="text" id="address" class="text" /></div>
      <br>
      <div class="button"><button v-on:click="createClass" class="submit" value="">创建</button>
      </div>
    </form>
  </div>
  </body>

</template>

<script>
import '@/css/style.css'
import '@/css/swiper-bundle.min.css'
import '@/css/person.css'
import '@/css/dialog.css'
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "class",
  data() {
    return {
      dataList:[],//初始化dataList并清空
      name:null,
    };
  },

  created() {
    const that = this;

    axios({
      method: 'POST',    //提交方法
      url: '/api/IsLoginServlet',    //后端的servlet登录接口
      data: {
      },
    }).then(res => {
      document.getElementById("TeacherName").innerText = res.data;
      that.name = res.data;
    })

    setTimeout(()=>{
      axios({
        method: 'POST',    //提交方法
        url: '/api/SelectClassServlet',    //后端的servlet登录接口
        data: {
          teacherID: that.name
        },
      }).then(res => {
        //对后端servlet接口返回的数据进行输出
        that.dataList = res.data.split(",");
      })},50);
  },

  methods:{
    dialogShow:function (){
      document.getElementById("dialog").style.display="block";
    },
    dialogNone:function (){
      document.getElementById("dialog").style.display="none";
    },




    createClass() {
      axios({
        method: 'POST',    //提交方法
        url: '/api/CreateServlet',    //后端的servlet登录接口
        data: {
          name: document.getElementById("classname").value,
          num: document.getElementById("maxnum").value,
          address: document.getElementById("address").value,
        },
      }).then(res => {
        alert(res.data);     //对后端servlet接口返回的数据进行输出
        this.dialogNone();
        location. reload();
      })
    },
  }
}

</script>

<style scoped>

</style>