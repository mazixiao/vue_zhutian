
import commonHeader from '../../components/header'; 
import commonFooter from '../../components/footer'; 


import Swiper from 'swiper';
// 首页轮播图图片
import swiper1 from '../img/indexImg/swiper1.jpg';
import swiper2 from '../img/indexImg/swiper2.jpg';
//视频
import video from '../video/1.mp4';
import posterImg from '../img/indexImg/phone_swiper.jpg';
// 关于煮田
import about1 from '../img/indexImg/about1.jpg'; 
import about2 from '../img/indexImg/about2.jpg'; 
import about3 from '../img/indexImg/about3.jpg'; 
import about4 from '../img/indexImg/about4.jpg'; 
// 加盟优势
import join_icon1 from '../img/indexImg/join_icon1.png'; 
import join_icon1_hover from '../img/indexImg/join_icon1_hover.png'; 
import join_icon2 from '../img/indexImg/join_icon2.png'; 
import join_icon2_hover from '../img/indexImg/join_icon2_hover.png'; 
import join_icon3 from '../img/indexImg/join_icon3.png'; 
import join_icon3_hover from '../img/indexImg/join_icon3_hover.png';
import join_icon4 from '../img/indexImg/join_icon4.png'; 
import join_icon4_hover from '../img/indexImg/join_icon4_hover.png';

import body_bg from '../img/indexImg/body_bg.png';

// 煮田美食tab
import food1 from '../img/indexImg/food1.jpg';
import food2 from '../img/indexImg/food2.jpg';
import food3 from '../img/indexImg/food3.jpg';
import food4 from '../img/indexImg/food4.jpg';

// swiper2
import swiper2_1 from '../img/indexImg/farm-swiper1.jpg';
import swiper2_2 from '../img/indexImg/farm-swiper2.jpg';
import swiper2_3 from '../img/indexImg/farm-swiper3.jpg';

import { XImg } from 'vux'
export default {
  name: 'index',
  components: {
    commonHeader,
    commonFooter,
    XImg 
  },  
  data () {
    return {
      // 视频插件参数
      playerOptions : {
        //播放速度
        playbackRates: [0.7, 1.0, 1.5, 2.0], 
        //如果true,浏览器准备好时开始回放。
        autoplay: true, 
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
      videoShow: true,
      swiper: [swiper1, swiper2],
      about: [
        [about1, '品牌介绍', '多口味汤底、一锅一煮\n四级净水过滤、品质健康'], 
        [about2, '全国加盟', '行业领军、势头迅猛\n全国拓店'],
        [about3, '人气爆棚', '50平单店\n单日营业额破万'],
        [about4, '集团优势', '依托阿香集团优势\n18年匠心经营，超500家直营店']
      ],
      join: [
        [
          [join_icon1, join_icon1_hover],
          '小额投入', 
          '投资少、回报率高\n最佳投资之选'
        ],
        [
          [join_icon2, join_icon2_hover],
          '整店输出', 
          '创业店（10-20m²）\n标准店 （35m²）'
        ],
        [
          [join_icon3, join_icon3_hover],
          '集采集送', 
          '自有生产物流配送中心\n全国5大加工厂'
        ],
        [
          [join_icon4, join_icon4_hover],
          '集采集送', 
          '前期：从零扶持，顺利开业\n中期：培训辅导，解决问题\n后期：持续服务，持续营收'
        ]        
      ],
      body_bg: body_bg,
        // tab默认第一项展开
        tabHighlight: 0,
        tabss: {
          'tab_tit': ['多种汤底', '特色食材', '美味小食', '清爽饮品'],
          'tab_con': [
            [
              [food1, '酸爽泡菜汤底'],
              [food2, '微麻微辣汤底'],
              [food3, '鲜甜番茄汤底'],
              [food4, '香浓原味汤底']
            ],
            [
              [food4, '香浓原味汤底'],
              [food3, '鲜甜番茄汤底'],
              [food2, '微麻微辣汤底'],
              [food1, '酸爽泡菜汤底']
            ],
            [
              [food1, '酸爽泡菜汤底'],
              [food2, '微麻微辣汤底'],
              [food3, '鲜甜番茄汤底'],
              [food4, '香浓原味汤底']
            ],
            [
              [food4, '香浓原味汤底'],
              [food3, '鲜甜番茄汤底'],
              [food2, '微麻微辣汤底'],
              [food1, '酸爽泡菜汤底']
            ]
          ],
        },
        swiper2: [swiper2_1, swiper2_2, swiper2_3],
        names: '',
        phone: '',
        email: '',
        want: '',
    }
  }, 

  mounted(){
    new Swiper ('.swiper1', {
    // effect : 'fade',
    loop: true,
    // grabCursor: true,
    speed: 2000,
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
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
      clickable :true
    },     
    }),
    new Swiper ('.swiper2', {
      loop: true, 
      speed: 1500,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      slidesPerView: 3,
      spaceBetween: 10,
      pagination: {
        // el: '.swiper-pagination',
        // clickable: true,
      },
      breakpoints: {
        414: {
          slidesPerView: 1,
          spaceBetween: 0,
        },                         
      },
      // 自动播放
      autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        // 当设置为false时，用户操作之后autoplay不会被禁掉
        disableOnInteraction: false,
      },         
    }),
    //页面加载就执行(判断视频是否第一次播放)
    this.videoOnce()
  },
  methods:{
      success (src, ele) {
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error (src, ele, msg) {
        const span = ele.parentNode.querySelector('span')
        span.innerText = 'load error'
      },
      //开关视频
      controlVideo(){
          this.videoShow = !this.videoShow;
          this.playerOptions.autoplay = !this.playerOptions.autoplay;
      },  
      // 点击轮播图上的鼠标页面滚动
      mouse() {
        var about = document.querySelector(".about").offsetTop;
        document.body.scrollTop = about;
        document.documentElement.scrollTop = about;
      },
      tab(index) {
          this.tabHighlight = index;
      },
      // 手机号码验证
      isPoneAvailable($poneInput) {
          var myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
          if (!myreg.test($poneInput)) {
              alert("请填写正确的手机号！");
              return false;
          } else {
              return $poneInput;
          }
      },
      // 邮箱认证
      checkEmail(email){
          var re = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/;
          if (!re.test(email)) {
              alert("邮箱有误，请重填");
              return false;
          }
          return email;
      },     
      commit() {
        if (this.names === '') {
            alert('请输入姓名！');
            return false;
        };
        //调用同组件中的方法
        if(!this.isPoneAvailable(this.phone)) {
            return false;
        };
        if(!this.checkEmail(this.email)) {
            return false;
        };
        if(this.want === '') {
          alert('请填写意向区域！');
          return false;
        };
        alert('填写成功!');
      },
      // 判断视频是否第一次播放
      videoOnce() {
        // 获取一个未定义的值为null
        var videoPlay = sessionStorage.getItem('videoIsPlay');
        if(videoPlay == null) {
          this.playerOptions.autoplay = true;
          this.videoShow = true;  
          videoPlay = sessionStorage.setItem("videoIsPlay", '视频已经播放过啦!');       
        } else {
          this.playerOptions.autoplay = false;
          this.videoShow = false;          
        } 
      }
  },
}
