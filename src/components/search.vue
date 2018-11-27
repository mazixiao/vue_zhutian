
<style lang="sass">  
  @import '../assets/css/search.scss';
</style>


<template>
<div class='search'>
	<!-- 公共头部 -->
	<commonHeader></commonHeader>
	<div class="banner">
	    <img src="../assets/img/searchImg/banner.jpg" alt="">
	</div>
	<div class="search_con">
		<div class="search_box clearfix">
			<div class="box_con fr">
				<input id="tag" type="text" :placeholder="placeholder" value="">
				<div class="icons" style="cursor:pointer;">
					<i class="icon iconfont icon-sousuo"></i>
				</div>
			</div>
		</div>
		<div class="item_con">
			<!-- search_item<?php echo floor($k/2)%3; -->
			<!-- 3个不同的类,取余 -->
			<div :class="{search_item:true, search_item0: class0(index), search_item1: class1(index), search_item2: class2(index)}" v-for='(item, index) in search'>
				<div class="item">
					<div class="img">
						<!-- <img :src="item.img"> -->
						<span style="font-size:20px;">Loading</span>
						<x-img :src="item['img']"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>

					</div>
					<div class="texts">
						<div class="round">
							<div class="round_con">{{item.introduct}}</div>
						</div>
						<div class="small_introduct" v-html='item.text'></div>
					</div>
				</div>
			</div>
		</div>
		<div class="more">
			<a href="javascript:;">
				<span>查看更多</span>
				<i> &gt; </i>
			</a>
		</div>
	</div>

	
<commonFooter></commonFooter>  
</div>
</template>
<script src='../assets/js/search.js'></script>










