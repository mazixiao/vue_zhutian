
<style lang="sass">  
  @import '../assets/css/about.scss';
</style>


<template>
<div class='about'>
  <!-- 公共头部 -->
  <commonHeader></commonHeader>

	<div class="banner">
	    <img src="../assets/img/aboutImg/banner.jpg" alt="">
	</div>
	<div class="anchor">
	    <div :class="{item:true, introduct:true, active: anchor_active1}" @click='anchor1()'>{{anchor.tit1}}</div>
	    <div :class="{item:true, shop:true, active: anchor_active2}" @click='anchor2()'>{{anchor.tit2}}</div>
	</div>

	<div class="zhutian_introduct">
		<div class="con_tit_s">
			<div class="con_tit_con">{{zhutian_introduct.title}}</div>
		</div> 
		<div class="text">{{zhutian_introduct.text}}</div>
		<div class="introduct_con">
			<div class="left" @click='controlVideo()'>
				<img class="video_img" :src="zhutian_introduct.video_img" alt="">
				<img class="zanting_img" :src="zhutian_introduct.zanting_img" alt="">
				<div class="shadows"></div>
			</div>
			<div class="right">
				<div class="right_con">
					<div class="item" v-for='(item, index) in zhutian_introduct.video_right'>
						<div class="round">
							<img :src="item[0]" alt="">
							<div class="number">{{item[1]}}</div>
						</div>
						<div class="texts">{{item[2]}}</div>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div v-show='videoShow' class="video_con">
	  <div class="videoss" ref="videoss">
	    <video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions">
	    </video-player>
	    <img @click='controlVideo()' class="video_close" src="../assets/img/indexImg/video_close3.png" alt="">    
	  </div>
	  <div @click="controlVideo()" class="video_shadow"></div>  
	</div>



	<div class="shop_show">
		<div class="shop_show_con">
			<div class="con_tit_s">
				<div class="con_tit_con">{{shop_show.title}}</div>
			</div>
			<div class="text">{{shop_show.text}}</div>
			<div class="swiper_con">
				<div class="swiper1">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for='(item, index) in shop_show.slide'>
							<img :src="item[0]" alt="">
							<div class="texts">
								<div class="round">
									<div class="round_con">{{item[1]}}</div>
								</div>
								<pre class="small_introduct">{{item[2]}}</pre>
							</div>
						</div>
					</div>     
				</div>   
			</div>
		</div>
	</div>

<commonFooter></commonFooter>  
</div>
</template>
<script src='../assets/js/about.js'></script>










