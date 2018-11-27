<style lang="sass">
  @import '../assets/css/common.scss';
</style>
<template>
    <div class='footer'>
        <footer>
            <div class="bg1">
                <img src="../assets/img/commonImg/footer_bg1.png" alt="">
            </div>
            <div class="bg2">
                <img src="../assets/img/commonImg/footer_bg2.png" alt="">
            </div>
            <div class="footer_con">
                <div class="one clearfix">
                    <div class="left fl">
                        <a class="item weixin" href="javascript:;">
                            <i class="icon iconfont icon-weixin"></i>
                            <img class="weixin_img" src="../assets/img/commonImg/weixin.jpg" alt="">
                        </a>
                        <a class="item weibo" target="_blank" href="">
                            <i class="icon iconfont icon-weibo"></i>
                        </a>
                        <a class="item tianmao" target="_blank" href="">
                            <i class="icon iconfont icon-tianmao"></i>
                        </a>
                    </div>
                    <div class="middle fl">
                      <router-link v-for='(item, index) in footer_navs' :to="{ path: item['path']}" exact :key='index'>
                        {{item['title']}}
                      </router-link>
                    </div>
                    <div class="right fr" @click="toTop(step)">
                        <i class="icon iconfont icon-iconfonticontrianglecopy"></i>
                    </div>
                </div>
                <div class="two">
                    <div class="join1">
                        <i class="icon iconfont icon-dianhua1"></i>
                    </div>
                    <div class="join2">全国加盟热线</div>
                    <div class="join3">400-820-1717</div>
                </div>
                <div class="copyright">
                    <span>Copyright ©2018 &nbsp;   上海美哚餐饮有限公司 版权所有 &nbsp;  <a class="wailian" href="http://www.miibeian.gov.cn/" target="_blank">沪ICP备xxxxxxxx号</a></span>
                </div>
            </div>
        </footer>
    </div>
</template>
<script>
export default {
  name: 'commonFooter',
  data () {
    return {
      footer_navs: [
        {title: '招商加盟', path: '/join'},
        {title: '关于煮田', path: '/about'},
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
      default: 50
    }
  },
  mounted () {

  },
  methods: {
    toTop (step) {
      //参数i表示间隔的幅度大小，以此来控制速度
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