
<style lang="sass">  
  @import '../assets/scss/news.scss';
</style>


<template>
<div class='news'>
  <!-- 公共头部 -->
  <commonHeader2></commonHeader2>

<div class="banner">
    <img src="../assets/img/newsImg/banner.jpg" alt="">
</div>

<div class="anchor">
    <div :class="{item:true, introduct:true, active:anchor_active1}" @click='anchor1()'>{{anchor.tit1}}</div>
    <div :class="{item:true, shop:true, active:anchor_active2}" @click='anchor2()'>{{anchor.tit2}}</div>
</div>


<div class="new_shop" id='new_shop'>
	<div class="con_tit_s">
		<div class="con_tit_con">{{news.title}}</div>
	</div> 
	<div class="shop_con">


		<router-link class="item" :to="{path:'/news/newsDetail',query:{ tit:item['brand'], date:item['date'], active: anchor.tit1}}" v-for='(item, index) in news.con' :key='index'>
			<div class="img">
				<span style="font-size:20px;">Loading</span>
				<x-img :src="item['img']"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>

			</div>
			<div class="text">
				<div class="one">{{item['brand']}}</div>
				<div class="two">{{item['date']}}</div>
			</div>   
		</router-link>

	</div>
	<div class="more">
		<a href="javascript:;">
			<span>查看更多</span>
			<i>&gt;</i>
		</a>
	</div>
</div>

<div class="new_join" id='new_join'>
	<div class="con_tit_s">
		<div class="con_tit_con">{{join.title}}</div>
	</div>
	<div class="new_join_con clearfix">
		<div class="left fl">
			<img :src="join.left_img" alt="">
		</div>
		<div class="right fr">
			<router-link class="item clearfix" :to="{path:'/news/newsDetail',query:{ tit:item['text2'], date:item['text1'], active: anchor.tit2}}" v-for='(item, index) in join.con' :key='index'>
				<div class="one fl">{{item['text1']}}</div>
				<div class="two fl">{{item['text2']}}</div>
				<div class="three fr">
					<span>更多</span>
					<i> &gt; </i>
				</div>
			</router-link>
		</div>
	</div> 
	<div class="more">
		<a href="javascript:ajax(2);">
			<span>查看更多</span>
			<i> &gt; </i>
		</a>
	</div>        
</div>


<!-- <router-view></router-view> -->

<commonFooter></commonFooter> 

</div>
</template>
<script src='../assets/js/news.js'></script>










