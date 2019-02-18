<template>
	<div class="meun">
		<div id="top">
			<div class="top-header">
				<div class="search-goods">
					<div class="sear">
						<i class="iconfonti iconi-sousuo"></i>
						<input type="text" name="text" placeholder="搜索商品">
					</div>
				</div>
				<div class="message">
						<i class="iconfonti iconi-xinxi-copy"></i>
				</div>
			</div>
			<!-- 导航条 -->
			<div class="swiper-container" id="tabmeun">
			    <div class="swiper-wrapper">
			        <div class="swiper-slide" v-for="(item,index) in Swiperc">
			        	<span>{{item.name}}</span>
			        </div>
			        <div class="bar">
			        	<div class="color"></div>
			        </div>
			    </div>
			</div>
		</div>
		<!-- 商品内容 -->
		<div class="swiper-container" id="page">
			<div class="swiper-wrapper">
				<div class="swiper-slide">
					<!-- scroll滚动的swiper模块 -->
					<div class="swiper-container scroll">
						<div class="swiper-wrapper">
							<div class="swiper-slide slidescroll">
								第一个模块
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									fife
								</div>
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									最后一个
								</div>
								<div class="bott"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<!-- scroll滚动的swiper模块 -->
					<div class="swiper-container scroll">
						<div class="swiper-wrapper">
							<div class="swiper-slide slidescroll">
								第一个模块
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									fife
								</div>
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									最后一个
								</div>
								<div class="bott"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<!-- scroll滚动的swiper模块 -->
					<div class="swiper-container scroll">
						<div class="swiper-wrapper">
							<div class="swiper-slide slidescroll">
								第一个模块
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									fife
								</div>
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									最后一个
								</div>
								<div class="bott"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<!-- scroll滚动的swiper模块 -->
					<div class="swiper-container scroll">
						<div class="swiper-wrapper">
							<div class="swiper-slide slidescroll">
								第一个模块
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									fife
								</div>
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									最后一个
								</div>
								<div class="bott"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<!-- scroll滚动的swiper模块 -->
					<div class="swiper-container scroll">
						<div class="swiper-wrapper">
							<div class="swiper-slide slidescroll">
								第一个模块
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									fife
								</div>
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									最后一个
								</div>
								<div class="bott"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<!-- scroll滚动的swiper模块 -->
					<div class="swiper-container scroll">
						<div class="swiper-wrapper">
							<div class="swiper-slide slidescroll">
								第一个模块
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									fife
								</div>
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									最后一个
								</div>
								<div class="bott"></div>
							</div>
						</div>
					</div>
				</div>
				<div class="swiper-slide">
					<!-- scroll滚动的swiper模块 -->
					<div class="swiper-container scroll">
						<div class="swiper-wrapper">
							<div class="swiper-slide slidescroll">
								第一个模块
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									fife
								</div>
								<div class="wh">
									one
								</div>
								<div class="wh">
									two
								</div>
								<div class="wh">
									three
								</div>
								<div class="wh">
									frow
								</div>
								<div class="wh">
									最后一个
								</div>
								<div class="bott"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
  import Swiper from 'swiper'
  export default{
  	name:'Footer',
	data(){
		return{
			Swiperc:[
				{name:'水果'},
				{name:'蔬菜'},
				{name:'例子'},
				{name:'苹果'},
				{name:'窗帘'},
				{name:'床上用品'},
				{name:'用品'},
			]
		}
	},
	methods:{
	},
	mounted:function(){
		var screenHeight=document.documentElement.clientHeight;
		var navSlideWidth,navSum,bar,topBar,clientWidth,navWidth,startPosition;
		var startScroll, touchStarts, touchCurrent
		var mySwiper1 = new Swiper('#tabmeun',{
			freeMode:true,
			slidesPerView:4.5,
			on:{
				init:function(){
					navSlideWidth = this.slides.eq(0).css('width');
					bar = this.$el.find('.bar');
					bar.css('width',navSlideWidth);
					bar.transition(300);
					navSum = this.slides[this.slides.length-1].offsetLeft;
					clientWidth = parseInt(this.$wrapperEl.css('width'));
					navWidth = 0;
					for(var i=0;i<this.slides.length;i++){
						navWidth+=parseInt(this.slides.eq(i).css('width'))
					}
					topBar = this.$el.parents('body').find('#top');
				}
			}
		})
		var myPage = new Swiper('#page',{
			watchSlidesProgress: true,
			resistanceRatio:0,
			iOSEdgeSwipeDetection : true,//ios下开启边缘探测
			on:{
				init:function(){
					this.$el.css('height',screenHeight+'px');
				},
				touchMove:function(even){
					var progress = this.progress;
					var bar = this.$el.find('.bar');
					bar.transition(0);
					bar.transform('translateX('+navSum*progress+'px)')
					for(var i=0;i<this.slides.length;i++){
						var slideProgress = this.slides[i].progress;
						if(Math.abs(slideProgress)<1){
							var r = Math.floor((255-51)*(1-Math.pow(Math.abs(slideProgress),2))+51);
							var g = Math.floor((72 - 51) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51);
  							var b = Math.floor((145 - 51) * (1 - Math.pow(Math.abs(slideProgress), 2)) + 51);
  							mySwiper1.slides.eq(i).find('span').css('color', 'rgba(' + r + ',' + g + ',' + b + ',1)')
						}
					}
				},
				transitionStart:function(){
					var activeIndex = this.activeIndex;
					var activeSlidePosition = mySwiper1.slides[activeIndex].offsetLeft;
					bar.transition(300);
					bar.transform('translateX('+ activeSlidePosition +'px)');
					// 释放是文字变色过渡
					mySwiper1.slides.eq(activeIndex).find('span').transition(300);
					mySwiper1.slides.eq(activeIndex).find('span').css('color','rgba(255.72.145.1)');
					if(activeIndex>0){
						mySwiper1.slides.eq(activeIndex-1).find('span').transition(300);
						mySwiper1.slides.eq(activeIndex-1).find('span').css('color','rgba(51,51,51,1)');
					}
					if(activeIndex< this.slides.length){
						mySwiper1.slides.eq(activeIndex+1).find('span').transition(300);
						mySwiper1.slides.eq(activeIndex+1).find('span').css('color','rgba(51,51,51,1)');
					}
					// 导航居中
					var navActiveSlideLeft = mySwiper1.slides[activeIndex].offsetLeft;
					mySwiper1.setTransition(300);
					if(navActiveSlideLeft<(clientWidth-parseInt(navSlideWidth))/2){
						mySwiper1.setTranslate(0)
					}else if(navActiveSlideLeft >navWidth - (parseInt(navSlideWidth)+ clientWidth) /2){
						mySwiper1.setTranslate(clientWidth - navWidth);
					}else{
						mySwiper1.setTranslate((clientWidth - parseInt(navSlideWidth))/2 - navActiveSlideLeft)
					}
				}
			}
		})
		mySwiper1.$el.on('touchstart',function(e){
			e.preventDefault();
		})
		mySwiper1.on('tap',function(e){
			var clickIndex = this.clickedIndex;
			var clickSlide = this.slides.eq(clickIndex);
			myPage.slideTo(clickIndex,0);
			this.slides.find('span').css('color','rgba(51,51,51,1)');
			clickSlide.find('span').css('color','rgba(255,72,145,1)');
		})
		var scrollSwiper = new Swiper('.scroll',{
			slidesOffsetBefore :83,
			direction: 'vertical',//纵向滑动
			freeMode:true,
			slidesPerView:'auto',
			mousewheel: {
		  		releaseOnEdges: true,
		  	},
		  	on:{
		  		init:function(){
		  			// this.$el.css('height',screenHeight+'px');
		  		},
		  		touchMove:function(e){
		  			if(this.translate> 82-40 && this.translate < 82){
		  				topBar.transform('translateY('+(this.translate - 82)+ 'px)')
		  				console.log(this.translate)
		  			};
		  			touchCurrent = e.targetTouches[0].pageY;
		  			
		  		},
		  		touchStart:function(e){
		  			startPosition = this.translate;
		  			touchStarts = e.targetTouches[0].pageY;
		  			console.log(touchStarts);
		  		},
		  		touchEnd:function(){
		  			topBar.transition(300);
		  			if(this.translate > 42 && this.translate < 82 && this.translate <startPosition){
		  				topBar.transform('translateY(-42px)');
		  				for( var i=0; i<scrollSwiper.length;i++){
		  					if(scrollSwiper[i].translate >42){
		  						scrollSwiper[i].setTransition(300);
		  						scrollSwiper[i].setTranslate(42);
		  					}
		  				}
		  			}
		  			if(this.translate>42 && this.translate<82 && this.translate > startPosition){
		  				topBar.transform('translateY(0px)');
		  				for(var i=0;i<scrollSwiper.length; i++){
		  					if(scrollSwiper[i].translate<82 && scrollSwiper[i].translate>0){
		  						scrollSwiper[i].setTransition(300);
		  						scrollSwiper[i].setTranslate(82);
		  					}
		  				}
		  			}
		  		},
		  		transitionStart:function(){
		  			topBar.transition(300);
		  			if(this.translate<40){
		  				topBar.transform('translateY(-42px)');
		  				if(scrollSwiper){
		  					for(var i=0;i<scrollSwiper.length;i++){
		  						if(scrollSwiper[i].translate >40){
		  							scrollSwiper[i].setTransition(300);
		  							scrollSwiper[i].setTranslate(42);
		  						}
		  					}
		  				}
		  			}else{
		  				topBar.transform('translateY(0px)');
		  				if(scrollSwiper){
		  					for(var i=0;i<scrollSwiper.length;i++){
		  						if(scrollSwiper[i].translate<82 && scrollSwiper[i].translate>0){
		  							scrollSwiper[i].setTransition(300);
		  							scrollSwiper[i].setTranslate(82);
		  						}
		  					}
		  				}
		  			}
		  		},

		  	}
		})
		
	}

  };
