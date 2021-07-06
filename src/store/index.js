import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        cartList: []
    },
    mutations: {
        addCart(state, payload) {
            // console.log(payload)
            // for循环方式
            // let oldProduct = null
            // for (let item of state.cartList) {
            //     if (item.iid === payload.iid) {
            //         oldProduct = item
            //     }
            // }

            // if (oldProduct) {
            //     oldProduct.count += 1
            // } else {
            //     payload.count = 1
            //     state.cartList.push(payload)
            // }
            //find方法
            let oldProduct = state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                oldProduct.count += 1
            } else {
                payload.count = 1
                state.cartList.push(payload)
            }
        }
    }
})

export default store