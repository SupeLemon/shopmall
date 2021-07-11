import { ADD_COUNTER, ADD_TO_CART, ADD_CART_ITEM, SUB_CART_ITEM, ADD_USER, REMOVE_USER } from "./mutation-type"
export default {
    [ADD_COUNTER](state, payload) {
        payload.count++
    },

    [ADD_TO_CART](state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    },
    [ADD_CART_ITEM](state, payload) {
        payload.count++
    },
    [SUB_CART_ITEM](state, payload) {
        payload.count--
    },
    [ADD_USER](state, payload) {
        state.user = payload
    },
    [REMOVE_USER](state) {
        state.user = {}
    }
}