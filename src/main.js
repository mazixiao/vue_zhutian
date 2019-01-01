// 兼容ie
import 'babel-polyfill'

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 字体图标
import './assets/font/iconfont.css'
// 轮播图
import 'swiper/dist/css/swiper.css'
// 设置网页title
import VueWechatTitle from 'vue-wechat-title'
Vue.use(VueWechatTitle)
Vue.config.productionTip = false
// 视频插件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)



// ajax
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.prototype.$axios = axios;   // 2、在vue中使用axios

// Vue.config.productionTip = false

Vue.use(VueAxios,axios);


new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
}).$mount('#app')


router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

