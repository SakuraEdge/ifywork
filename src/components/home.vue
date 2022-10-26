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
            <div class="current"></div><img src="../static/picture/tag/home.png" style="width: 15px;height: 15px;"><span>首页</span>
          </a></li>
          <li class="navbar-hr"></li>
          <li class="swiper-slide navbar-item"><a href="/class" title="班级" class="links">
            <img src="../static/picture/tag/class.png" style="width: 15px;height: 15px;"><span>班级</span></a></li>
          <li class="swiper-slide navbar-item" ><a href="/course" title="课程" class="links" @click="goCourse()">
            <img src="../static/picture/tag/course.png" style="width: 15px;height: 15px;"><span>课程</span></a></li>
          <li class="swiper-slide navbar-item"><a href="/tag" class="links">
            <img src="../static/picture/tag/tag.png" style="width: 15px;height: 15px;">
            <span>标签</span></a>
          </li>
          <li class="swiper-slide navbar-item"><a href="/other" class="links">
            <img src="../static/picture/tag/knowlege.png" style="width: 15px;height: 15px;"><span>知识点</span></a>
          </li>
          <li class="navbar-hr"></li>
          <li class="swiper-slide navbar-item"><a href="/person"
                                                  class="links">
            <img src="../static/picture/tag/person.png" style="width: 20px;height: 20px;"><span>个人信息</span></a></li>
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
      <div class="content" style="font-size: 16px">
        <section class="board board-index">
          <div class="left-text">
            <h2 class="bigtext">GWORK</h2>
            <h3 class="middletext">轻松，快捷</h3>
            <div class="actions">
              <a href="/person" class="btn">个人信息</a>
              <a href="/class" class="btn">管理面板</a>
            </div>
          </div>
          <a class="float-down" href="#"></a>
        </section>
        <section class="board board-intro" style="--bg: url(https://nyat-static.globalslb.net/natfrp/index/bg2.jpg)">
          <a onclick="document.documentElement.scrollTop=window.innerHeight" id="intro" href="#" class="title-bar">
            <div class="bg"></div>
            <span> 介绍</span>
          </a>
          <div class="bg"></div>
          <div class="left-text">
            <div class="middletext">为什么要学习计算机语言？</div>
            穿后台、建网站、做调试、开游戏……<br><br>不会计算机语言，这些都无从谈起
          </div>
          <div class="right-pic">
          </div>
          <a class="float-down" href="#"></a>
        </section>
        <section class="board board-price" style="--bg: url(https://nyat-static.globalslb.net/natfrp/index/bg3.jpg)">
          <a onclick="document.documentElement.scrollTop=window.innerHeight*2" href="#" id="price" class="title-bar">
            <div class="bg"></div>
            <span></span>
          </a>
          <div class="bg"></div>
          <div class="left-text">
            <div class="middletext">耽误的事情太多</div>
            事情可就做不完了<br><br>劳逸结合是不错，但可别放松过头
          </div>
          <div class="right-pic">

          </div>
          <a class="float-down" href="#"></a>



        </section>
        <section class="board board-about">
          <a href="#" id="about" class="title-bar">
            <div class="bg" id="about-bg-s"></div>
            <span> 关于</span>
          </a>

          <div class="bg" id="about-bg"></div>
          <div class="left-text">
            <div class="middletext">GWORK 由 <br id="mobile-br">周毅与谢利杰共同开发</div>
            <br>
            <br>
            <span id="comname">安徽信息工程学院 </span> · 产业学院

            <div style="margin-top: 40px" class="actions">
              <a href="#" class="btn">QQ</a>
              <a href="#" id="joinusbtn" class="btn">微信</a>
            </div>
          </div>
        </section>

      </div>
    </div>
  </div>
  </body>

</template>

<script>
import '@/css/style.css'
import '@/css/person.css'
import '@/css/index.css'
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
// eslint-disable-next-line no-undef
</script>

<style scoped>

</style>