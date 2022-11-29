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
          <li class="swiper-slide navbar-item active"><a href="/person"
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
      <div class="app">
        <div class="n-layout n-layout--absolute-positioned"
             style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-color:#fafafc; --n-text-color:rgb(51, 54, 57); top: 64px; bottom: 0px;">
          <div role="none" class="n-scrollbar"
               style="--n-scrollbar-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-scrollbar-color:rgba(0, 0, 0, 0.25); --n-scrollbar-color-hover:rgba(0, 0, 0, 0.4); --n-scrollbar-border-radius:5px; --n-scrollbar-width:5px; --n-scrollbar-height:5px;">
            <div role="none" class="n-scrollbar-container">
              <div role="none" class="n-scrollbar-content">
                <div class="container" data-v-95e7e64a="">
                  <div class="n-grid"
                       style="width: 100%; display: grid; grid-template-columns: repeat(12, minmax(0px, 1fr)); gap: 16px;">
                    <div data-v-95e7e64a="" style="grid-column: span 8 / span 8;">
                      <div class="n-card n-card--bordered" data-v-95e7e64a=""
                           style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-border-radius:3px; --n-color:#fff; --n-color-modal:#fff; --n-color-popover:#fff; --n-color-embedded:rgb(250, 250, 252); --n-color-embedded-modal:rgb(250, 250, 252); --n-color-embedded-popover:rgb(250, 250, 252); --n-color-target:#18a058; --n-text-color:rgb(51, 54, 57); --n-line-height:1.6; --n-action-color:rgb(250, 250, 252); --n-title-text-color:rgb(31, 34, 37); --n-title-font-weight:500; --n-close-icon-color:rgba(102, 102, 102, 1); --n-close-icon-color-hover:rgba(102, 102, 102, 1); --n-close-icon-color-pressed:rgba(102, 102, 102, 1); --n-close-color-hover:rgba(0, 0, 0, 0.09); --n-close-color-pressed:rgba(0, 0, 0, 0.13); --n-border-color:rgb(239, 239, 245); --n-box-shadow:0 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 5px 12px 4px rgba(0, 0, 0, 0.04); --n-padding-top:19px; --n-padding-bottom:20px; --n-padding-left:24px; --n-font-size:14px; --n-title-font-size:18px; --n-close-size:22px; --n-close-icon-size:18px; --n-close-border-radius:3px;">
                        <!---->
                        <!---->
                        <div class="n-card__content" role="none">
                          <div class="n-page-header-wrapper" data-v-95e7e64a=""
                               style="--n-title-text-color:rgb(31, 34, 37); --n-title-font-size:18px; --n-title-font-weight:500; --n-font-size:14px; --n-back-size:22px; --n-subtitle-text-color:rgb(118, 124, 130); --n-back-color:rgb(51, 54, 57); --n-back-color-hover:#36ad6a; --n-back-color-pressed:#0c7a43; --n-bezier:cubic-bezier(0.4, 0, 0.2, 1);">
                            <!---->
                            <div class="n-page-header">
                              <div class="n-page-header__main">
                                <!---->
                                <div class="n-page-header__avatar"><span class="n-avatar" data-v-95e7e64a=""
                                                                         style="--n-font-size:14px; --n-border:none; --n-border-radius:3px; --n-color:rgba(204, 204, 204, 1); --n-color-modal:rgba(204, 204, 204, 1); --n-color-popover:rgba(204, 204, 204, 1); --n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-merged-size:var( --n-action-color,34px);">
                                  <img style="height: 25px;width: 25px;"
                                    loading="eager"
                                    src="../static/picture/header.png"
                                    data-image-src="https://gravatar.globalslb.net/avatar/7a16b91f8f5ada279b7095530ebc571d">
                                  <!---->
                                      </span></div>
                                <div class="n-page-header__title">{{personName}}</div>
                                <div class="n-page-header__subtitle">普通用户 · <span data-v-95e7e64a="">长期有效</span>
                                </div>
                              </div>
                              <!---->
                            </div>
                            <div class="n-page-header-content">
                              <div class="n-grid" data-v-95e7e64a=""
                                   style="width: 100%; display: grid; grid-template-columns: repeat(4, minmax(0px, 1fr)); gap: 0px;">
                                <div data-v-95e7e64a="" style="grid-column: span 1 / span 1;">
                                  <div class="n-statistic" data-v-95e7e64a=""
                                       style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-label-font-size:14px; --n-label-font-weight:400; --n-label-text-color:rgb(118, 124, 130); --n-value-font-weight:400; --n-value-font-size:24px; --n-value-prefix-text-color:rgb(51, 54, 57); --n-value-suffix-text-color:rgb(51, 54, 57); --n-value-text-color:rgb(51, 54, 57);">
                                    <div class="n-statistic__label">UID</div>
                                    <div class="n-statistic-value">
                                      <!----><span class="n-statistic-value__content">{{personNum}}</span>
                                      <!---->
                                    </div>
                                  </div>
                                </div>
                                <div data-v-95e7e64a="" style="grid-column: span 1 / span 1;">
                                  <div class="n-statistic" data-v-95e7e64a=""
                                       style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-label-font-size:14px; --n-label-font-weight:400; --n-label-text-color:rgb(118, 124, 130); --n-value-font-weight:400; --n-value-font-size:24px; --n-value-prefix-text-color:rgb(51, 54, 57); --n-value-suffix-text-color:rgb(51, 54, 57); --n-value-text-color:rgb(51, 54, 57);">
                                    <div class="n-statistic__label">成就</div>
                                    <div class="n-statistic-value">
                                      <!----><span class="n-statistic-value__content">19 / 20</span>
                                      <!---->
                                    </div>
                                  </div>
                                </div>
                                <div data-v-95e7e64a="" style="grid-column: span 1 / span 1;">
                                  <div class="n-statistic" data-v-95e7e64a=""
                                       style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-label-font-size:14px; --n-label-font-weight:400; --n-label-text-color:rgb(118, 124, 130); --n-value-font-weight:400; --n-value-font-size:24px; --n-value-prefix-text-color:rgb(51, 54, 57); --n-value-suffix-text-color:rgb(51, 54, 57); --n-value-text-color:rgb(51, 54, 57);">
                                    <div class="n-statistic__label">权限</div>
                                    <div class="n-statistic-value">
                                      <!----><span class="n-statistic-value__content">
                                            <!---->
                                            <div data-v-95e7e64a="">普通</div>
                                      <!---->
                                          </span>
                                      <!---->
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="n-page-header-footer">
                              <div role="none" class="n-space" data-v-95e7e64a=""
                                   style="display: flex; flex-flow: row wrap; justify-content: flex-start; gap: 8px 12px;">
                                <div role="none" style="max-width: 100%;">
                                  <!---->

                                  <!---->
                                </div>
                                <div role="none" style="max-width: 100%;"><a @click="dialogShow"
                                    class="n-button n-button--default-type n-button--medium-type" tabindex="0"
                                    type="button" disabled="false" href="#" data-v-95e7e64a=""
                                    style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-bezier-ease-out:cubic-bezier(0, 0, 0.2, 1); --n-ripple-duration:0.6s; --n-opacity-disabled:0.5; --n-wave-opacity:0.6; font-weight: 400; --n-color:#0000; --n-color-hover:#0000; --n-color-pressed:#0000; --n-color-focus:#0000; --n-color-disabled:#0000; --n-ripple-color:#18a058; --n-text-color:rgb(51, 54, 57); --n-text-color-hover:#36ad6a; --n-text-color-pressed:#0c7a43; --n-text-color-focus:#36ad6a; --n-text-color-disabled:rgb(51, 54, 57); --n-border:1px solid rgb(224, 224, 230); --n-border-hover:1px solid #36ad6a; --n-border-pressed:1px solid #0c7a43; --n-border-focus:1px solid #36ad6a; --n-border-disabled:1px solid rgb(224, 224, 230); --n-width: initial; --n-height:34px; --n-font-size:14px; --n-padding:0 14px; --n-icon-size:18px; --n-icon-margin:6px; --n-border-radius:3px;">
                                  <!----><span class="n-button__icon">
                                          <div class="n-icon-slot" role="none"><i role="img" class="n-icon"
                                                                                  data-v-95e7e64a="" style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1);"><svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"
                                              data-v-95e7e64a="">
                                                <path
                                                    d="M2 17h20v2H2v-2zm1.15-4.05L4 11.47l.85 1.48l1.3-.75l-.85-1.48H7v-1.5H5.3l.85-1.47L4.85 7L4 8.47L3.15 7l-1.3.75l.85 1.47H1v1.5h1.7l-.85 1.48l1.3.75zm6.7-.75l1.3.75l.85-1.48l.85 1.48l1.3-.75l-.85-1.48H15v-1.5h-1.7l.85-1.47l-1.3-.75L12 8.47L11.15 7l-1.3.75l.85 1.47H9v1.5h1.7l-.85 1.48zM23 9.22h-1.7l.85-1.47l-1.3-.75L20 8.47L19.15 7l-1.3.75l.85 1.47H17v1.5h1.7l-.85 1.48l1.3.75l.85-1.48l.85 1.48l1.3-.75l-.85-1.48H23v-1.5z"
                                                    fill="currentColor"></path>
                                              </svg></i></div>
                                        </span><span class="n-button__content"> 修改密码 </span>
                                  <div aria-hidden="true" class="n-base-wave"></div>
                                  <div aria-hidden="true" class="n-button__border"></div>
                                  <div aria-hidden="true" class="n-button__state-border"></div>
                                </a></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <!---->
                        <!---->
                      </div>
                    </div>
                    <div data-v-95e7e64a="" style="grid-column: span 4 / span 4;">
                      <div class="n-card n-card--bordered" data-v-95e7e64a=""
                           style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-border-radius:3px; --n-color:#fff; --n-color-modal:#fff; --n-color-popover:#fff; --n-color-embedded:rgb(250, 250, 252); --n-color-embedded-modal:rgb(250, 250, 252); --n-color-embedded-popover:rgb(250, 250, 252); --n-color-target:#18a058; --n-text-color:rgb(51, 54, 57); --n-line-height:1.6; --n-action-color:rgb(250, 250, 252); --n-title-text-color:rgb(31, 34, 37); --n-title-font-weight:500; --n-close-icon-color:rgba(102, 102, 102, 1); --n-close-icon-color-hover:rgba(102, 102, 102, 1); --n-close-icon-color-pressed:rgba(102, 102, 102, 1); --n-close-color-hover:rgba(0, 0, 0, 0.09); --n-close-color-pressed:rgba(0, 0, 0, 0.13); --n-border-color:rgb(239, 239, 245); --n-box-shadow:0 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 5px 12px 4px rgba(0, 0, 0, 0.04); --n-padding-top:19px; --n-padding-bottom:20px; --n-padding-left:24px; --n-font-size:14px; --n-title-font-size:18px; --n-close-size:22px; --n-close-icon-size:18px; --n-close-border-radius:3px; height: 100%;">
                        <!---->
                        <div class="n-card-header">
                          <div class="n-card-header__main" role="heading"> 签到 </div>
                          <!---->
                          <!---->
                        </div>
                        <div class="n-card__content" role="none">

                          <div class="n-input n-input--resizable n-input--stateful" data-v-95e7e64a=""
                               style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-count-text-color:rgb(118, 124, 130); --n-count-text-color-disabled:rgba(194, 194, 194, 1); --n-color:rgba(255, 255, 255, 1); --n-font-size:14px; --n-border-radius:3px; --n-height:34px; --n-padding-left:12px; --n-padding-right:12px; --n-text-color:rgb(51, 54, 57); --n-caret-color:#18a058; --n-text-decoration-color:rgb(51, 54, 57); --n-border:1px solid rgb(224, 224, 230); --n-border-disabled:1px solid rgb(224, 224, 230); --n-border-hover:1px solid #36ad6a; --n-border-focus:1px solid #36ad6a; --n-placeholder-color:rgba(194, 194, 194, 1); --n-placeholder-color-disabled:rgba(209, 209, 209, 1); --n-icon-size:16px; --n-line-height-textarea:1.6; --n-color-disabled:rgb(250, 250, 252); --n-color-focus:rgba(255, 255, 255, 1); --n-text-color-disabled:rgba(194, 194, 194, 1); --n-box-shadow-focus:0 0 0 2px rgba(24, 160, 88, 0.2); --n-loading-color:#18a058; --n-caret-color-warning:#f0a020; --n-color-focus-warning:rgba(255, 255, 255, 1); --n-box-shadow-focus-warning:0 0 0 2px rgba(240, 160, 32, 0.2); --n-border-warning:1px solid #f0a020; --n-border-focus-warning:1px solid #fcb040; --n-border-hover-warning:1px solid #fcb040; --n-loading-color-warning:#f0a020; --n-caret-color-error:#d03050; --n-color-focus-error:rgba(255, 255, 255, 1); --n-box-shadow-focus-error:0 0 0 2px rgba(208, 48, 80, 0.2); --n-border-error:1px solid #d03050; --n-border-focus-error:1px solid #de576d; --n-border-hover-error:1px solid #de576d; --n-loading-color-error:#d03050; --n-clear-color:rgba(194, 194, 194, 1); --n-clear-size:16px; --n-clear-color-hover:rgba(146, 146, 146, 1); --n-clear-color-pressed:rgba(175, 175, 175, 1); --n-icon-color:rgba(194, 194, 194, 1); --n-icon-color-hover:rgba(146, 146, 146, 1); --n-icon-color-pressed:rgba(175, 175, 175, 1); --n-icon-color-disabled:rgba(209, 209, 209, 1); --n-suffix-text-color:rgb(51, 54, 57);">
                            <div class="n-input-wrapper">
                              <!---->
                              <div class="n-input__input"><input id="msg" type="text" class="n-input__input-el"
                                                                 placeholder="" size="20">
                                <div class="n-input__placeholder"><span></span></div>
                                <!---->
                              </div>
                              <div class="n-input__suffix">
                                <div class="n-base-clear">
                                  <div class="n-base-clear__placeholder">
                                    <!---->
                                  </div>
                                </div>
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                                <!---->
                              </div>
                            </div>
                            <!---->
                            <!---->
                            <div class="n-input__border"></div>
                            <div class="n-input__state-border"></div>
                            <!---->
                          </div>
                        </div>
                        <div class="n-card__footer" role="none">
                          <div role="none" class="n-space" data-v-95e7e64a=""
                               style="display: flex; flex-flow: row wrap; justify-content: flex-end; gap: 8px 12px;">
                            <div role="none" style="max-width: 100%;"><button
                                class="n-button n-button--primary-type n-button--medium-type n-button--ghost"
                                tabindex="0" type="button" @click="signIn()"
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
                                    </span><span class="n-button__content"> 签到 </span>
                              <div aria-hidden="true" class="n-base-wave"></div>
                              <div aria-hidden="true" class="n-button__border"></div>
                              <div aria-hidden="true" class="n-button__state-border"></div>
                            </button></div>
                          </div>
                        </div>
                        <!---->
                      </div>
                    </div>
                    <div data-v-95e7e64a="" style="grid-column: span 8 / span 8;">
                      <div class="n-card n-card--bordered" data-v-95e7e64a=""
                           style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-border-radius:3px; --n-color:#fff; --n-color-modal:#fff; --n-color-popover:#fff; --n-color-embedded:rgb(250, 250, 252); --n-color-embedded-modal:rgb(250, 250, 252); --n-color-embedded-popover:rgb(250, 250, 252); --n-color-target:#18a058; --n-text-color:rgb(51, 54, 57); --n-line-height:1.6; --n-action-color:rgb(250, 250, 252); --n-title-text-color:rgb(31, 34, 37); --n-title-font-weight:500; --n-close-icon-color:rgba(102, 102, 102, 1); --n-close-icon-color-hover:rgba(102, 102, 102, 1); --n-close-icon-color-pressed:rgba(102, 102, 102, 1); --n-close-color-hover:rgba(0, 0, 0, 0.09); --n-close-color-pressed:rgba(0, 0, 0, 0.13); --n-border-color:rgb(239, 239, 245); --n-box-shadow:0 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 5px 12px 4px rgba(0, 0, 0, 0.04); --n-padding-top:19px; --n-padding-bottom:20px; --n-padding-left:24px; --n-font-size:14px; --n-title-font-size:18px; --n-close-size:22px; --n-close-icon-size:18px; --n-close-border-radius:3px;">
                        <!---->
                        <div class="n-card-header">
                          <div class="n-card-header__main" role="heading">最近签到</div>

                          <!---->
                        </div>
                        <div class="n-card__content" role="none" style="overflow: auto;">
                          <table class="n-table n-table--bottom-bordered n-table--bordered n-table--single-line"
                                 data-v-95e7e64a=""
                                 style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-td-color:#fff; --n-td-color-modal:#fff; --n-td-color-popover:#fff; --n-td-text-color:rgb(51, 54, 57); --n-border-color:rgba(239, 239, 245, 1); --n-border-color-modal:rgba(239, 239, 245, 1); --n-border-color-popover:rgba(239, 239, 245, 1); --n-border-radius:3px; --n-font-size:14px; --n-th-color:rgba(250, 250, 252, 1); --n-th-color-modal:rgba(250, 250, 252, 1); --n-th-color-popover:rgba(250, 250, 252, 1); --n-th-font-weight:500; --n-th-text-color:rgb(31, 34, 37); --n-line-height:1.6; --n-td-padding:12px; --n-th-padding:12px; --n-td-color-striped:rgba(250, 250, 252, 1); --n-td-color-striped-modal:rgba(250, 250, 252, 1); --n-td-color-striped-popover:rgba(250, 250, 252, 1); white-space: nowrap;">
                            <thead>
                            <tr>
                              <th>签到人</th>
                              <th>签到内容</th>
                              <th>签到时间</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="i in getSignIn" v-bind:key="i">
                              <td>
                                <!---->
                                <div style="display: flex; align-items: center;"><span>{{i[0]}}</span> &nbsp;
                                  <!---->
                                </div>
                                <!---->
                              </td>
                              <td>
                                <!---->
                                <div>
                                  <div style="display: flex; align-items: center;">{{i[1]}}</div>
                                </div>
                                <!---->
                              </td>
                              <td>
                                <!----><span>{{i[2]}}</span>
                                <!---->
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </div>
                        <div class="n-card__footer" role="none">
                          <div role="none" class="n-space" data-v-95e7e64a=""
                               style="display: flex; flex-flow: row wrap; justify-content: flex-end; gap: 8px 12px;">
                            <div role="none" style="max-width: 100%;"></div>
                          </div>
                        </div>
                        <!---->
                      </div>
                    </div>
                    <div data-v-95e7e64a="" style="grid-column: span 4 / span 4;">
                      <div class="n-card n-card--bordered" data-v-95e7e64a=""
                           style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-border-radius:3px; --n-color:#fff; --n-color-modal:#fff; --n-color-popover:#fff; --n-color-embedded:rgb(250, 250, 252); --n-color-embedded-modal:rgb(250, 250, 252); --n-color-embedded-popover:rgb(250, 250, 252); --n-color-target:#18a058; --n-text-color:rgb(51, 54, 57); --n-line-height:1.6; --n-action-color:rgb(250, 250, 252); --n-title-text-color:rgb(31, 34, 37); --n-title-font-weight:500; --n-close-icon-color:rgba(102, 102, 102, 1); --n-close-icon-color-hover:rgba(102, 102, 102, 1); --n-close-icon-color-pressed:rgba(102, 102, 102, 1); --n-close-color-hover:rgba(0, 0, 0, 0.09); --n-close-color-pressed:rgba(0, 0, 0, 0.13); --n-border-color:rgb(239, 239, 245); --n-box-shadow:0 1px 2px -2px rgba(0, 0, 0, 0.08), 0 3px 6px 0 rgba(0, 0, 0, 0.06), 0 5px 12px 4px rgba(0, 0, 0, 0.04); --n-padding-top:19px; --n-padding-bottom:20px; --n-padding-left:24px; --n-font-size:14px; --n-title-font-size:18px; --n-close-size:22px; --n-close-icon-size:18px; --n-close-border-radius:3px;">
                        <!---->
                        <div class="n-card-header">
                          <div class="n-card-header__main" role="heading"> 账号信息 </div>
                          <!---->
                          <!---->
                        </div>
                        <div class="n-card__content" role="none">
                          <table class="n-table n-table--bottom-bordered n-table--single-line userInfoTable"
                                 data-v-95e7e64a=""
                                 style="--n-bezier:cubic-bezier(0.4, 0, 0.2, 1); --n-td-color:#fff; --n-td-color-modal:#fff; --n-td-color-popover:#fff; --n-td-text-color:rgb(51, 54, 57); --n-border-color:rgba(239, 239, 245, 1); --n-border-color-modal:rgba(239, 239, 245, 1); --n-border-color-popover:rgba(239, 239, 245, 1); --n-border-radius:3px; --n-font-size:14px; --n-th-color:rgba(250, 250, 252, 1); --n-th-color-modal:rgba(250, 250, 252, 1); --n-th-color-popover:rgba(250, 250, 252, 1); --n-th-font-weight:500; --n-th-text-color:rgb(31, 34, 37); --n-line-height:1.6; --n-td-padding:12px; --n-th-padding:12px; --n-td-color-striped:rgba(250, 250, 252, 1); --n-td-color-striped-modal:rgba(250, 250, 252, 1); --n-td-color-striped-popover:rgba(250, 250, 252, 1);">
                            <tbody data-v-95e7e64a="">
                            <tr data-v-95e7e64a="">
                              <td data-v-95e7e64a="">邀请码</td>
                              <td data-v-95e7e64a="">
                                <div data-v-95e7e64a=""><span
                                    style="word-break: break-word; display: none;">c3bcwtb6d76duezrk9b2h2o4j8u9om5c</span><a
                                    style="cursor: pointer;">点击显示</a></div>
                              </td>
                            </tr>
                            <tr data-v-95e7e64a="">
                              <td data-v-95e7e64a="">注册时间</td>
                              <td data-v-95e7e64a="">{{createdTime}}</td>
                            </tr>
                            <tr data-v-95e7e64a="">
                              <td data-v-95e7e64a="">账户等级</td>
                              <td data-v-95e7e64a="">10 level</td>
                            </tr>
                            <!---->
                            </tbody>
                          </table>
                        </div>
                        <div class="n-card__footer" role="none">

                        </div>
                        <!---->
                      </div>
                    </div>
                  </div>
                  <!---->
                </div>
              </div>
            </div>
            <div class="n-scrollbar-rail n-scrollbar-rail--vertical n-scrollbar-rail--disabled"
                 data-scrollbar-rail="true" aria-hidden="true">
              <!---->
            </div>
            <!---->
          </div>
        </div>
      </div>
    </div>
    <!---->
    <!---->
      <div id="dialog" class="dialog" style="text-align: center;display: none;position: absolute;left: 50%;top: 50%;
        transform: translate(-50%,-50%);height: 200px">
        <img @click="dialogNone" style="float: right;width: 30px;height: 30px" src="../static/picture/close.png">
        <h2><img src="" alt="" class="close" />修改密码</h2>
        <div id="loginForm" >
          <div class="info"></div>
          <div class="pass">旧密码：<input type="text" class="text" id="oldPassword"/></div>
          <br>
          <div class="pass">新密码：<input type="text" class="text" id="newPassword"/></div>
          <br>
          <div class="button"><button class="submit" @click="renewPassword()">确认修改</button>
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



