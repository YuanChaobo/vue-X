<template>
	<div id="circle">
		<div class="entire-title">
			发圈
		</div>
		<div class="circle-title flex-box">
			<div class="sema-title active-style">
				<span>每日爆款</span>
			</div>
			<div class="center-line">
				
			</div>
			<div class="sema-title">
				<span>宣传素材</span>
			</div>
		</div>
		<!-- 内容 -->
		<div class='content-box'>
			<!-- 每日 -->
			<div class="contentall">
				<div class="day-goods">
					<!-- box -->
					<div class="goods-box">
						<!-- 头部分享 -->
						<div class="goods-box-header flex-box">
							<!-- 头像 -->
							<div class="profile">
								<img src="../images/guodong.jpg">
							</div>
							<!-- 发布者promulgator -->
							<div class="promulgator flex-box">
								<h3>果冻宝盒</h3>
								<p>25分钟前</p>
							</div>
							<!-- 分享 -->
							<div class="goods-share flex-box">
								<button>
									<i class="iconfont icon-fenxiang1"></i>
									<span>868</span>
								</button>
							</div>
						</div>
						<!-- 商品内容 -->
						<div class="goods-content">
							<div class="content-referral">
								做个精致的女孩<br/>
								一个28
							</div>
							<!-- 样板图片 -->
							<div class="tempalte-img">
								<img src="../images/chumian.jpg">
							</div>
							<div class="temp-number">
								<p>你能赚￥3.16</p>
							</div>
							<!-- 复制评论 -->
							<div class="copy-comment">
								<div class="comment">
									【复制链接：】复制这天链接显示美容信息【复制链接：】复制这天链接显示美容信息【复制链接：】复制这天链接显示美容信息【复
									我的
								</div>
								<div class="copy">
									<p>
										<i class="iconfont icon-fuzhi"></i>
										<span>复制评论</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 宣传素材 -->
			<div class="contentall">
				<div class="publicity-goods day-goods">
					<div class="publicity-box">
						<div class="goods-box">
						<!-- 头部分享 -->
						<div class="goods-box-header flex-box">
							<!-- 头像 -->
							<div class="profile">
								<img src="../images/guodong.jpg">
							</div>
							<!-- 发布者promulgator -->
							<div class="promulgator flex-box">
								<h3>果冻宝盒</h3>
								<p>25分钟前</p>
							</div>
							<!-- 分享 -->
							<div class="goods-share flex-box">
								<button>
									<i class="iconfonti iconi-fenxiang1"></i>
									<span>868</span>
								</button>
							</div>
						</div>
						<!-- 商品内容 -->
						<div class="goods-content">
							<div class="content-referral">
								做个精致的女孩<br/>
								一个28
							</div>
							<!-- 样板图片 -->
							<div class="tempalte-img">
								<img src="../images/chumian.jpg">
							</div>
							<div class="temp-number">
								<p>你能赚￥3.16</p>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	
</script>
<style scoped>
	
#circle .entire-title{
	color: #fff;
	font-size: 0.32rem;
	background: black;
	height: 0.8rem;
	line-height: 0.8rem;
	text-align: center;	
	letter-spacing: 3px;
}
#circle .circle-title{
	flex-wrap: nowrap;
}
#circle .circle-title .sema-title{
	flex:1;
	height: 0.8rem;
	line-height: 0.8rem;
	font-size: 0.3rem;
	box-sizing: border-box;
	border-bottom: 1px solid #d9d8d8;
	text-align: center;
	color: #222222;
	font-weight: bold;
}
#circle .circle-title .sema-title span{
	display:inline-block;
	height: 0.8rem;
	text-align: center;
	box-sizing: border-box;
}
#circle .circle-title .active-style{
	color: #edc36c !important;
}
#circle .circle-title .active-style span{
	border-bottom: 2px solid #edc36c!important;
}
#circle .center-line{
	height: 0.5rem;
	width: 1px;
	background: #d9d8d8;
	display: inline-block;
	align-self: center;
}

/*内容*/
#circle .content-box{
	width: 100%;
}
#circle .content-box .contentall{
	width: 100%;
	position: relative;
}
#circle .day-goods .goods-box-header{
	flex-wrap: nowrap; 
	margin-right: 0.2rem;
	margin-top: 0.3rem;
}
#circle .day-goods .goods-box-header .profile{
	width: 1.3rem;
}
#circle .day-goods .goods-box-header .profile img{
	display: block;
	width: 0.8rem;
	height: 0.8rem;
	border-radius: 50%;
	margin:0 auto;
}
#circle .day-goods .goods-box-header .promulgator{
	flex-direction: column;	
	flex:1;
	text-align: left;
}
#circle .day-goods .goods-box-header h3{
	font-size: 0.28rem;
	color: #222222;
	flex:1;
}
#circle .day-goods .goods-box-header p{
	color: #767676;
	font-size: 0.24rem;
	flex:1;
}
#circle .day-goods .goods-box-header .goods-share{
	display: inline-block;
	align-self: center;
}
#circle .day-goods .goods-box-header .goods-share button{
	border:none;
	outline: none;
	background: #fdf5e4;
	color: #7c4a1e;
	display: block;
	padding:0.05rem 0.24rem;
	border-radius: 0.2rem;
}
#circle .day-goods .goods-content{
	margin-left: 1.3rem;
	margin-right: 0.2rem;
	margin-top: 0.35rem;
}
#circle .day-goods .goods-content .content-referral{
	font-size: 0.26rem;
	color: #444444;
	line-height: 0.43rem;
}
#circle .day-goods .goods-content .tempalte-img{
	max-width: 3rem;
	max-height: 3rem;
	margin-top: 0.2rem;
	margin-bottom: 0.2rem;
}
#circle .day-goods .goods-content .tempalte-img img{
	display: block;
	max-width: inherit;
	max-height: inherit;
}
#circle .day-goods .goods-content .temp-number{
	height: 0.4rem;
	line-height: 0.4rem;
}
#circle .day-goods .goods-content .temp-number p{
	display: inline-block;
	height: 0.4rem;
	line-height: 0.4rem;
	font-size: 0.24rem;
	color: #b7302b;
	padding:0 0.1rem;
	text-align: center;
	background: #fbeae9;
}
#circle .day-goods .copy-comment{
	background: #f5f6f8;
	border-radius: 5px;
	font-size: 0.24rem;
	color: 	#444444;
	padding:0.05rem 0.2rem;
	margin-top: 0.2rem;
}
#circle .day-goods .copy-comment .copy{
	height: 0.44rem;
}
#circle .day-goods .copy-comment .copy p{
	float: right;
	display: inline-block;
	background: #fdf5e4;
	font-size: 0.24rem;
	color: #7c4a1e;
	height: 0.44rem;
	line-height: 0.44rem;
	padding:0 0.15rem;
	border-radius: 0.25rem;
}

#circle .publicity-goods{
	display: none;
}


</style>