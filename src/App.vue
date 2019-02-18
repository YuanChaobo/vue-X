<template>
  <div id="app">
    <router-view/>
     <ul class="flex-box public-footer">
        <li v-for="(item,index) in tabContent" :class="findex==index? 'activeTab': ''" @click='changeIndex(index)'>
          <router-link :to=item.to>
            <i class="iconfonti" :class=item.cla></i>
              <span>{{item.name}}</span>
          </router-link>
        </li>
     </ul>
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      findex:0,
      tabContent:[
        {name:'首页',to:'/',cla:'iconi-shouye'},
        {name:'搜索赚',to:'/search', cla:'iconi-search-1-copy'},
        {name:"会员升级", to:'/supers', cla:'iconi-tubiaolunkuo-'},
        {name:"发圈", to:'/circle', cla:'iconi-fenxiang'},
        {name:"我的" , to:'/my', cla:'iconi-wode'}
      ]
    }
  },
  methods:{
    changeIndex(index){
      this.findex = index;
    }
  }
};
</script>

<style>
  @import './assets/font/iconfont.css';
  html,body{
    height: 100%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  a{
    color: #fff;
  }
  .public-footer{
    width: 100%;
    position:fixed;
    bottom:0;
    left: 0;
    font-size:0.24rem;
    height: 0.8rem;
    background: #333;
    z-index: 3;
    color: #fff;
  }
  .public-footer li{
    flex:1;
    display: flex;
    flex-direction: column; 
    height: 0.8rem;
    text-align:center;
  }
  .activeTab a{
    color: red;
  }
  .public-footer a{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-content: center;

  }
  .public-footer i{
    flex:1;
    font-size: 18px;
    align-self: center;
    padding:0.03rem 0;
  }
  .public-footer span{
    align-self: center;
    flex:1;
    font-size: 14px;
  }
</style>
