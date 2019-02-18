<template>
	<div>
		<div class="abc">
			<p v-if="seen">现在看到我了</p>
			<!-- 双向绑定v-model -->
			<!-- 文本 -->
			<p> message is:{{message}}</p>
			<input type="text" name="message" v-model="message">
			<!-- 单个复选框 -->
			<input type="checkbox" name="" v-model='checked'><label>{{checked}}</label>
			<!-- 复选框 -->
			<div class="">
				<input type="checkbox" value="jack" v-model='checkname'>
				<label>Jack</label>
				<input type="checkbox" value="John" v-model='checkname'>
				<label>John</label>
				<input type="checkbox" value="mike" v-model='checkname'>
				<label>Mike</label>
				<br>
				<span>checked names:{{checkname}}</span>
			</div>
			<!-- 单选按钮 -->
			<div id="example-4">
			  <input type="radio" id="one" value="One" v-model="picked">
			  <label for="one">One</label>
			  <br>
			  <input type="radio" id="two" value="Two" v-model="picked">
			  <label for="two">Two</label>
			  <br>
			  <span>Picked: {{ picked }}</span>
			</div>
			<!-- 选择框 -->
			<div id="example-5">
			  <select v-model="selected">
			    <option disabled value="">请选择</option>
			    <option>A</option>
			    <option>B</option>
			    <option>C</option>
			  </select>
			  <span>Selected: {{ selected }}</span>
			</div>
			<!-- 动态渲染 -->
			<div>
				<select v-model="selected">
					<option v-for="item in options" v-bind:value="item.value">
						{{item.text}}
					</option>
				</select>
				<span>options:{{selected}}</span>
			</div>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				seen:true,
				message:"",
				checked:true,
				checkname:[],
				picked:'',
				selected:'',
				options:[
					{text:'one',value:"A"},
					{text:'two',value:"B"},
					{text:'three',value:"C"},
				]
			}
		}
	};
</script>
<style scoped>
	
</style>