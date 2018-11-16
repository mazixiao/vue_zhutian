
<!-- <style scoped lang="sass">     -->
<style lang="sass">
  @import '../assets/css/common.scss';
</style>
<template>

<div class='header'>
  <header>
    <div class="header_con clearfix">
      <a class='logo fl' href='/'>
        <img src="../assets/img/commonImg/logo.png" alt="">dsdsd
      </a>
    <div class="navs fl">
      <router-link v-for='(item, index) in navs' class="item" :to="{ path: item['path']}"  :key='index'>
        {{item['title']}}
      </router-link>
    </div>

      <a class='language fr' href="javascript:;">
        <i class="iconfont icon-diqiu"></i>
        <span class='languages'>EN</span>
      </a>
    </div>
  </header>

<div class="header2">
    <div class="header_con2">
      <div class="nav2">
        <router-link v-for='(item, index) in navs' class="item" :to="{ path: item['path']}"  :key='index'>
          {{item['title']}}
        </router-link>
      </div>
        <a class="logo2" href="/">
            <img src="../assets/img/commonImg/logo2.png" alt="">
            <p class="text">煮田农场</p>
        </a>
        <div class="language2">
            <i class="icon iconfont icon-diqiu"></i>
            <span>EN</span>
        </div>
    </div>
</div>

  <!-- 右面固定信息 -->
  <div class="right_share">
    <a class="item phone" href="tel:84799023">
        <i class="iconfont icon-dianhua1"></i>
        <span style='color:red'>111111111周五啊</span>
    </a>
    <a class="item qq" target="_blank" href="http://wpa.qq.com/msgrd?v=3&amp;uin=1931104552&amp;site=qq&amp;menu=yes">
        <i class="icon iconfont icon-QQ"></i>
    </a>
    <a class="item weixin" href="javascript:;">
        <i class="icon iconfont icon-erweima"></i>
        <img class="weixin_img" src="../assets/img/commonImg/weixin.jpg" alt="">
    </a>
    <a class="item liuyan" href="javascript:;">
        <i class="icon iconfont icon-liuyan"></i>
    </a>
    <a class="item backTop" @click="toTop(step)" href="javascript:;">
        <i class="icon iconfont icon-iconfonticontrianglecopy"></i>
        <span>TOP</span>
    </a>
  </div>
</div>

</template>
<script>
export default {
  name: 'commonHeader',
  data () {
    return {
      navs: [
        {title: '招商加盟', path: '/join'},
        {title: '关于煮田', path: '/about'},
        {title: '煮田美食', path: '/food'},
        {title: '最新资讯', path: '/news'},
        {title: '门店查询', path: '/search'},
        {title: '联系我们', path: '/contact'}
      ]
    }
  },
  props: {
    // 此数据是控制动画快慢的
    step: {   
      type: Number,
      default: 200  
    }
  },
  mounted () {

  },
  methods:{
    toTop (step) {
      // 参数i表示间隔的幅度大小，以此来控制速度
      document.documentElement.scrollTop-=step;
      if (document.documentElement.scrollTop>0) {
          var animate=setTimeout(()=>this.toTop(step),10);
      }else {
          clearTimeout(animate);
      }
    },   
  }, 
  }

</script>

