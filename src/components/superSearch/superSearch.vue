<template>
	<div>
		<div id="super">
			<div class="header-title">
				搜索关键字
				<router-link to="/search/nav">超级搜索</router-link>
			</div>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				username:'',
			}
		},
		mounted(){
			console.log(this.$router)
		},
		methods:{
			word:function(event){
			}
		}
		
	};
</script>
<style scoped>
	

</style>