import { createApp } from 'vue'
import App from './App.vue'
import Vue from 'vue'
import router from 'vue-router'

createApp(App).mount('#app')

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')