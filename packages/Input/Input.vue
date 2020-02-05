<template>
	<div :class="['ui-input',{' ui-input--suffix':showSuffix}]">
		<!-- type 
		show传的还就是用传入值，如果没传就用默认值 
		passwordVisible 真 text  假 password -->
		<input 
		:type="showPassword?(passwordViside?'text':'password'):type" 
		class="ui-input__inner" :placeholder="placeholder" :name="name" :disabled="disabled" :class="{'is-disabled':disabled}"
		 :value="value" @input="handleInput">
		<span class="ui-input__suffix" v-if="showSuffix">
			<i calss="" v-if="clearable && value" @click="clear">x</i>
			<i :class="{'ui-input-active':passwordViside}" v-if="showPassword" @click="handlePassword">x</i>
		</span>
	</div>
</template>

<script>
	export default {
		name: 'UiInput',
		data(){
			return{
				// 密码显示隐藏
					passwordViside:false
			}
		},
		props: {
			placeholder: {
				type: String,
				default: ''
			},
			type: {
				type: String,
				default: 'text'
			},
			name: {
				type: String,
				default: ''
			},

			disabled: {
				type: Boolean,
				default: false
			},
			value: {
				type: String,
				default: ''
			},
			clearable: {
				type: Boolean,
				default: false
			},
			showPassword: {
				type: Boolean,
				default: false
			}
		},
		methods: {
			handleInput(e) {
				this.$emit('input', e.target.value)
			},
			clear(){
				this.$emit('input','')
			},
			handlePassword(){
				this.passwordViside = !this.passwordViside
			}
		},
		computed: {
			showSuffix() {
				return this.showPassword || this.clearable
			}
		}
	}
</script>

<style lang="scss" scoped="">
	.ui-input {
		position: relative;
		display: inline-block;
		width: 100%;
		vertical-align: bottom;
		font-size: 14px;

		&__inner {
			display: block;
			resize: vertical;
			padding: 5px 15px;
			line-height: 1.5;
			-webkit-box-sizing: border-box;
			box-sizing: border-box;
			width: 100%;
			font-size: inherit;
			color: #606266;
			background-color: #FFF;
			background-image: none;
			border: 1px solid #DCDFE6;
			border-radius: 4px;
			-webkit-transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
			transition: border-color .2s cubic-bezier(.645, .045, .355, 1);

			&:focus {
				outline: 0;
				border-color: #409EFF;
			}

			&.is-disabled {
				background-color: #F5F7FA;
				border-color: #E4E7ED;
				color: #C0C4CC;
				cursor: not-allowed
			}

		}
	}

	.ui-input--suffix {
		.ui-input__inner {
			padding-right: 30px;
		}

		.ui-input__suffix {
			position: absolute;
			height: 100%;
			right: 10px;
			top: 0;
			line-height: 40px;
			text-align: center;
			color: #c0c4cc;
			transition: add .3s;
			z-index: 900;

			i {
				color: #c0c4cc;
				cursor: pointer;
				transition: color .2s cubic-bezier(.645, .045, .355, 1);
			}
			.ui-input-active{
				color:red;
			}
		}
	}
</style>
