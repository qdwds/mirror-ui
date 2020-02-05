<template>
	<transition name="dialog-fade">
		<div class="ui-dialog__wrapper" v-show="visible" @click.self="handleClick">
			<div class="ui-dialog" :style="{width,top}">
				<div class="ui-dialog__header">
					<!-- title区域 slot嵌套 如果有值就是用传过来的，没有使用默认 -->
					<slot name="title">
						<span class="ui-dialog__title">{{title}}</span>
					</slot>
					<button class="ui-dialog__headerbtn" @click="handleClick">
						<i class="ui-icon-close">1</i>
					</button>
				</div>
				<!-- 内容区域 -->
				<div class="ui-dialog__body">
					<slot></slot>
				</div>
				<!-- 按钮区域 -->
				<div class="ui-dialog__footer" v-if="$slots.footer">
					<slot name="footer"></slot>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	export default {
		name: 'UiDialog',
		props: {
			title: {
				type: String,
				default: '提示'
			},
			width: {
				type: String,
				default: '50%'
			},
			top: {
				type: String,
				default: '150px'
			},
			visible:{
				type:Boolean,
				default:false
			}

		},
		methods:{
			handleClick(){
				this.$emit('update:visible',false)
				console.log(1)
			}
		}
	}
</script>

<style scoped>
	.ui-dialog__wrapper {
		position: fixed;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: auto;
		margin: 0;
		background: rgba(0, 0, 0, .5);
	}

	.ui-dialog {
		position: relative;
		margin: 0 auto 50px;
		background: #FFF;
		border-radius: 2px;
		-webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
		box-shadow: 0 1px 3px rgba(0, 0, 0, .3);
		-webkit-box-sizing: border-box;
		box-sizing: border-box;
		width: 50%
	}

	.ui-dialog__header {
		padding: 20px 20px 10px
	}

	.ui-dialog__headerbtn {
		position: absolute;
		top: 20px;
		right: 20px;
		padding: 0;
		background: 0 0;
		border: none;
		outline: 0;
		cursor: pointer;
		font-size: 16px
	}

	.ui-dialog__body {
		padding: 30px 20px;
		color: #606266;
		font-size: 14px;
		word-break: break-all
	}

	.ui-dialog__footer {
		padding: 10px 20px 20px;
		text-align: right;
		-webkit-box-sizing: border-box;
		box-sizing: border-box
	}

	.ui-dialog__title {
		line-height: 24px;
		font-size: 18px;
		color: #303133
	}
	.dialog-fade-enter-active{
		-webkit-animation: ;
		-o-animation: ;
		animation: fade .3s;
		
	}
	.dialog-fade-leave-active{
		-webkit-animation: ;
		-o-animation: ;
		animation: fade .3s reverse;
	}
	@keyframes fade{
		from{
			opacity: 0;
			transform: translateY(-20px);
		}
		to{
			opacity: 1;
			transform: translateY(0);
		}
	}
</style>