export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "person",
  data() {
    return {
      getSignIn: null,
      personName: null,
      personNum:null,
      createdTime:null,
    }
  },
  created() {
    const that = this;
    axios({
      method: 'POST',    //提交方法
      url: '/api/IsLogin',    //后端的servlet登录接口
      data: {
      },
    }).then(res => {
      document.getElementById("TeacherName").innerText = res.data;
      that.personName = res.data;
    })

    axios({
      method: 'POST',    //提交方法
      url: '/api/GetSignIn',    //后端的servlet登录接口
      data: {
      },
    }).then(res => {
      that.getSignIn = res.data;
    })

    setTimeout(()=> {
      axios({
        method: 'POST',    //提交方法
        url: '/api/Info',    //后端的servlet登录接口
        data: {
          name: that.personName
        },
      }).then(res => {
        that.personNum = res.data['Number'];
        that.createdTime = res.data['createTime'];
      })},100);

    setTimeout(()=> {
      },100);

  },
  methods:{
    signIn:function (){
      const that = this;
      axios({
        method: 'POST',    //提交方法
        url: '/api/SignIn',    //后端的servlet登录接口
        data: {
          name: that.personName,
          msg: document.getElementById("msg").value
        },
      }).then(res => {
        alert(res.data);
        location.reload();
      })

    },
    dialogShow: function () {
      document.getElementById("dialog").style.display = "block";
    },
    dialogNone: function () {
      document.getElementById("dialog").style.display = "none";
    },
    renewPassword(){
      axios({
        method: 'POST',    //提交方法
        url: '/api/ResetPwd',    //后端的servlet登录接口
        data: {
          id:this.personNum,
          old_pwd:document.getElementById("oldPassword").value,
          new_pwd:document.getElementById("newPassword").value,
        }
      }).then(res => {
        alert(res.data);
        location.reload();
      })
    }
  }
}

</script>

<style scoped>

</style>