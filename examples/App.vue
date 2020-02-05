<template>
	<div>
		<ui-button>00</ui-button>
		<ui-radio-group v-model="v">
			<ui-radio labed="1"></ui-radio>
			<ui-radio labed="2"></ui-radio>
			<ui-radio labed="3"></ui-radio>
		</ui-radio-group>
		<ui-checkbox label="1" v-model="value">./</ui-checkbox>
		<ui-dialog></ui-dialog>
		<ui-input></ui-input>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				value:false,
				v:[1,2,3]
			}
		}
	}
</script>

<style scoped>

</style>