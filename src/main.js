import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//解决移动端300ms延迟
import FastClick from "fastclick"

//图片懒加载插件
import VueLazyLoad from "vue-lazyload"
//第二个可以根据loading设置图片在加载的时候默认的图片
Vue.use(VueLazyLoad,{
  loading:require('./assets/image/smart/showphoto.jpg')
})

//引入toast插件
import toast from "components/common/toast"
import "./assets/css/iconfont/iconfont.css"
//插入toast插件
Vue.use(toast)

//解决移动端300ms延迟
FastClick.attach(document.body)

Vue.config.productionTip = false

//事件总线
Vue.prototype.$bus = new Vue()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

