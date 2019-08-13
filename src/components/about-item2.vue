
<style> 
	header {
		display: none !important;
	}
	.header2 {
		display: block !important;
	}

	.about-item1-con {
		height: 80vh;
		margin-top: 100px;
	}
</style>


<template>
<div class='about-item2'>
  <!-- 公共头部 -->
  <commonHeader></commonHeader>


<div class="about-item1-con">
	<p style="font-size:20px">关于煮田二</p>

</div>









<commonFooter></commonFooter>  
</div>
</template>

<script>

import commonHeader from './header'; 
import commonFooter from './footer'; 
export default {
  name: 'aboutItem2',
  components: {
    commonHeader,
    commonFooter
  },   
  data () {
    return {
      footer_navs: [
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

  },
  mounted () {

  },
  methods: {

  },
  }

</script>










