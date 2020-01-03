
<style lang="sass">
  @import '../assets/scss/newsDetail.scss';
</style>

<template>
<div class='newsDetail'>
	<commonHeader2></commonHeader2>

	<div class="banner">
		<img src="../assets/img/newsImg/banner.jpg" alt="">
	</div>

	<div class="anchor">
	    <router-link :to="{path:'/news#new_shop'}" :class="{item: true, introduct: true, active: anchor['tit1']=== this.$route.query.active}">{{anchor.tit1}}</router-link>
	    <router-link :to="{path:'/news#new_join'}" :class="{item: true, shop: true, active: anchor.tit2=== this.$route.query.active}">{{anchor.tit2}}</router-link>
	</div>
	<div class="news_detail">
		<div class="detail_tit">
			<div class="texts">
				<div class="one">{{this.$route.query.tit}}</div>
				<div class="two">{{this.$route.query.date}}</div>
			</div>
		</div>
		<div class="text1">
			“不给员工发节日福利的<br>不是亲生老板<br>不给小煮发节日福利的田心<br>都会被取关”<br><br>
			——古希腊先哲 苏格拉·煮田
		</div>
		<img src="../assets/img/newsImg/detail1.jpg" alt="">
		<div class="text2">
			父亲节 属于一个无私奉献的男子<br>有一种父爱叫做 “信任” <br>有一种父爱不需太多语言 <br>有一种父爱只需一个拥抱 <br>“爸爸，我爱你”<br>其实并不矫情。 <br><br>端午节 纪念一个伟大男人的日子
			<br><br>六月粽飘香，默默蕴父爱 <br>翠绿清香的粽叶<br>裹着饱满的亲情<br>咬上一口，齿颊留香！<br><br>
			双节相遇 <br>让这个小长假充满了爱与温情<br><br>这次煮田要搞大事情 &nbsp; <br>三重 大礼领到你手软！
		</div>
		<img src="../assets/img/newsImg/detail2.jpg" alt="">
		<div class="text3">
			第一重福利<br>FATHER'S Day<br>凡父亲节（6月17日）当天带父亲前往煮田农场门店就餐即可享受8折活动
			<br><br>第二重福利<br>“粽”情一夏 <br>6月18-6月19日在煮田农场门店任意消费即可得MINI肉粽1个。<br>
			<br>第三重福利文末留言 #端午节你最爱的度假方式#<br>即可获得煮田农场神秘礼物一个<br><br>
			<span class="strong">活动时间：6月15日-6月18日</span><br>
			<span class="strong">活动中奖方式：田心会通过快递的方式寄出各位小主的礼物</span> 
			<br><br><br><span class="size16">“世界那么大<br>跟随煮田吃遍农场美食吧！”
			</span>
		</div> 
	</div>


	<div class="newsDetail2">
		<div class="item" v-if="ajaxData" v-for="(item, index) in ajaxData" :key='index'>
			<a class='tit_s' target="_blank" :href="item.url">{{index + 1}}.{{item.title}}</a>
			<div class="introduct">{{item.content}}</div>
			<div class="img">
				<a :href='imgs' target="_blank" v-for="(imgs, index1) in item.imageUrls" :key='index1' :style="{'background-image': 'url(' + imgs + ')'}"></a>
			</div>
			<div class="source">
				<div class="time">{{item.publishDateStr}}</div>
				<div class="author">作者：{{item.posterScreenName}}</div>
			</div>
		</div>
	</div>
	<div class="more"><a @click='moreDetail()' href="javascript:;"><span>查看更多</span> <i>&gt;</i></a></div>



<commonFooter></commonFooter>  
</div>
</template>
<script src='../assets/js/newsDetail.js'></script>










