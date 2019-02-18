<template>
	<div id="vip">
		<div class="header-box">
			<!-- 头像图片 -->
			<div class="header-img">
				<img src="../images/headphone.jpg">
			</div>
			<!-- 会员等级 -->
			<p class="vip-grade">普通会员</p>
			<!-- 会员昵称 -->
			<p class="vip-name">无极限</p>
			<!-- 特权简介 -->
			<div class="vip-privilege">
				<img src="../images/privilege.jpg">
			</div>
			<!-- 邀请好友 -->
			<div class="invite-button">
				<button>
					<router-link to="/abs">邀请1位好友 <span>立即升级></span></router-link>
				</button>
			</div>
		</div>
		<!-- 实时数据 -->
		<div class="data">
			<p class="data-a">实时数据</p>
			<!-- 数据详情 -->
			<div class="data-details flex-box">
				<!-- 今日数据 -->
				<div class="day-data data-all">
					<div class="data-title">今日升级Vip的人数</div>
					<p class="vip-number">34</p>
					<p class="data-content">他们都升级了Vip</p>
				</div>
				<!-- 本月数据 -->
				<div class="month-data data-all">
					<div class="data-title">本月升级Vip的人数</div>
					<p class="vip-number">6849</p>
					<p class="data-content">他们都升级了Vip</p>
				</div>
			</div>
		</div>
		<div class="empty">
		</div>
	</div>
</template>
<script>
	export default{

	};
</script>
<style scoped>
	#vip .header-box{height: 9.58rem; background: #2a2a2a; border:0.5px solid #2a2a2a; }
	#vip .header-img{text-align: center; } 
	#vip .header-img img{display: block; width: 1rem; height: 1rem; border-radius: 50%; margin:0 auto; margin-top: 0.18rem; } 
	#vip .vip-grade{font-size: 0.3rem; color: #d09b3f; text-align: center; margin-top: 0.26rem; }
	#vip .vip-name{font-size: 0.26rem; color: #fff; text-align: center; margin-top: 0.2rem; margin-bottom: 0.36rem; }
	#vip .vip-privilege img{display: block; width: 7.1rem; height: 5.18rem; margin:0 auto; }
	#vip .invite-button{height: 0.8rem; margin:0 auto; margin-top: 0.5rem; }
	#vip .invite-button button{display: block; margin:0 auto; width: 7.1rem; height: 100%; border:none; outline: none; background:#e6c580; color: #fff; border-radius: 0.4rem; font-size: 0.3rem; }
	#vip .data{margin-left: 0.2rem; margin-right: 0.2rem; }
	#vip .data .data-a{font-size: 0.32rem; color: black; margin-top: 0.4rem; margin-bottom: 0.35rem; }
	#vip .data .data-details{justify-content: space-between; } 
	#vip .data .data-details .data-all{width: 3.45rem; height: 2.4rem; background: #f7f7f7; }
	#vip .data .data-details .data-title{height: 0.8rem; line-height: 0.8rem; color: #b77949; background: #e8d4b7; text-align: center; }
	#vip .data .data-details .vip-number{font-size: 0.34rem; color: #d5a137; text-align: center; font-family: 'Helvetica'; margin-top: 0.38rem; margin-bottom: 0.22rem; }
	#vip .data .data-details .data-content{text-align: center; color: #797979; font-size: 0.22rem; }
	#vip .empty{height: 50px; }
</style>