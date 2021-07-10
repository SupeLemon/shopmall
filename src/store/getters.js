export default {
    cartLength(state) {
        return state.cartList.length
    },
    cartList(state) {
        return state.cartList
    },
    cartChecked(state) {
        const cartChecked = state.cartList.filter(item => item.checked)
        return cartChecked.length
    },
    totalPrice(state) {
        return state.cartList.filter(item => item.checked).reduce((pre, item) => {
            return pre += item.price * item.count
        }, 0)
    }
}