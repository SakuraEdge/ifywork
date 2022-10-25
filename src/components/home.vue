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
                </p></span></div>
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
          <li class="swiper-slide navbar-item active"><a href="/home" class="links">
            <div class="current"></div><i class="icon-arrow-go"></i><i
              class="icon icon-home-o"></i><span>首页</span>
          </a></li>
          <li class="navbar-hr"></li>
          <li class="swiper-slide navbar-item"><a href="/class" title="班级" class="links"><i
              class="icon-arrow-go"></i><i class="icon-dm"></i><span>班级</span></a></li>
          <li class="swiper-slide navbar-item" ><a href="/course" title="课程" class="links" @click="goCourse()"><i
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
        <div class="banner">
          <ul id = 'myView'>
            <li>
              <a href="#" >
                <img src="../static/picture/view1.png">
              </a>
            </li>
            <li>
              <a href="#" >
                <img src="../static/picture/view1.png">
              </a>
            </li>
            <li>
              <a href="#" >
                <img src="../static/picture/view1.png">
              </a>
            </li>
            <li>
              <a href="#" >
                <img src="../static/picture/view1.png">
              </a>
            </li>
            <li>
              <a href="#" >
                <img src="../static/picture/view1.png">
              </a>
            </li>
          </ul>
          <ol>

          </ol>
          <a href="#" class="left">&lt;</a>
          <a href="#" class="right">&gt;</a>
        </div>
      </div>
        </div>
      </div>
  </body>

</template>

<script>
import '@/css/style.css'
import '@/css/swiper-bundle.min.css'
import axios from 'axios'

axios({
  method: 'POST',    //提交方法
  url: '/api/IsLoginServlet',    //后端的servlet登录接口
  data: {
  },
}).then(res => {
  document.getElementById("TeacherName").innerText = res.data;
})

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "home"
}
</script>

<style scoped>

</style>