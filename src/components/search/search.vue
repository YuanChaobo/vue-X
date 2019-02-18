<template>
	<div>
		<div id="super">
			<div class="header-title">
				超级搜索
			</div>
			<section class="search-box">
				<p class="earnings">赚40%~90%</p>
				<div class="make-money flex-box">
					<p class="tian-tao">淘宝|天猫</p>
					<p>所有商品都能赚钱</p>
				</div>
				<div class="search-ip flex-box">
					<div class="search-ip-input flex-box">
						<i class="iconfont icon-sousuo"></i>
						<input type="text" name="text" readonly="readonly" placeholder="商品名称/宝贝标题">
					</div>
					<button>搜商品</button>
				</div>
			</section>
			<section class="my-ranking ranking-list">
				<p 	class="ranking-title">我的排行榜</p>
				<div class="bg-box">
					<div class="my-title-ranking flex-box">
						<div class="ranking-img">
							<img src="../images/tou.gif">
						</div>
						<div class="flex-box vip-id">
							<div class="flex-nickname">
								<span>昵称</span>
							</div>
							<div class="flex-box">
								<p class="vip">普通会员</p>
								<p>邀请ID:<span>K822N2</span></p>
							</div>
						</div>
					</div>
					<div class='ranking-details flex-box'>
						<div class="details-box">
							<p class="all-ranking">总收入排行榜</p>
							<p class="details-number"><span>999+</span>名</p>
						</div>
						<div class="details-box">
							<p class="all-ranking">总收入排行榜</p>
							<p class="details-number"><span>999+</span>名</p>
						</div>
						<div class="details-box">
							<p class="all-ranking">总收入排行榜</p>
							<p class="details-number"><span>999+</span>名</p>
						</div>
						<div class="details-box">
							<p class="all-ranking">总收入排行榜</p>
							<p class="details-number"><span>999+</span>名</p>
						</div>
					</div>
				</div>
			</section>
			<section class="my-ranking ranking-list">
				<p 	class="ranking-title">团队排行榜</p>
				<div class="bg-box">
					<div class='ranking-details flex-box'>
						<div class="details-box">
							<p class="all-ranking">总收入排行榜</p>
							<p class="details-number"><span>999+</span>名</p>
						</div>
						<div class="details-box">
							<p class="all-ranking">总收入排行榜</p>
							<p class="details-number"><span>999+</span>名</p>
						</div>
					</div>
				</div>
			</section>
			<div class="transparent-box">
			</div>
		</div>
	</div>
</template>
<script>
	export default{

	};
</script>
<style scoped>
#super .header-title{
	box-sizing: border-box;
	width: 100%;
	height: 0.8rem;
	line-height: 0.8rem;
	font-size: 0.5rem;
	text-align: center;
	font-size: 0;
	background: #fff;
	border:0.5px solid #fff;
}
#super .header-title::before{
	display: flex;
	margin:0 auto;
	content: '';
	margin-top: 0.12rem;
	position: relative;
	text-align: center;
	line-height: 0.8rem;
	width: 2.15rem;
	height: 0.49rem;
	background:url('../images/supersearch.jpg'); 
	background-size: cover;
}
#super .search-box{
	height: 4.95rem;
	text-align: center;
	background: url('../images/3874.jpg') no-repeat left;
	background-size: cover;
	color: #fff;
}
#super .search-box .earnings{
	font-size: 0.39rem;
	text-align: center;
	padding-top: 0.93rem;
}
#super .search-box .make-money{
	font-size: .38rem;
	justify-content: center;
	margin-top: 0.72rem;
	height: 0.6rem;
}
#super .search-box .make-money .tian-tao{
	width: 3.17rem;
	text-align: center;
	font-size: 0.4rem;
}
#super .search-box .search-ip{
	width: 6.2rem;
	height: 0.8rem;
	justify-content: center;
	margin:0 auto;
	border-radius: 0.4rem;
	overflow: hidden;
	margin-top: 0.6rem;
}
#super .search-box .search-ip .search-ip-input{
	background: #fff;
	flex:1;
	align-items: center;
}
#super .search-box .search-ip .search-ip-input i{
	font-size: 0.43rem;
	color: #ec9546;
	width: 0.77rem;
	text-align: center;
}
#super .search-box .search-ip .search-ip-input input{
	flex:1;
	height: 0.8rem;
	color:#000;
	
}
#super .search-box .search-ip .search-ip-input input::-webkit-input-placeholder{
	color: #535353;
}
#super .search-box .search-ip button{
	background: transparent;
	border:none;
	color: #fff;
	background: #f9a739;
	width: 1.48rem;
	line-height: 0.8rem;
	text-align: center;
}

#super .ranking-list{
	padding:0 0.21rem;
}
#super .ranking-title{
	height: 0.83rem;
	line-height: 0.83rem;
	font-size: 0.3rem;
	color: #000;
}
#super .bg-box{
	background: #fff;
	border-radius: 5px;
	overflow: hidden;
	padding-bottom: 0.4rem;
}
#super .bg-box .my-title-ranking{
	justify-content: center;
	margin-top: 0.3rem;
}
#super .bg-box .my-title-ranking .ranking-img{
	width: 1.05rem;
	height: 1.05rem;
}
#super .bg-box .my-title-ranking img{
	display: block;
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
#super .bg-box .my-title-ranking .vip-id{
	font-size: 0.27rem;
	color: #0d0d0d;
	flex-direction: column;
}
#super .bg-box .my-title-ranking .vip-id>div{
	flex:1;
	vertical-align: middle;
	line-height: 200%;
}
#super .bg-box .my-title-ranking .vip-id .flex-nickname{
	margin-left: 0.2rem;
}
#super .bg-box .my-title-ranking .vip-id .flex-nickname span{
	display: inline-block;

}
#super .bg-box .my-title-ranking .vip{
	color: #db9420;
	margin-left: 0.2rem;
	margin-right: 0.12rem;
}
#super .bg-box .ranking-details{
	flex-wrap: wrap;
	justify-content: space-between;
}
#super .bg-box .ranking-details .details-box{
	width: 50%;
	text-align: center;
	/*margin-bottom: 0.3rem;*/
}
#super .bg-box .ranking-details .details-box .all-ranking{
	font-size: 0.25rem;
	color: #000;
	margin-bottom: 0.2rem;
	margin-top: 0.35rem;
}
#super .bg-box .ranking-details .details-number{
	font-size:0.26rem;
	color:#f0a71a; 
}
#super .bg-box .ranking-details .details-number span{
	font-size: 0.31rem;
	font-weight: bold;
}
.transparent-box{
	width: 100%;
	height: 50px;
}


</style>