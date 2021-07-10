import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import actions from "./actions"
import getters from "./getters"
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)

const state = {
    cartList: []
}
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [
        createPersistedState({
            storage: window.localStorage,
            key: "store",
            render(state) {
                return {...state }
            }
        })
    ]
})

export default store