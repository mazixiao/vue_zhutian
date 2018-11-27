

import commonHeader from '../../components/header'; 
import commonFooter from '../../components/footer'; 




import { XImg } from 'vux'
export default {
  name: 'newsDetail',
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
      // ajax容器
      ajaxData: [],
      // 页码
      pageToken: 1
    }
  }, 
  //在模板渲染之前调用(ajax越早越好)
  created() {
    this.sendAjax()
  },  
  //在模板渲染之前调用(例如需要dom操作)
  mounted() {

  },
  methods:{
    sendAjax() {
      // 页码(初始第一页)
      var pageToken = this.pageToken;
      // 这里就是刚才的config/index.js中的/api
      var urlItem  = '/api/news/qihoo?kw=%E7%99%BD&pageToken=' + pageToken + '&site=qq.com&apikey=WyPef4FMI79FqgPyB6zbdhhDxNyLTnn2MX4d1cJUHRi3G0UpefWIfwb5fqfDBQfw'; 
      this.$axios.get(urlItem)
      .then((response) => { //使用箭头函数防止this为undefined
        this.ajaxData = this.ajaxData.concat(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    },
    // 点击按钮发送ajax
    moreDetail() {
      this.pageToken += 1;
      this.sendAjax();
      console.log(this.pageToken);
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





        // (这种方法也可以实现)
        // var aa = response.data.data;
        // for(var i = 0; i < aa.length; i++) {
        //   console.log(aa[i]);
        //   this.ajaxData.push(aa[i]);
        // }