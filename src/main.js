import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//引入toast插件
import toast from "components/common/toast"
import "./assets/css/iconfont/iconfont.css"
Vue.config.productionTip = false
//插入toast插件
Vue.use(toast)

//事件总线
Vue.prototype.$bus = new Vue()


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

