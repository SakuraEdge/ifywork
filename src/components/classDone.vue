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
          <li class="swiper-slide navbar-item"><a href="/home" class="links">
            <div class="current"></div><img src="../static/picture/tag/home.png" style="width: 15px;height: 15px;"><span>首页</span>
          </a></li>
          <li class="navbar-hr"></li>
          <li class="swiper-slide navbar-item active"><a href="/class" title="班级" class="links">
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
                                    </span><span class="n-button__content"> 添加学生 </span>
            </button>
            </div>
          </div>

          <div class="module">
            <div class="module-heading"><i class="icon-hot" style="color:#FF0000"></i>
              <h2 class="module-title">{{name}}（班级学生信息）</h2>
            </div>
            <div class="module-main scroll-box">
              <div class="module-items module-poster-items-small scroll-content">
                <a v-for="(key,value) in map" v-bind:key="key"
                    title="" @contextmenu.prevent="rightClick(key)"
                   class="module-poster-item module-item">
                  <div class="module-item-cover">
                    <div class="module-item-note">学号：{{key}}</div>
                    <div class="module-item-pic"><img class="lazy lazyload"
                                                      referrerpolicy="no-referrer" src="../static/picture/classPerson.gif"></div>
                  </div>
                  <div class="module-poster-item-info">
                    <div class="module-poster-item-title">{{value}}</div>
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
        <div id="dialog" class="dialog" style="text-align: center;display: none;position: absolute;left: 50%;top: 50%;
        transform: translate(-50%,-50%);height: 150px">
          <img @click="dialogNone" style="float: right;width: 30px;height: 30px" src="../static/picture/close.png" alt="">
          <h2><img src="" alt="" class="close" />添加学生(输入学号)</h2>
          <form id="loginForm" >
            <div class="info"></div>
            <div class="pass"><input type="text" id="studentID" class="text" style="width: 300px"/></div>
            <br>
            <div class="button"><button  @click="addStu()">添加学生</button>
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
import '@/css/style.css'
import '@/css/swiper-bundle.min.css'
import '@/css/person.css'
import '@/css/dialog.css'
import axios from 'axios'

axios({
  method: 'POST',    //提交方法
  url: '/api/IsLogin',    //后端的servlet登录接口
  data: {
  },
}).then(res => {
  document.getElementById("TeacherName").innerText = res.data;
})

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "classDone",
  data() {
    return {
      name: null,
      map:null,
    };
  },
  created() {
    const that = this;
    let className = sessionStorage.getItem("className");
    that.name = className;
    axios({
      method: 'POST',    //提交方法
      url: '/api/SelectStudent',    //后端的servlet登录接口
      data: {
        classname:className
      },
    }).then(res => {
        that.map= res.data;
    })
  },
  methods: {
    dialogShow: function () {
      document.getElementById("dialog").style.display = "block";
    },
    dialogNone: function () {
      document.getElementById("dialog").style.display = "none";
    },
    removeStu(id){
      axios({
        method: 'POST',    //提交方法
        url: '/api/DeleteStudent',    //后端的servlet登录接口
        data: {
          classname:this.name,
          id:id,
        },
      }).then(res => {
        location. reload();
      })
    },
    addStu(){
      axios({
        method: 'POST',    //提交方法
        url: '/api/StudentAdd',    //后端的servlet登录接口
        data: {
          classname:this.name,
          studentid:document.getElementById("studentID").value,
        },
      }).then(res => {
        location. reload();
      })
    },
    rightClick(id) {
      // 鼠标右击触发事件
      let del = confirm("您确定要删除吗？")
      if (del){
        this.removeStu(id);
      }
    },
  }
}
</script>

<style scoped>

</style>