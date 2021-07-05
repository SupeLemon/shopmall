<template>
  <div id="detail">
      <!-- 导航 -->
      <detail-navbar></detail-navbar>
      <scroll class="content">
        <detail-swiper :top-images="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
      </scroll>
  </div>
</template>

<script>
import DetailNavbar from './childComps/DetailNavbar.vue'
import DetailSwiper from "./childComps/DetailSwiper.vue"
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import Scroll from "components/common/scroll/Scroll"
import {getDetail, Goods, Shop} from "network/detail.js"
export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {}
        }
    },
    components: { 
        DetailNavbar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        Scroll
    },
    created() {
        this.iid = this.$route.params.iid
        this.getDetail(this.iid)
    },
    methods: {
        getDetail(id) {
            getDetail(id).then(res => {
                console.log(res)
                this.topImages.push(...res.result.itemInfo.topImages)
                this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
                // console.log(this.goods)
                this.shop = new Shop(res.result.shopInfo)
            })
        }
    }
}
</script>

<style scoped>
    #detail {
        position: relative;
        height: 100vh;
        z-index: 15;
        background-color: #fff;
    }
    .content {
        height: calc(100% - 44px);
        overflow: hidden;
    }
</style>