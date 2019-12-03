
<style lang="sass">  
  @import '../assets/scss/contact.scss';
</style>





<template>
<div class='contacts'>

	<!-- 公共头部 -->
	<commonHeader2></commonHeader2>
	<div class="banner">
		<img src="../assets/img/contactImg/banner.jpg" alt="">
	</div>
	<div class="anchor">
		<div @click='tab(index)' v-for='(item, index) in anchor' :class="{item:true, aa:index == '0', bb:index == '1', active:index == tabHighlight}">{{item}}</div>
	</div>


	<div class="tab_con">
        <div class="join item" v-if='tabHighlight == 0' style="">
            <div class="con_tit_s">
                <div class="con_tit_con">{{tab_tit}}</div>
            </div>
			<div class="join_con">
				<div :class="{item_con:true, item_con0:index%3 == '0', item_con1:index%3 == '1', item_con2:index%3 == '2'}" v-for='(item, index) in join_con'>
					<div class="con_tit">
						<div class="one">{{item.tit1}}</div>
						<div class="two">{{item.tit2}}</div>
					</div>
					<div class="list_con">
						<div class="list">
							<div class="texts" v-html='item.one.text1'></div>
							<div class="round">
								<span class="sicircle"></span>
								<div class="text">{{item.one.text2}}</div>
							</div>
						</div>
						<div class="list">
							<div class="texts" v-html='item.two.text1'></div>
							<div class="round">
								<span class="sicircle"></span>
								<div class="text">{{item.two.text2}}</div>
							</div>
						</div>
						<div class="list">
							<div class="texts">
								<div class="small_list">
									<div class="post">
										{{item.three.text1[0]}}                                             
										<div class="number">1</div>
									</div>
									<img class="img" src="../assets/img/contactImg/post-arrow.png" alt="">
									<div class="post">
										{{item.three.text1[1]}}                                               
										<div class="number">2</div>
									</div>
									<img class="img" src="../assets/img/contactImg/post-arrow.png" alt="">
									<div class="post">
										{{item.three.text1[2]}}                                                 
										<div class="number">3</div>
									</div>
									<img class="img" src="../assets/img/contactImg/post-arrow.png" alt="">
									<div class="post">
										{{item.three.text1[3]}}                                             
										<div class="number">4</div>
									</div>
								</div>
							</div>
							<div class="round">
								<span class="sicircle"></span>
								<div class="text">{{item.three.text2}}</div>
							</div>
						</div>
					</div>
				</div>
			</div> 
        </div>
		<!-- <div class="contact item" style="display: none;"> -->
		<div class="contacts item" v-if='tabHighlight == 1'>
			<p style="line-height: 1.5em; text-align: center;">
			<br>
			</p>
			<table data-sort="sortDisabled" align="center" style="display:inline-block">
				<tbody>
					<tr class="firstRow">
						<td valign="middle" style="word-break: break-all; border-color: rgb(221, 221, 221);" align="left" class="selectTdClass">
							<p style="white-space: normal; text-align: left;">
								<span style="font-family: 黑体, SimHei; font-size: 18px;">
								阿香集团品牌品质加盟电话：84799023&nbsp; &nbsp; &nbsp;&nbsp;
								</span>
							</p>
						</td>
						<td valign="middle" rowspan="4" colspan="1" style="word-break: break-all; border-color: rgb(221, 221, 221);" align="center" class="selectTdClass">
							<p style="text-align: left;">
								<img src="../assets/img/commonImg/weixin.jpg" alt="">
							</p>   
							<p style="text-align: left;">
								<span style="font-family: 黑体, SimHei; font-size: 12px;">
								煮田农场微信公众号
								</span>
								<br>
							</p>
						</td>
					</tr>
					<tr>
					<td valign="middle" style="word-break: break-all; border-color: rgb(221, 221, 221); text-align: left;" align="left" class="selectTdClass">
						<span style="font-family: 黑体, SimHei; font-size: 18px;">加盟微信：17721111717</span>
					</td>
					</tr>
					<tr>
						<td valign="middle" align="left" colspan="1" rowspan="1" style="word-break: break-all; border-color: rgb(221, 221, 221); text-align: left;" class="selectTdClass">
							<span style="font-family: 黑体, SimHei; font-size: 18px;">煮田农场微博：@煮田农场</span>
						</td>
					</tr>
					<tr>
					<td valign="middle" align="left" colspan="1" rowspan="1" style="word-break: break-all; border-color: rgb(221, 221, 221); text-align: left;" class="selectTdClass">
						<span style="font-family: 黑体, SimHei; font-size: 18px;">
							公司全称：
						</span>
						<span style="font-family: 黑体, SimHei; font-size: 18px;">
							上海美哚餐饮管理有限公司
						</span>
					</td>
					</tr>
				</tbody>
			</table>
			<p>
			<br>
			</p>        
		</div>
    </div>

<commonFooter></commonFooter>  
</div>
</template>
<script src='../assets/js/contact.js'></script>










