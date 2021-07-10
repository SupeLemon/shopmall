import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import toast from "components/content/toast/index.js"

Vue.use(toast)

Vue.config.productionTip = false

//通过原型为vue实例添加$bus
Vue.prototype.$bus = new Vue()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')