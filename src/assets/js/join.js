
import commonHeader from '../../components/header'; 
import commonFooter from '../../components/footer'; 

// 4个icon
import introduct_icon1 from '../img/joinImg/introduct_icon1.png';
import introduct_icon2 from '../img/joinImg/introduct_icon2.png';
import introduct_icon3 from '../img/joinImg/introduct_icon3.png';
import introduct_icon4 from '../img/joinImg/introduct_icon4.png';

// 热销产品 门店实况
import hot_sell1 from '../img/joinImg/hot_sell1.jpg';
import hot_sell2 from '../img/joinImg/hot_sell2.jpg';

// 加盟费用 盈利分析
import cost1 from '../img/joinImg/cost1.jpg';
import cost2 from '../img/joinImg/cost2.jpg';

// 加盟流程
import flow_con_bg from '../img/joinImg/flow.png';



import { XImg } from 'vux'
export default {
  name: 'join',
  components: {
    commonHeader,
    commonFooter,
    XImg
  },  
  data () {
    return {
      four_introduct: [
        [introduct_icon1, '热销产品'],
        [introduct_icon2, '加盟费用'],
        [introduct_icon3, '签约流程'],
        [introduct_icon4, '服务支持']
      ],
      hot_sell: {
        title: '热销产品  门店实况',
        con: [
          [hot_sell1, '人气爆棚', '50平单店<br>单日营业额破万'],
          [hot_sell2, '集团优势', '18年匠心经营<br>超500家直营店']
        ]
      },
      cost1: {
        title: '加盟费用 盈利分析',
        con: [
          [cost1, '加盟店所在城市级别省会城市/直辖市地级城市县级城市/乡镇'],
          [cost1, '加盟店规10—20平（外卖店/档口店）35平']
        ]        
      },
      flow: {
        title: '加盟流程',
        flow_con_bg: flow_con_bg,
        con: [
          ['STEP1', '填写加盟申请表'],
          ['STEP2', '加盟洽谈'],
          ['STEP3', '签订意向合作<br>并交纳意向金'],
          ['STEP4', '选址/调研/评估'],
          ['STEP5', '公司审核通过'],
          ['STEP6', '签订合同'],
          ['STEP7', '店铺设计'],
          ['STEP8', '装修施工'],
          ['STEP9', '备货'],
          ['STEP10', '人员培训'],
          ['STEP11', '开业策划'],
          ['STEP12', '试营业'],
          ['STEP13', '开业大吉']
        ]
      },
      brand: {
        title: '强大的品牌支持',
        brand_con: [
          `01）提供一套完整的经营手册<br>
          02）提供店铺、装修设计及工程设施<br>
          03）提供CIS规范<br>
          04）提供店内所需的设备<br>
          05）提供餐厅POS系统所使用的软硬件<br>
          06）提供开业前完整的人员培训<br>
          07）提供各项原材料`,
          
          `08）提供营运所需的各种管理表单<br>
          09）提供店内营运和结算损益的辅导<br>
          10）提供原材料的支援及协助调配<br>
          11）提供营运后的专员辅导<br>
          12）提供新产品及服务项目<br>
          13）提供各类广告和促销的服务
          14）提供相关咨询服务`
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
  },
}

