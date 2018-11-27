

import commonHeader from '../../components/header'; 
import commonFooter from '../../components/footer'; 


import search1 from '../img/searchImg/item1.jpg';
import search2 from '../img/searchImg/item2.jpg';
import search3 from '../img/searchImg/item3.jpg';
import search4 from '../img/searchImg/item4.jpg';
import search5 from '../img/searchImg/item5.jpg';
import search6 from '../img/searchImg/item6.jpg';



import { XImg } from 'vux'
export default {
  name: 'search',
  components: {
    commonHeader,
    commonFooter,
    XImg
  },  
  data () {
    return {
      placeholder: '搜索门店名称或地址',
      search: [
        {
          img: search1,
          introduct: '河南省郑州新郑市',
          text: '品牌性质：煮田农场 区域：广东省深圳市龙岗区<br/>店面：煮田深圳龙岗万科里餐厅 加盟主/店长：刘震 加盟电话：20180105'
        },
        {
          img: search2,
          introduct: '广东省深圳市龙岗区',
          text: '品牌性质：煮田农场区域：河南省郑州新郑市<br/>店面：煮田新郑华盛奥特莱斯餐厅 加盟主/店长：宋菲菲 <br/>加盟电话：20180108'
        },
        {
          img: search3,
          introduct: '广东省深圳市龙岗区',
          text: '品牌性质：煮田农场区域：河南省郑州新郑市<br/>店面：煮田新郑华盛奥特莱斯餐厅 加盟主/店长：宋菲菲 <br/>加盟电话：20180108'
        },
        {
          img: search4,
          introduct: '河南省郑州新郑市',
          text: '品牌性质：煮田农场区域：河南省郑州新郑市<br/>店面：煮田新郑华盛奥特莱斯餐厅 加盟主/店长：宋菲菲 <br/>加盟电话：20180108'
        },  
        {
          img: search5,
          introduct: '广东省深圳市龙岗区',
          text: '品牌性质：煮田农场区域：河南省郑州新郑市<br/>店面：煮田新郑华盛奥特莱斯餐厅 加盟主/店长：宋菲菲 <br/>加盟电话：20180108'
        },
        {
          img: search6,
          introduct: '河南省郑州新郑市',
          text: '品牌性质：煮田农场区域：河南省郑州新郑市<br/>店面：煮田新郑华盛奥特莱斯餐厅 加盟主/店长：宋菲菲 <br/>加盟电话：20180108'
        },                              
      ]
    }
  }, 

  mounted(){

    // console.log((0/2)%3);
    // console.log((1/2)%3);
    // console.log((2/2)%3);
    // console.log((3/2)%3);
    // console.log((4/2)%3);
    // console.log((5/2)%3);
    // console.log((6/2)%3);
    // console.log((7/2)%3);


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
    // 3个不同的类,取余    
    class0(index) {
      var search_item0 = Math.floor((index/2)%3) == 0;
      return search_item0;
    },
    class1(index) {
      var search_item1 = Math.floor((index/2)%3) == 1;
      return search_item1;
    },
    class2(index) {
      var search_item2 = Math.floor((index/2)%3) == 2;
      return search_item2;
    },        
  },
}

