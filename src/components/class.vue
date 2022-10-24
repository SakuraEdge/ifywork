<template>
  <body>
  <div class="homepage">
    <div class="header">
      <div class="header-box">
        <div class="logo"><a href="/" title="班级教务系统"><img
            style="height:100% !important;" class="logo1 pcbdmap"
            src="../../public/picture/logo.png" /></a></div>
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
              <div class="header-op-list-btn header-op-history"><i
                  class="icon icon-history-o"></i><span>班级记录</span></div>
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
        <div class="module">
          <div class="module-heading"><i class="icon-hot" style="color:#FF0000"></i>
            <h2 class="module-title">我的班级</h2>
          </div>
          <div class="module-main scroll-box">
            <div class="module-items module-poster-items-small scroll-content"><a
                href="" title=""
                class="module-poster-item module-item">
              <div class="module-item-cover">
                <div class="module-item-note">测试2</div>
                <div class="module-item-pic"><img class="lazy lazyload"
                                                  alt="" referrerpolicy="no-referrer" src=""></div>
              </div>
              <div class="module-poster-item-info">
                <div class="module-poster-item-title">软件2001</div>
              </div>
            </a><a href="" title=""
                   class="module-poster-item module-item">
              <div class="module-item-cover">
                <div class="module-item-note">测试2</div>
                <div class="module-item-pic"><img class="lazy lazyload"
                                                  alt="" referrerpolicy="no-referrer" src=""></div>
              </div>
              <div class="module-poster-item-info">
                <div class="module-poster-item-title">软件2002</div>
              </div>
            </a><a href="" title=""
                   class="module-poster-item module-item">
              <div class="module-item-cover">
                <div class="module-item-note">测试3</div>
                <div class="module-item-pic"><img class="lazy lazyload"
                                                  alt="" referrerpolicy="no-referrer" src=""></div>
              </div>
              <div class="module-poster-item-info">
                <div class="module-poster-item-title">测试3</div>
              </div>
            </a><a href="" title="间谍过家家Part2"
                   class="module-poster-item module-item">
              <div class="module-item-cover">
                <div class="module-item-note">测试3</div>
                <div class="module-item-pic"><img class="lazy lazyload"
                                                  alt="间谍过家家Part2" referrerpolicy="no-referrer" src=""></div>
              </div>
              <div class="module-poster-item-info">
                <div class="module-poster-item-title">测试3</div>
              </div>
            </a></div>
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


export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "class",
}
</script>

<style scoped>

</style>