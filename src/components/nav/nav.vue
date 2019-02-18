<template>
	<div class="nav">
		<router-view></router-view>
		<ul>
			<li>
				<span>首页</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				msg:[
					{title:'首页',to:'/'},
					{title:'搜索',to:'/search'},
					{title:'会员升级',to:'/supers'},
					{title:'发圈',to:'/circle'},
					{title:'我的',to:'/my'}
				]
			}
		}
	}
</script>