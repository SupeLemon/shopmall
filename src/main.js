import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

//通过原型为vue实例添加$bus
Vue.prototype.$bus = new Vue()

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')