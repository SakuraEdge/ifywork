<template>
  <body>

  </body>

</template>

<script>
import '@/css/style.css'
import '@/css/swiper-bundle.min.css'
import '@/css/list.css'
import '@/css/person.css'
import '@/css/dialog.css'
import axios from 'axios'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "tag",
  data() {
    return {
      name: null,
    };
  },
  created() {
    const that = this;

    axios({
      method: 'POST',    //提交方法
      url: '/api/IsLogin',    //后端的servlet登录接口
      data: {},
    }).then(res => {
      document.getElementById("TeacherName").innerText = res.data;
      that.name = res.data;
    })
  }
}
</script>

<style scoped>

</style>