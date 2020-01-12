
<style lang="sass">  
  @import '../assets/scss/join.scss';
</style>


<template>
<div class='join'>
  <!-- 公共头部 -->
  <!-- <commonHeader></commonHeader> -->
  <commonHeader></commonHeader>

	<div class="banner">
	    <img src="../assets/img/joinImg/banner.jpg" alt="">
	</div>

	<div class="four_introduct">
		<div class="introduct_con">
			<div class="item" v-for='item in four_introduct'>
				<div class="img">
					<!-- <img :src="item[0]" alt=""> -->
				  <span style="font-size:20px;">Loading</span>
				  <x-img :src="item[0]"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
				</div>
				<div class="text">	
					{{item[1]}}
				</div>
			</div>
		</div>
	</div>

	<div class="hot_sell">
		<div class="con_tit_s2">
			<div class="con_tit_con">
				{{hot_sell['title']}}
			</div>
		</div>
		<div class="hot_sell_con">
			<div class="item" v-for='(item, index) in hot_sell.con'>
				<div class="bg1">
					<!-- <img :src="item[0]" alt=""> -->
				  <span style="font-size:20px;">Loading</span>
				  <x-img :src="item[0]"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>					
				</div>
				<div class="border">  
					<div class="text">
						<div class="one">{{item[1]}}</div>
						<div class="two" v-html='item[2]'></div>
					</div>
				</div>
			</div>   
		</div>
	</div>

	<div class="cost1">
		<div class="con_tit_s2">
		<div class="con_tit_con">{{cost1.title}}</div>
		</div>
		<div class="cost1_con">
			<div class="item" v-for='(item, index) in cost1.con'>
				<div class="img">
					<!-- <img :src="item[0]" alt=""> -->
				  <span style="font-size:20px;">Loading</span>
				  <x-img :src="item[0]"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>	
				</div>
				<div class="text">{{item[1]}}</div>
			</div>
		</div>
	</div>

	<div class="cost2">
		<div class="con_tit_s2">
			<div class="con_tit_con">加盟费用</div>
		</div>
		<div class="cost2_con">
			<table>
				<tbody>
					<tr>
						<td class="one" rowspan="3">加盟费用</td>
						<td class="two">项目</td>
						<td>店铺面积</td>
						<td>加盟费</td>
						<td>履约保证金</td>
						<td>设计费</td>
						<td>设备设施</td>
						<td>店铺营运管理费</td>
						<td>合计</td>
						<td>装修工程费用</td>
						<td class="three" rowspan="3">欢迎加盟</td>
					</tr>
					<tr>
						<!-- <td></td> -->
						<td class="two">煮田<br>农场</td>
						<td>10—20平（外卖店/档口店）35平</td>
						<td>1.98万 <br>
						3.98万</td>
						<td>1万</td>
						<td>0.5万</td>
						<td>1.5万 <br>
						3.5万</td>
						<td>0.6万/年</td>
						<td>5.58万 <br>
						9.58万</td>
						<td>预估每平米 <br>
						800~1500元</td>
						<!-- <td></td> -->
					</tr>  
					<tr>
						<!-- <td></td> -->
						<td class="two">内容</td>
						<td></td>
						<td>品牌使用费</td>
						<td>作为品牌授权经营，合同签订后甲方与乙方之间发生债务的担保</td>
						<td>全套设计图纸、效果图、工程图</td>
						<td>主厨房设备、收银及监控</td>
						<td>对加盟店提供品牌推广支持、营运督导管理等日常营运管理支持所发生的费用，新品上市指导</td>
						<td>以上数据为预算金额（不包含房租及人工）仅供参考，最终金额以实际核算为准</td>
						<td>包含室内天花、地面、墙面的硬装、水电工程、照明工程等（具体金额以实际明细为准）。装修施工图出来后有详细报价，可自行找施工队也可用公司合作装修</td>
						<!-- <td></td> -->
					</tr>          
				</tbody>
			</table>
		</div>
	</div>

	<div class="flow">
		<div class="con_tit_s2">
			<div class="con_tit_con">{{flow.title}}</div>
		</div>
		<div class="flow_con">
			<img class="bg" :src="flow.flow_con_bg" alt="">
			<ul>
				<li class="item" v-for='(item, index) in flow.con'>
					<div class="item_con" v-if='index % 2 == 0'>
						<div class="one">{{item[0]}}</div>
						<div class="two" v-html='item[1]'></div>
					</div>
					<div class="item_con" v-else>
						<div class="two" v-html='item[1]'></div>
						<div class="one">{{item[0]}}</div>
					</div>				
				</li>
			</ul>
		</div>
	</div>


	<div class="brand">
		<div class="con_tit_s2">
			<div class="con_tit_con">{{brand.title}}</div>
		</div>
		<div class="brand_con">
			<div class="item" v-for='(item, index) in brand.brand_con' v-html='item'></div>
		</div>
	</div>

<commonFooter></commonFooter>  
</div>
</template>
<script src='../assets/js/join.js'></script>










