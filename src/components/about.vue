
<style lang="sass">  
  @import '../assets/scss/about.scss';
</style>


<template>
<div class='about'>
	<!-- 公共头部 -->
	<commonHeader></commonHeader>

	<div class="banner">
	    <img src="../assets/img/aboutImg/banner.jpg" alt="">
	</div>
	<h1>该页面其他内容</h1>
	<div class="anchor">
	    <div :class="{item:true, active: index === 0}" @click="switchTitle(0)" >煮田简介</div>
	    <div :class="{item:true, active: index === 1}" @click="switchTitle(1)" >门店形象</div>
	</div>
	<router-view></router-view>

	

	<commonFooter></commonFooter>  
</div>
</template>


<script>

	import commonHeader from './header'; 
	import commonFooter from './footer'; 




	export default {
	  name: 'about',
	  components: {
	    commonHeader,
	    commonFooter,
	  },  
	  data () {
	    return {
	      anchor: {
	        tit1: '煮田简介',
	        tit2: '门店形象',
	      },
	      index: 0,
	    }
	  }, 

	  mounted(){
	    
	  },

	  created() {

	  	console.log(this.$route, 'this.$route');

	  },

    watch: {


	// 	$route: {
	// 		// 监听路由，给对应的tab添加高亮的样式
	// 		handler: function(val, oldVal) {
	// 			// if(val.query.index) {
	// 			// 	this.index = Number(val.query.index);
	// 			// } else {
	// 			// 	this.index = this.index;
	// 			// };

	// console.log(this.$route.path, "this.$route.path");


	// 		},
	// 		// 对象内部的属性监听，也叫深度监听
	// 		deep: true,
	// 		// 第一次加载也执行
	// 		immediate: true
	// 	}

    },


	  methods:{
	     // 切换路由
	      switchTitle(v) {
	        this.index = v
	        switch (v) {
	          case 0:
	            this.$router.push('/about/about-introduct?index=0');
	            break;
	          case 1:
	            this.$router.push('/about/about-shop?index=1');
	            break;
	        }
		  },
		  
    checkPath() {
      if (this.$route.path == "/printing/rawCode/ruleAdd/123") {
        return "/printing/rawCode/rule";
      } else if (this.$route.path == "/printing/rawCode/orderAdd/123") {
        return "/printing/rawCode/orde";
      } else if (this.$route.path == "/product/routerStudy/routerStudy1/router1" || this.$route.path == "/product/routerStudy/routerStudy1/router2") {
        return "/product/routerStudy/routerStudy1";
      }
      return this.$route.path;
    },


	  },
	}	


</script>










