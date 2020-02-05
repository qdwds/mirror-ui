//	整个包的入口
//	定义一个 install 方法,接受 Vue 作为参数.如果使用use注册插件,则所有的组件都将被注册.

// 导入所有组件
import Button from './Button/Button.vue'
import Checkbox from './Checkbox/Checkbox.vue'
import CheckboxGroup from './Checkbox/CheckboxGroup.vue'
import Dialog from './Dialog/Dialog.vue'
import Input from './Input/Input.vue'
import Radio from './Radio/Radio.vue'
import RadioGroup from './Radio/RadioGroup.vue'
//	如果有字体图表也需要导入.

const components = [
	Button,
	Checkbox,
	CheckboxGroup,
	Dialog,
	Input,
	Radio,
	RadioGroup
]

const install = function(Vue){
	// 使用use的使用Vue会找到install 方法立即执行
	components.forEach(element =>{
		Vue.component(element.name,element)
	})
}
// 判断是否是直接引入文件,如果是 就不用调用Vue.use()
if(typeof window !== undefined && window.Vue){
	install(window.Vue)
}
export default {
	install
}