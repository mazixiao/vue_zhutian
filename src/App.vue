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
  name: 'App' 
}
</script>


