<template>
	<div class="ui-radio-group">
		<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'UiRadioGroup',
		// 封装组件时候常用，平常不推荐
		provide(){
			return{
				RadioGroup:this
			}
		},
		props:{
			//	接受到了 引用者v-model 的value值
			//	需要去出发当前组件的input事件
			//	provide 和 inject
			//	这里的value 传给radio组件使用。通过provide
			value:null
		}
	}
</script>

<style scoped>

</style>