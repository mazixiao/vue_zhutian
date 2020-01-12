
<style lang="sass">  
  @import '../assets/scss/food.scss';
</style>


<template>
<div class='food'>
  <!-- 公共头部 -->
  <commonHeader></commonHeader>

	<div class="banner">
	    <img src="../assets/img/foodImg/banner.jpg" alt="">
	</div>


	<div class="tab">
		<div class="tab_tit">
			<div class="item" @click='tab(index)' v-for='(item, index) in tabsss["tab_tit"]' :class='{active:index == tabHighlight}'>{{item}}</div>
		</div>
		<div class="tab_con">
			<div class="item" v-for='(item, index) in tabsss["tab_con"]' :class='{active:index == tabHighlight}'>
				<div class="swiper1 swiper-container">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for='(list, indexs) in item'>
							<div class="img">
								<div class="imgs">
									<img :src="list[0]" alt="">
								</div>
							</div>
							<div class="text">{{list[1]}}</div>
						</div>
					</div>
					<!-- 分页器 -->
					<!-- <div class="swiper-pagination"></div>-->
					<!-- 切换 -->
					<div class="swiper-button-next"></div>
					<div class="swiper-button-prev"></div>
				</div>
			</div>					
		</div>
	</div>


	<div class="fresh">
		<div class="con_tit_s">
			<div class="con_tit_con">{{fresh.title}}</div>
		</div> 
		<div class="fresh_con">
			<div class="text">{{fresh.introduct}}</div>
			<div class="item_con">
				<div class="item" v-for='(item, index) in fresh["fresh_img"]'>
					<!-- <img :src="item" alt=""> -->
					<span style="font-size:20px;">Loading</span>
					<x-img :src="item"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
				</div>
			</div>
		</div>  
	</div>
	<div class="craft">
		<div class="con_tit_s">
			<div class="con_tit_con">{{craft.title}}</div>
		</div>
		<div class="craft_con">
			<div class="text">{{craft.introduct}}</div>
			<div class="swiper_con">
				<div class="swiper2">
					<div class="swiper-wrapper">
						<div class="swiper-slide" v-for='(item, index) in craft.swiper'>
							<img :src="item" alt="">
						</div>
					</div>
					<!-- 切换 -->
					<div class="swiper-pagination"></div>      
				</div>
				<!-- 如果需要导航按钮 -->
				<div class="swiper-button-prev"></div>
				<div class="swiper-button-next"></div> 
			</div>
		</div>
	</div>


	<div class="focus">
		<div class="con_tit_s">
			<div class="con_tit_con">{{focus.title}}</div>
		</div>
		<div class="focus_con">
			<img :src="focus.img" alt="">
			<div class="border">
				<div class="text">{{focus.text}}</div>
			</div>
		</div>
	</div>

<commonFooter></commonFooter>  
</div>
</template>
<script src='../assets/js/food.js'></script>










