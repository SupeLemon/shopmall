import { ADD_COUNTER, ADD_TO_CART, ADD_CART_ITEM, SUB_CART_ITEM } from "./mutation-type"
export default {
    addCart(context, payload) {
        return new Promise((resolve, reject) => {
            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
            if (oldProduct) {
                //商品数量加一
                context.commit(ADD_COUNTER, oldProduct)
                resolve("商品数量加一")
            } else {
                //添加到购物车
                payload.count = 1
                context.commit(ADD_TO_CART, payload)
                resolve("添加到购物车成功")
            }
        })
    },
    addItemCounter(context, payload) {
        let cartItem = context.state.cartList.find(item => item.iid === payload)
        if (cartItem) {
            context.commit(ADD_CART_ITEM, cartItem)
        }
    },
    subItemCounter(context, payload) {
        let cartItem = context.state.cartList.find(item => item.iid === payload)
        if (cartItem) {
            context.commit(SUB_CART_ITEM, cartItem)
        }
    }
}