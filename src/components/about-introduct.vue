
<style lang="sass">  
  @import '../assets/scss/about.scss';
</style>

<template>
<div class='about-item1'>
  <!-- 公共头部 -->
  <commonHeader2></commonHeader2>


  <div class="zhutian_introduct">
    <div class="con_tit_s">
      <div class="con_tit_con">{{zhutian_introduct.title}}</div>
    </div> 
    <div class="text">{{zhutian_introduct.text}}</div>
    <div class="introduct_con">
      <div class="left" @click='controlVideo()'>
        <img class="video_img" :src="zhutian_introduct.video_img" alt="">
        <img class="zanting_img" :src="zhutian_introduct.zanting_img" alt="">
        <div class="shadows"></div>
      </div>
      <div class="right">
        <div class="right_con">
          <div class="item" v-for='(item, index) in zhutian_introduct.video_right'>
            <div class="round">
              <img :src="item[0]" alt="">
              <div class="number">{{item[1]}}</div>
            </div>
            <div class="texts">{{item[2]}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-show='videoShow' class="video_con">
    <div class="videoss" ref="videoss">
      <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions">
      </video-player>
      <img @click='controlVideo()' class="video_close" src="../assets/img/indexImg/video_close3.png" alt="">    
    </div>
    <div @click="controlVideo()" class="video_shadow"></div>  
  </div>









<commonFooter></commonFooter>  
</div>
</template>

<script>


import commonHeader2 from './header2'; 
import commonFooter from './footer'; 

import video_img from '../assets/img/aboutImg/video.jpg';
import zanting_img from '../assets/img/indexImg/open_video.png';
import round_img from '../assets/img/aboutImg/round.png';

//视频
import video from '../assets/video/1.mp4';
import posterImg from '../assets/img/indexImg/phone_swiper.jpg';
import Swiper from 'swiper';
import swiper1 from '../assets/img/aboutImg/swiper1.jpg';
import swiper2 from '../assets/img/aboutImg/swiper2.jpg';
import swiper3 from '../assets/img/aboutImg/swiper3.jpg';


export default {
  name: 'about',
  components: {
    commonHeader2,
    commonFooter,
  },  
  data () {
    return {
      anchor: {
        tit1: '煮田简介',
        tit2: '门店形象',
      },
      shows: true,
      // tab标题高亮
      anchor_active1: true,
      anchor_active2: false,      
      zhutian_introduct: {
        title: '煮田简介',
        text: 
        `       煮田农场系全国知名连锁企业阿香集团的餐饮品牌。
        依托阿香集团总部近18年连锁运营经验，
        煮田农场致力于麻辣烫餐饮服务的开发、经营和管理，
        为打造麻辣烫连锁知名品牌而不懈努力。 
        传统麻辣烫行业采取的是一锅炖重复煮，
        既不卫生菜品还容易串味，
        煮田采用一人一锅煮的方式，
        现选现煮保证了每一碗出品的原汁原味。
        煮田农场以多口味，特色汤底为主。
        从田野到餐桌，实现麻辣烫的“品质健康”新升级。
        坚持从清洗到烫煮使用4级净化水循环系统，
        打造健康、新鲜、美味，与众不同的麻辣烫。`,
        video_img: video_img,
        zanting_img: zanting_img,
        video_right: [
              [round_img, '18', '18年连锁运营经验'],
              [round_img, '1', '一人一锅煮方式']
        ]
      },
      shop_show: {
        title: '门店形象',
        text: 
        `主打新鲜食材和轻松就餐环境，营造在农场里吃麻辣烫的体验。
        活体豆苗搭配新鲜菜品，增加消费者对品牌信任和识别度。
        空间里绿植，原木色，农场屋形态的演变，以及户外太阳伞，
        自行车和铁艺隔断等元素，一进门农场风遍扑面而来，营造轻松愉悦的场景。`,
        slide: [
          [
            swiper1, 
            '广东省深圳市龙岗区',
            `品牌性质：煮田农场  区域：广东省深圳市龙岗区<br/>
            店面：煮田深圳龙岗万科里餐厅 加盟主/店长：刘震 加盟电话：20180105`
          ],
          [
            swiper2, 
            '广东省深圳市龙岗区22',
            `品牌性质：煮田农场  区域：广东省深圳市龙岗区<br/>
            店面：煮田深圳龙岗万科里餐厅 加盟主/店长：刘震 加盟电话：20180105`
          ],  
          [
            swiper3, 
            '广东省深圳市龙岗区33',
            `品牌性质：煮田农场  区域：广东省深圳市龙岗区<br/>
            店面：煮田深圳龙岗万科里餐厅 加盟主/店长：刘震 加盟电话：20180105`
          ]                  
        ]

      },
      // 视频插件参数
      playerOptions : {
        //播放速度
        playbackRates: [0.7, 1.0, 1.5, 2.0], 
        //如果true,浏览器准备好时开始回放。
        autoplay: false, 
        // 默认情况下将会消除任何音频。
        muted: false, 
        // 导致视频一结束就重新开始。
        loop: false, 
        // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        preload: 'auto', 
        language: 'zh-CN',
        // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        aspectRatio: '16:9', 
        // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        fluid: true, 
        sources: [{
          type: "",
          //url地址
          src: video 
        }],
        //你的封面地址
        poster: posterImg, 
        // width: document.documentElement.clientWidth,
        //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        notSupportedMessage: '此视频暂无法播放，请稍后再试', 
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          //全屏按钮
          fullscreenToggle: true  
        }
      },
      //视频默认打开
      videoShow: false,
    }
  }, 

  mounted(){
    new Swiper ('.swiper1', {
      loop: true,
      // grabCursor: true,
      speed: 1500,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0, // 旋转角度
        stretch: 35, // 图片左右间隙和密集度
        depth: 15, // 图片上下和密集度
        modifier: 10, // 修正值
        slideShadows : false, // 阴影
      },
      // 启动动态检查器(OB/观众/观看者)，当改变swiper的样式（例如隐藏/显示）
      // 或者修改swiper的子元素时，自动初始化swiper。       
      observer: true,
      // 将observe应用于Swiper的父元素。当Swiper的父元素变化时，例如window.resize，Swiper更新。
      observeParents: true,
      // 自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        // 当设置为false时，用户操作之后autoplay不会被禁掉
        disableOnInteraction: false,
      },
      // 分页器
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        bulletElement : 'a',
        // 小圆点默认的样式
        bulletClass : 'my-bullet',
        // 当前元素
        bulletActiveClass: 'my-bullet-active',
        clickable :true,
      },  
    });

  },
  methods:{
    //开关视频
    controlVideo(){
        this.videoShow = !this.videoShow;
        this.playerOptions.autoplay = !this.playerOptions.autoplay;
    },  
         
  },
}

</script>










