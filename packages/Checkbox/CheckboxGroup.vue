<template>
	<div class="ui-checkbox-group">
	<slot></slot>
	</div>
</template>

<script>
	export default {
		name:'UiCheckboxGroup',
		provide(){
			return{
				CheckboxGroup:this
			}
		},
		props:{
			value:{
				type:Array,
			}
		}
	}
</script>

<style scoped>

</style>