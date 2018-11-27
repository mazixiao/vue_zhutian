

import commonHeader from '../../components/header'; 
import commonFooter from '../../components/footer'; 


//新闻图片
import news1 from '../img/newsImg/item1.jpg';
import news2 from '../img/newsImg/item2.jpg';
import news3 from '../img/newsImg/item3.jpg';
import news4 from '../img/newsImg/item4.jpg';
import news5 from '../img/newsImg/item5.jpg';
import news6 from '../img/newsImg/item6.jpg';
import news7 from '../img/newsImg/item7.jpg';
import news8 from '../img/newsImg/item8.jpg';


// 加入
import left_img from '../img/newsImg/left_img.jpg';


import { XImg } from 'vux'
export default {
  name: 'news',
  components: {
    commonHeader,
    commonFooter,
    XImg
  },  
  data () {
    return {
      anchor: {
        tit1: '新店新闻',
        tit2: '加盟展资讯',
      }, 
      // tab标题高亮
      anchor_active1: true,
      anchor_active2: false,           
      news: {
        title: '新店资讯',
        con: [
          {img: news1, brand: '为何选择加盟阿香旗下品牌11', date: '2018-01-01'},
          {img: news2, brand: '为何选择加盟阿香旗下品牌22', date: '2018-02-02'},
          {img: news3, brand: '为何选择加盟阿香旗下品牌33', date: '2018-03-03'},
          {img: news4, brand: '为何选择加盟阿香旗下品牌44', date: '2018-04-04'},
          {img: news5, brand: '为何选择加盟阿香旗下品牌55', date: '2018-05-05'},
          {img: news6, brand: '为何选择加盟阿香旗下品牌66', date: '2018-06-06'},
          {img: news7, brand: '为何选择加盟阿香旗下品牌77', date: '2018-07-07'},
          {img: news8, brand: '为何选择加盟阿香旗下品牌88', date: '2018-08-08'},
        ]
      },
      join: {
        title: '加盟展资讯',
        left_img: left_img,
        con: [
          {text1: '2018-08-10', text2: '世界杯|伪球迷必备知识点 内含福利大礼包11'},
          {text1: '2018-08-11', text2: '当端午节遇上父亲节|以爱之名，尽情放粽！22'},
          {text1: '2018-08-12', text2: '开卷考！2018全国高考试题（吃货卷）33'},
          {text1: '2018-08-13', text2: '当网红奶茶遇上煮田农场，去品尝后的粉丝们都惊了！44'},
          {text1: '2018-08-14', text2: '世界杯|伪球迷必备知识点 内含福利大礼包55'},
          {text1: '2018-08-15', text2: '当端午节遇上父亲节|以爱之名，尽情放粽！66'},
          {text1: '2018-08-13', text2: '开卷考！2018全国高考试题（吃货卷）77'},
          {text1: '2018-08-19', text2: '世界杯|伪球迷必备知识点 内含福利大礼包88'},
          {text1: '2018-08-20', text2: '当端午节遇上父亲节|以爱之名，尽情放粽！99'},
          {text1: '2018-08-24', text2: '开卷考！2018全国高考试题（吃货卷）00'},
        ]
      }



    }
  }, 

  mounted(){
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
    // 点击tab跳至对应位置
    anchor1() {
      var new_shop = document.querySelector(".new_shop").offsetTop;
      new_shop = new_shop - document.querySelector(".header2").offsetHeight;
      document.body.scrollTop = new_shop;
      document.documentElement.scrollTop = new_shop;
      this.anchor_active2 = false; 
      this.anchor_active1 = true; 
    }, 
    anchor2() {
      var new_join = document.querySelector(".new_join").offsetTop;
      new_join = new_join - document.querySelector(".header2").offsetHeight;
      document.body.scrollTop = new_join;
      document.documentElement.scrollTop = new_join;
      this.anchor_active1 = false; 
      this.anchor_active2 = true; 
    },     
  },
}

