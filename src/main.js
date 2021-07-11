import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from "./store"
import toast from "components/content/toast/index.js"
import ElementUI from "element-ui"
import 'element-ui/lib/theme-chalk/index.css'
import FastClick from "fastclick"
import VueLazyLoad from "vue-lazyload"

Vue.use(toast)
Vue.use(ElementUI)
Vue.use(VueLazyLoad, {
    loading: require("./assets/img/common/placeholder.png")
})

Vue.config.productionTip = false

if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}

//通过原型为vue实例添加$bus
Vue.prototype.$bus = new Vue()

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')