import Toast from "./Toast.vue"
const obj = {}

obj.install = function(Vue) {
    // console.log("哈哈哈哈", Vue)
    //创造组件构造器
    const toastContructor = Vue.extend(Toast)
        //new的方式，根据组件构造器，可以创建一个组件对象
    const toast = new toastContructor()
        //将构造出来的对象手动挂载到某一个元素
    toast.$mount(document.createElement("div"))
        //toast.$el对应的就是div
    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}

export default obj