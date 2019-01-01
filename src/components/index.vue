
<style lang="sass">  
  @import '../assets/scss/index.scss';
</style>


<template>
<div class='index'>
  <!-- 公共头部 -->
  <commonHeader></commonHeader>
<div class="swiper_con">
  <div class="swiper1">
      <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="item in swiper">
            <img :src="item">
            <img class='yun yun1' src="../assets/img/indexImg/cloud1.png" alt="">
            <img class='yun yun2' src="../assets/img/indexImg/cloud2.png" alt="">            
          </div>
      </div>
      <div class="swiper-pagination"></div>
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
  </div> 
  <div @click='controlVideo()' class="small_video">
    <div class="big">
      <img src="../assets/img/indexImg/small_video.jpg" alt="">
    </div>
    <img class="small" src="../assets/img/indexImg/small_zanting.png" alt="">
    <div class="shadows"></div>
    <span></span>
    <span></span>
    <span></span>
  </div>
  <div class="mouse" @click='mouse()'>
      <img src="../assets/img/indexImg/mouse.png" alt="">
      <img src="../assets/img/indexImg/mouse_hover.png" alt="">
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

<div class="about">
  <div class="about_con">
    <div class="con_tit_s">
      <div class="con_tit_con">
        关于煮田
      </div>
    </div>
    <div class="item_con">
      <div class="item" v-for='item in about'>
        <div class="img">
          <!-- <img :src="item[0]" alt=""> -->
          <span style="font-size:20px;">Loading</span>
          <x-img :src="item[0]"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>
          <div class="shadows"></div>
        </div>
        <div class="text">
          <div class="one">{{item[1]}}</div>
          <div class="two">
            <pre class='two_con'>{{item[2]}}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="join">
  <div class="join_con">
    <div class="con_tit_s">
      <div class="con_tit_con">加盟优势</div>
    </div>
    <div class="item_con">
      <div class="item" v-for='item in join'>
        <div class="img">
          <img :src="item[0][0]" alt="">
          <img :src="item[0][1]" alt="">
        </div>
        <div class="text">
          <div class="one">{{item[1]}}</div>
          <div class="two">
            <pre class="two_con">{{item[2]}}</pre>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="body_bg">
  <!-- <img :src="body_bg" alt="" > -->
  <span style="font-size:20px;">Loading</span>
  <x-img :src="body_bg"  @on-success="success" @on-error="error" class="ximg-demo" error-class="ximg-error" :offset="-100" container="#vux_view_box_body"></x-img>  
</div>
<div class="food">
  <div class="food_con">
    <div class="con_tit_s">
      <div class="con_tit_con">煮田美食</div>
    </div>
    <div class="introduct">
      <div class="one">
        多种口味麻辣烫/一锅一煮全新体验/打造盈利模式第一品牌                
      </div>
      <div class="two">
        煮田农场麻辣烫--阿香米线旗下品牌。从田野到餐桌，实现麻辣烫的”品质健康“新升级。每一种食材，都足够新鲜，每一种味道，都用心调制。<br>
        搭配酥肉、糍粑等小吃及特质饮品及樱花冰粉，新鲜制作，打造轻食健康麻辣烫。                
      </div>
    </div>
    <div class="tab">
      <div class="tab_tit">
        <div class="item" @click='tab(index)' v-for='(item, index) in tabss["tab_tit"]' :class='{active:index == tabHighlight}'>
          {{item}}
        </div>
      </div>
      <div class="tab_con">
        <div class="item" v-show="index == tabHighlight" v-for='(item, index) in tabss["tab_con"]'>
          <div class="item_con" href="javascript:;" v-for='list in item'>
            <span class="img">
              <img :src="list[0]" alt="">
            </span>
            <span class="text">{{list[1]}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div class="farm">
  <div class="farm_con">
    <div class="con_tit_s">
      <div class="con_tit_con">农场形象</div>
    </div>
    <div class="introduct">
      <div class="text">
        主打新鲜食材和轻松就餐环境，营造在农场里吃麻辣烫的体验。<br>
        活体豆苗搭配新鲜菜品，增加消费者对品牌信任和识别度。空间里绿植，原木色，农场屋形态的演变，以及户<br>
        外太阳伞，自行车和铁艺隔断等元素，一进门农场风遍扑面而来，营造轻松愉悦的场景。
      </div>
      <div class="more">
        <a href="/about">
          <span>了解更多</span>
          <i> &gt; </i>
        </a>
      </div>
    </div>
    <div class="swiper2 swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for='item in swiper2'>
          <img :src="item" alt="">
        </div>
      </div>
      <!-- 分页器 -->
      <!-- <div class="swiper-pagination"></div>-->
      <!-- 切换 -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
      <div class="cloud3">
      <img src="../assets/img/indexImg/cloud3.png" alt="">
      </div>
    </div>
  </div>
</div>
<div class="contact">
        <div class="contact_con">
            <div class="con_tit_s">
                <div class="con_tit_con">
                    联系我们
                </div>
            </div>
            <div class="info">
                <input id="names" type="text" placeholder="姓名" v-model='names'>
                <input id="phone" type="text" placeholder="手机" v-model='phone'>
                <input id="email" type="text" placeholder="邮箱" v-model='email'>
                <input id="want" type="text" placeholder="意向区域" v-model='want'>
            </div>
            <div class="commit">
                <a href="javascript:;" @click='commit()'>
                    <span>提交</span>
                </a>
            </div>
        </div>
    </div>


<commonFooter></commonFooter>  
</div>
</template>
<script src='../assets/js/index.js'></script>









