<template>
	<label class="ui-checkbox" :class="{'is-checkd':isCheckd}">
		<span class="ui-checkbox__input">
			<span class="ui-checkbox__inner"></span>
			<input type="checkbox" class="ui-checkbox__original" :name="name" v-model="model" :value="label">
		</span>
		<span class="ui-checkbox__label">
			<slot></slot>
			<!-- 如果没有插入 的时候使用label。插入的话就是用插入的语句 -->
			<template v-if="!$slots.default">{{label}}</template>
		</span>
	</label>
</template>

<script>
	export default {
		
		inject:{
			CheckboxGroup:{
				default:''
			}
		},
		name: 'UiCheckbox',
		computed:{
			model:{
				get(){
					return this.isGroup?this.CheckboxGroup.value : this.value;
				},
				set(value){
					this.isGroup?this.CheckboxGroup.$emit('input',value):this.$emit('input',value)
				}
			},
			isGroup(){
				return !!this.CheckboxGroup;
			},
				
			isCheckd(){
				//	如果对是group包裹，判断label是否在model中，
				//	如果没有不是group包裹，直接使用model
				 return this.isGroup?this.model.includes(this.label):this.model;
			}
		},
		props: {
			value: {
				type: Boolean,
				default: false
			},
			label: {
				type: String,
				default: ''
			},
			name: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ui-checkbox {
		color: #606266;
		font-weight: 500;
		line-height: 1;
		position: relative;
		cursor: pointer;
		display: inline-block;
		outline: none;
		font-size: 14px;
		margin-right: 30px;

		.ui-checkbox__input {
			white-space: normal;
			cursor: pointer;
			outline: none;
			display: inline-block;
			line-height: 1;
			position: relative;
			vertical-align: middle;

			.ui-checkbox__inner {
				border: 1px solid #dcdfe6;
				height: 14px;
				width: 14px;
				background-color: #F5F7FA;
				border-color: #E4E7ED;
				position: relative;
				cursor: pointer;
				box-sizing: border-box;
				display: inline-block;

				&:after {
					width: 4px;
					height: 4px;
					background: #fff;
					content: '';
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					transition: transform .15s ease-in;
				}
			}

			.ui-checkbox__original {
				opacity: 0;
				outlie: none;
				position: absolute;
				z-index: -1;
				top: 0;
				left: 0;
				button: 0;
				right: 0;
				margin: 0;
			}
		}

		.ui-checkbox__label {
			font-size: 14px;
			padding-left: 10px;
		}
	}

	.ui-checkbox.is-checkd {
		.ui-checkbox__input {
			.ui-checkbox__inner {
				border-color: #409eff;
				background: #409eff;

				&:after {
					transform: rotate(45deg) scaleY(1)
				}
			}
		}

		.ui-checkbox__label {
			color: #409eff;
		}
	}
</style>
