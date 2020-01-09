
<!-- <style scoped lang="sass">     -->
<style lang="sass">
  @import '../assets/scss/common.scss';
</style>
<template>

<div class='header'>
  <header>
    <div class="header_con clearfix">
      <a class='logo fl' href='/'>
        <img src="../assets/img/commonImg/logo.png" alt="">dsdsd
      </a>
    <div class="navs fl">
      <div class="item-parent" v-for='(item, index) in navs'>
        <router-link @click="selectedMenu(index)"  class="item" :to="{ path: item['stair']['path']}"  :key='index'>
        {{item['stair']['title']}}
        </router-link>
        <div class="second-parent" v-if="item.second">
          <router-link class="second-item" v-for='(second, index2) in item.second' :to="{ path: second['path']}" :key='index2'>
          {{second['title']}}
          </router-link> 
        </div>
      </div>
    </div>

      <a class='language fr' href="javascript:;">
        <i class="iconfont icon-diqiu"></i>
        <span class='languages'>EN</span>
      </a>
    </div>
  </header>



  <!-- 右面固定信息 -->
  <div class="right_share">
    <a class="item phone" href="tel:84799023">
        <i class="iconfont icon-dianhua1"></i>
        <span>84799023!</span>
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
      is_selected: 0,
      navs: [
        // {title: '招商加盟2', path: '/join'},
        // {title: '关于煮田', path: '/about'},
        // {title: '煮田美食', path: '/food'},
        // {title: '最新资讯', path: '/news'},
        // {title: '门店查询', path: '/search'},
        // {title: '联系我们', path: '/contact'}
        
        {
          stair: {title: '招商加盟', path: '/join'},
        },

        {
          stair: {title: '关于煮田', path: '/about'},
          second: [
            {title: '煮田简介', path: '/about/about-introduct?index=0'},
            {title: '门店形象', path: '/about/about-shop?index=1'},
          ]
        },

        {
          stair: {title: '煮田美食', path: '/food'},
        },

        {
          stair: {title: '最新资讯', path: '/news'},
        },

        {
          stair: {title: '门店查询', path: '/search'},
        },

        {
          stair: {title: '联系我们', path: '/contact'},
        },

      ]
    }
  },

// stair
// second
  props: {
    // 此数据是控制动画快慢的
    step: {   
      type: Number,
      default: 200  
    }
  },
  mounted () {
    console.log(this.$router.options.routes);
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
      // 点击一级菜单切换样式
      selectedMenu(index) {
        this.is_selected = index
      }

  }

</script>

