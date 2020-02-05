// 重新配置启动文件
const path =require('path')
module.exports = {
	pages:{
		index:{
			// 入口文件
			entry:'examples/main.js',
			// 模板地址
			template:'public/index.html',
			// 文件名称
			filename:'index.html'
		}
	},
	// 扩展webppack 配置,使packages加入编译
	chainWebpack:config => {
		// 高版本转低版本语法的配置
		config.module
		.rule('js')
		.include.add(path.resolve(__dirname,'packages')).end()
		.use('babel')
		.loader('babel-loader')
		.tap(options => {
			// 可以修改选项
			return options
	})
},
}