<style >      
  @import './assets/scss/base.scss';
</style>

<template>
  <div id="app">
    <!-- <img src="./assets/img/logo.png"> -->
<router-view v-wechat-title='$route.meta.title'></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',

mounted () {
    // 检测浏览器路由改变页面不刷新问题,hash模式的工作原理是hashchange事件
    window.addEventListener('hashchange', () => {
      let currentPath = window.location.hash.slice(1)
      if (this.$route.path !== currentPath) {
        this.$router.push(currentPath)
      }
    }, false)
  },
   
}
</script>


