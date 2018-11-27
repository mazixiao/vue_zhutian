import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import join from '@/components/join'
import about from '@/components/about'
import food from '@/components/food'
import news from '@/components/news'
import newsDetail from '@/components/newsDetail'
import search from '@/components/search'
import contact from '@/components/contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '首页'
      }      
    },
    {
      path: '/join',
      name: 'join',
      component: join,
      meta: {
        title: '招商加盟'
      }      
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        title: '关于煮田'
      }      
    },
    {
      path: '/food',
      name: 'food',
      component: food,
      meta: {
        title: '煮田美食'
      }      
    },        
    {
      path: '/news',
      name: 'news',
      component: news,
      meta: {
        title: '最新资讯'
      }
    }, 
    {
      path: '/news/newsDetail',
      name: 'newsDetail',
      component: newsDetail,
      meta: {
        title: '最新资讯详情'
      }      
    }, 
    {
      path: '/search',
      name: 'search',
      component: search,
      meta: {
        title: '门店查询'
      }      
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
      meta: {
        title: '联系我们'
      }      
    }             
  ],
  //默认是hash模式
  mode:'history',
  //因为导航高亮的类默认是active
  linkActiveClass:'active',  
  scrollBehavior (to, from, savedPosition) {
    //先判断目标路由有没有hash值
    if(to.hash){ 
      return {selector:to.hash}
    };    
    // 然后再判断页面初始化默认滚动到最顶部 
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    };   
  }  
})

