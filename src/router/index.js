import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/index/index'
import search from '@/components/search/search'
import supers from '@/components/Vip/vip'
import my from '@/components/my/my'
import circle from '@/components/circle/circle'
import abs from '@/components/abs/abs'
import nav from '@/components/nav/nav'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:'__dirname',
  routes: [
  	{
  		path:'/',
  		name:'HelloWorld',
  		component:HelloWorld
  	},
    {
      path:'/search',
      name:'Search',
      component:search,
    },
    {
      path:'/abs',
      name:'abs',
      component:abs,
    },
    {
      path:'/supers',
      name:"supersearch",
      component:supers
    },
    {
      path:'/circle',
      name:'circle',
      component:circle
    },
    {
      path:'/my',
      name:'My',
      component:my
    }
  ]
})


