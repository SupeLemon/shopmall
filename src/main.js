import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import toast from "components/content/toast/index.js"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(toast)
Vue.use(ElementUI)

Vue.config.productionTip = false

//通过原型为vue实例添加$bus
Vue.prototype.$bus = new Vue()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')