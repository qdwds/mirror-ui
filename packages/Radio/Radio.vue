<template>
	<!-- 
			如果当前的label === value才改变样式 
			label 是当前按钮的默认值
			value 是改变后的值
	-->
	<label class="ui-radio" :class="{'is-checkd':label === model}">
		<span class="ui-radio__input">
			<span class="ui-radio__inner"></span>
			<input type="radio" class="ui-radio__original" :value="label" :name="name" v-model="model">
		</span>
		<span class="ui-radio__label">
			<slot></slot>
			<!-- 如果没有传，则显示label -->{{value}}
			<template v-if="!$slots.default">{{label}}</template>
		</span>
	</label>
</template>

<script>
	export default {
		name: 'UiRadio',
		// inject 接受 privide值；
		inject:{
			RadioGroup:{
				default:''
			}
		},
		mounted() {
			console.log(this.RadioGroup)
		},
		// 提供一个计算属性 
		computed:{
			model:{
				get(){
					return this.isGroup?this.RadioGroup.value : this.value
				},
				set(value){
					// 触发组件给多拿钱组件注册的input时间
					 this.isGroup? this.RadioGroup.$emit('input',value):this.$emit('input',value);
				}
			},
			isGroup(){
				//	改成Boolean 
				//	如果使用RadiuGroup包裹就是true，否则是false
				return !!this.RadioGroup;
			}
		},
		props: {
			label: {
				type: [String, Number, Boolean],
				default: ''

			},
			value: null,
			name: {
				type: String,
				default: ''
			}
		}
	}
</script>

<style lang="scss">
	.ui-radio {
		color: #606266;
		font-weight: 500;
		line-height: 1;
		position: relative;
		cursor: pointer;
		display: inline-block;
		outline: none;
		font-size: 14px;
		margin-right: 30px;

		.ui-radio__input {
			white-space: normal;

			cursor: pointer;
			outline: none;
			display: inline-block;
			line-height: 1;
			position: relative;
			vertical-align: middle;

			.ui-radio__inner {
				border: 1px solid #dcdfe6;
				border-radius: 100%;
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
					border-radius: 100%;
					background: #fff;
					content: '';
					position: absolute;
					left: 50%;
					top: 50%;
					transform: translate(-50%, -50%);
					transition: transform .15s ease-in;
				}
			}

			.ui-radio__original {
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

		.ui-radio__label {
			font-size: 14px;
			padding-left: 10px;
		}
	}

	.ui-radio.is-checkd {

		.ui-radio__input {
			.ui-radio__inner {
				border-color: #409eff;
				background: #409eff;

				&:after {
					transform: translate(-50%, -50%) scale(1);
				}
			}
		}

		.ui-radio__label {
			color: #409eff;
		}
	}
</style>
