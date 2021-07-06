import { debounce } from "./debounce.js"
import BackTop from "components/content/backTop/BackTop.vue"
export const itemListenerMixin = {
    data() {
        return {
            itemImgListener: null
        }
    },
    mounted() {
        let refresh = debounce(this.$refs.scroll.refresh, 200)
        this.itemImgListener = () => {
            refresh()
        }
        this.$bus.$on("itemImageLoad", this.itemImgListener)
            // console.log("我是混入的内容")
    }
}

export const backTopMixin = {
    data() {
        return {
            isShowbackTop: false
        }
    },
    components: {
        BackTop
    },
    methods: {
        backClick() {
            // console.log("----")
            this.$refs.scroll.scrollTo(0, 0, 500)
        }
    }
}