</script>
<style scoped>
	@import '../../../node_modules/swiper/dist/css/swiper.css';
	@import '../../assets/font/iconfont.css';
	#main{height: 40px; line-height: 40px;}
	body{background: #fff; font-family: Helvetica Neue,Helvetica,Arial,sans-serif; }
	input::-webkit-input-placeholder{color: #7b7979; }
	input{border:none; outline:none; color: black; }
	.slidescroll {
		height: auto;
	}
	#top{position: absolute; top: 0; z-index: 5; width: 100%; background:#fff; }
	#top .top-header{height: 42px; border:none; background: red; display: flex; align-items: center; }
	#top .top-header .search-goods{height: 30px; flex:1; display: flex; align-self: center; }
	#top .top-header .search-goods .sear{display: flex; flex:1; margin:0 15px; border-radius:15px; background: #fff; overflow: hidden; }
	#top .top-header .search-goods i{font-size: 24px; line-height: 30px; padding: 0 10px; }
	#top .top-header .search-goods input{height: 30px; line-height: 30px; flex:1; }
	#top .top-header .message{
		width: 13%; height: 42px; line-height: 42px; }
	#top .top-header .message i{font-size: 25px; }
	#tabmeun{height: 40px; line-height: 40px; border-bottom: 1px solid #ebebeb;}
	#tabmeun span{display: block; padding:0 5px; }
	#tabmeun .swiper-slide-active{color: red; }
	.bar{width: 60px; height: 3px; position: absolute; bottom: 0px; }
	.bar .color{width: 40px; height: 3px; background: red; margin:0 auto; }
	#page{height:100%;}
	.scroll{
		height: auto;
	}
	.wh{
		height: 100px;
		/*border:1px solid red;*/
	}
	.bott{
		height: 83px;
	}
</style>