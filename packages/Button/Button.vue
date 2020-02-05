<template>
	<button :class="['ui-button'
		,`ui-button--${type}`,
		{'is-plain':plain,
		'is-round':round,
		'is-circle':circle,
		'is-disabled':disabled}]"
		@click="handleClick"
		:disabled="disabled">
			<span>
				<slot></slot>
			</span>
	</button>
</template>

<script>
	export default {
		name: 'UiButton',
		props: {
			type: {
				type: String,
				default: 'default',
			},
			plain: {
				type: Boolean,
				default: false
			},
			round:{
				type:Boolean,
				default:false
			},
			circle:{
				type:Boolean,
				default:false
			},
			disabled:{
				type:Boolean,
				default:false
			}
		},
		created() {
			console.log(this.type);
			console.log(this.$slots) 
		},
		methods:{
			handleClick(){
				this.$emit('click')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.ui-button {
		display: inline-block;
		line-height: 1;
		white-space: nowrap;
		cursor: pointer;
		background: #FFF;
		border: 1px solid #DCDFE6;
		color: #606266;
		-webkit-appearance: none;
		text-align: center;
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		outline: 0;
		margin: 0;
		-webkit-transition: .1s;
		transition: .1s;
		font-weight: 500;
		-moz-user-select: none;
		-webkit-user-select: none;
		-ms-user-select: none;
		padding: 12px 20px;
		font-size: 14px;
		border-radius: 4px;

		&:hover,
		&:focus {
			color: #409EFF;
			border-color: #c6e2ff;
			background-color: #ecf5ff;
		}

		&:active {
			color: #3a8ee6;
			border-color: #3a8ee6;
			outline: 0;
		}
	}

	// 默认样式
	.ui-button--success {
		color: #FFF;
		background-color: #67C23A;
		border-color: #67C23A;

		&:hover,
		&:focus {
			background: #85ce61;
			border-color: #85ce61;
			color: #FFF;
		}

		&:active {
			background: #5daf34;
			border-color: #5daf34;
			color: #FFF;
		}
	}

	// play样式
	.ui-button--success.is-plain {
		color: #67C23A;
		background: #f0f9eb;
		border-color: #c2e7b0;

		&:hover,
		&:focus {
			background: #67C23A;
			border-color: #67C23A;
			color: #FFF;
		}

		&:active {
			background: #5daf34;
			border-color: #5daf34;
			color: #FFF;
			outline: 0;
		}
	}
	// 椭圆
	.ui-button.is-round{
		border-radius: 20px;
		padding: 12px 23px;
	}
	//圆
	.ui-button.is-circle{
			border-radius: 50%;
			padding: 12px;
		}
	// is-disabled
.ui-button.is-disabled,
.ui-button.is-disabled:focus,
.ui-button.is-disabled:hover {
  color: #C0C4CC;
  cursor: not-allowed;
  background-image: none;
  background-color: #FFF;
  border-color: #EBEEF5
}
</style>
