

import commonHeader2 from '../../components/header2'; 
import commonFooter from '../../components/footer'; 

import video_img from '../img/aboutImg/video.jpg';
import zanting_img from '../img/indexImg/open_video.png';
import round_img from '../img/aboutImg/round.png';

// 轮播图1
import Swiper from 'swiper';
import swiper1 from '../img/foodImg/swiper1-1.jpg';
import swiper2 from '../img/foodImg/swiper1-2.jpg';
import swiper3 from '../img/foodImg/swiper1-3.jpg';
import swiper4 from '../img/foodImg/swiper1-4.jpg';

//4个新鲜
import fresh1 from '../img/foodImg/fresh1.jpg';
import fresh2 from '../img/foodImg/fresh2.jpg';
import fresh3 from '../img/foodImg/fresh3.jpg';
import fresh4 from '../img/foodImg/fresh4.jpg';


// 轮播图2
import swiper2_1 from '../img/foodImg/swiper2-2.jpg';
import swiper2_2 from '../img/foodImg/swiper2-3.jpg';


import focus_img from '../img/foodImg/focus.jpg';





import { XImg } from 'vux'
export default {
  name: 'food',
  components: {
    commonHeader2,
    commonFooter,
    XImg
  },  
  data () {
    return {

        // tab默认第一项展开
        tabHighlight: 0,
        tabsss: {
          'tab_tit': ['多种汤底', '特色食材', '美味小食', '清爽饮品'],
          'tab_con': [
            [
              [swiper1, '酸爽泡菜汤底'],
              [swiper2, '微麻微辣汤底'],
              [swiper3, '鲜甜番茄汤底'],
              [swiper4, '香浓原味汤底']
            ],
            [
              [swiper4, '香浓原味汤底'],
              [swiper3, '鲜甜番茄汤底'],
              [swiper2, '微麻微辣汤底'],
              [swiper1, '酸爽泡菜汤底']
            ],
            [
              [swiper1, '酸爽泡菜汤底'],
              [swiper2, '微麻微辣汤底'],
              [swiper3, '鲜甜番茄汤底'],
              [swiper4, '香浓原味汤底']
            ],
            [
              [swiper4, '香浓原味汤底'],
              [swiper3, '鲜甜番茄汤底'],
              [swiper2, '微麻微辣汤底'],
              [swiper1, '酸爽泡菜汤底']
            ]
          ],
        },
        fresh: {
          title: '新鲜材料',
          introduct: `从田野到餐桌，实现麻辣烫的“品质健康”新升级。
          每一种食材，都足够新鲜，每一种味道，都用心调制。
          搭配酥肉、糍粑等小吃及特制饮品及樱花冰粉，新鲜制作，打造轻食健康麻辣烫。`,
          fresh_img: [fresh1, fresh2, fresh3, fresh4]
        },
        craft: {
          title: '优质工艺',
          introduct: `传统麻辣烫行业采取的是一锅炖重复煮，既不卫生菜品还容易串味，
          煮田采用一人一锅煮的方式，现选现煮保证了每一碗出品的原汁原味。`,
          swiper: [swiper2_1, swiper2_2, swiper2_1]
        },
        focus: {
          title: '集采集送',
          img: focus_img,
          text: '自有生产物流配送中心 全国5大加工厂'
        }



    }
  }, 

  mounted(){
    new Swiper ('.swiper1', {

      loop: true, 
      speed: 1500,
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      slidesPerView: 4,
      spaceBetween: 15,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
          414: {
      slidesPerView: 1,
      spaceBetween: 0,
          }                           
      },
      // 自动播放
      autoplay: {
        delay: 4000,
        stopOnLastSlide: false,
        // 当设置为false时，用户操作之后autoplay不会被禁掉
        disableOnInteraction: false,
      }, 
    }),

    // 轮播图2
    new Swiper ('.swiper2', {
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
        stretch: 0, // 图片左右间隙和密集度
        depth: 20, // 图片上下和密集度
        modifier: 10, // 修正值
        slideShadows : false, // 阴影
      },
      // 自动播放
      autoplay: {
        delay: 3000,
        stopOnLastSlide: false,
        // 当设置为false时，用户操作之后autoplay不会被禁掉
        disableOnInteraction: false,
      },
      breakpoints: {
        414: {
          slidesPerView: 1,
          coverflowEffect: {
            rotate: 0, // 旋转角度
            stretch: 0, // 图片左右间隙和密集度
            depth: 0, // 图片上下和密集度
            modifier: 0, // 修正值
            slideShadows : false, // 阴影
          },
        },                         
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
    })
  },
  methods:{  
      tab(index) {
          this.tabHighlight = index;
      },
      success (src, ele) {
        const span = ele.parentNode.querySelector('span')
        ele.parentNode.removeChild(span)
      },
      error (src, ele, msg) {
        const span = ele.parentNode.querySelector('span')
        span.innerText = 'load error'
      }               
  },
}

