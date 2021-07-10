<template>
  <div id="detail">
      <!-- 导航 -->
      <detail-navbar @titleClick="titleClick" ref="nav"></detail-navbar>
      <scroll class="content" ref="scroll" :probe-type="3" @scroll="scroll">
        <detail-swiper :top-images="topImages"/>
        <detail-base-info :goods="goods"/>
        <detail-shop-info :shop="shop"/>
        <detail-goods-info :detailInfo="detailInfo" @detailImageLoad="detailImageLoad"/>
        <detail-params-info ref="params" :paramsInfo="paramsInfo"/>
        <detail-comment-info ref="comment" :commentInfo="commentsInfo"/>
        <detail-recommend ref="recommend" :recommentList="recommendList"/>
      </scroll>
      <back-top @click.native="backClick" v-show="isShowbackTop"/>
      <detail-bottom-bar @addCart="addToCart"/>
  </div>
</template>

<script>
import DetailNavbar from './childComps/DetailNavbar.vue'
import DetailSwiper from "./childComps/DetailSwiper.vue"
import DetailBaseInfo from './childComps/DetailBaseInfo.vue'
import DetailShopInfo from './childComps/DetailShopInfo.vue'
import DetailGoodsInfo from "./childComps/DetailGoodsInfo.vue"
import DetailParamsInfo from './childComps/DetailParamsInfo.vue'
import DetailCommentInfo from './childComps/DetailCommentInfo.vue'
import DetailRecommend from './childComps/DetailRecommend.vue'
import DetailBottomBar from "./childComps/DetailBottomBar.vue"
import Scroll from "components/common/scroll/Scroll"
import {getDetail, getRecommend, Goods, Shop, Param, Comment} from "network/detail.js"
import {debounce} from "common/debounce.js"
import {itemListenerMixin, backTopMixin} from "common/mixin.js"
import { mapActions} from "vuex"
export default {
    name: 'Detail',
    data() {
        return {
            iid: null,
            topImages: [],
            goods: {},
            shop: {},
            detailInfo: {},
            paramsInfo: {},
            commentsInfo: {},
            recommendList: [],
            themeTopYs: [],
            currentIndex: 0,
            message: "",
            show: false
        }
    },
    components: { 
        DetailNavbar,
        DetailSwiper,
        DetailBaseInfo,
        DetailShopInfo,
        DetailGoodsInfo,
        DetailParamsInfo,
        DetailRecommend,
        DetailCommentInfo,
        DetailBottomBar,
        Scroll
    },
    created() {
        this.iid = this.$route.params.iid
        //请求详情相关数据
        this.getDetail(this.iid)
        //请求推荐数据
        this.getRecommend()
    },
    methods: {
        ...mapActions(["addCart"]),
        //事件监听
        addToCart() {
            // console.log("111")
            const product = {}
            product.image = this.topImages[0]
            product.title = this.goods.title
            product.desc = this.goods.desc
            product.price = this.goods.realPrice
            product.iid = this.iid

            //添加商品数据到购物车
            // this.$store.dispatch("addCart", product)
            this.addCart(product).then(res => {
               this.$toast.show(res, 1500)
            })
        },
        titleClick(index) {
            // console.log(index)
            this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 100)
        },
        detailImageLoad() {
            this.$refs.scroll.refresh()
            // console.log("-----")
            // console.log(this.$refs.params.$el.offsetTop)
            this.themeTopYs = []
            this.themeTopYs.push(0)
            this.themeTopYs.push(this.$refs.params.$el.offsetTop)
            this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
            this.themeTopYs.push(this.$refs.recommend.$el.offsetTop)
            this.themeTopYs.push(Number.MAX_VALUE)
            // console.log(this.themeTopYs)
        },
        scroll(position) {
            // console.log(position)
            //backTop组件
            this.isShowbackTop = (-position.y) > 1000 
            //滚动内容显示对应标题
            let positionY = -position.y
            // console.log(positionY)
            const length = this.themeTopYs.length
            for(let i=0; i<length-1; i++) {
                // if(this.currentIndex !== i && ((i<length-1 && positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1]) || (i===length-1 && positionY >= this.themeTopYs[i]))) {
                //     // console.log(i)
                //     this.currentIndex = i
                //     this.$refs.nav.currentIndex = this.currentIndex
                //     // console.log
                //     // console.log(this.currentIndex)
                // }
                if(this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])) {
                    this.currentIndex = i
                    this.$refs.nav.currentIndex = this.currentIndex
                }
            }
        },
        // 发送网络请求
        getDetail(id) {
            getDetail(id).then(res => {
                // console.log(res)
                this.topImages.push(...res.result.itemInfo.topImages)
                //商品数据
                this.goods = new Goods(res.result.itemInfo, res.result.columns, res.result.shopInfo.services)
                // console.log(this.goods)
                //店铺数据
                this.shop = new Shop(res.result.shopInfo)
                //详情数据
                this.detailInfo = res.result.detailInfo
                //参数数据
                this.paramsInfo = new Param(res.result.itemParams.info, res.result.itemParams.rule)
                //评论数据
                this.commentsInfo = new Comment(res.result.rate.list[0])
            })
        },
        getRecommend() {
            getRecommend().then(res => {
                // console.log(res)
                this.recommendList = res.data.list
                // console.log(this.recommendList)
            })
        }
    },
    mixins: [itemListenerMixin, backTopMixin],
    mounted() {
        
    },
    // updated() {
    //     this.themeTopYs = []
    //     this.themeTopYs.push(0)
    //     this.themeTopYs.push(this.$refs.params.$el.offsetTop)
    //     this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
    //     this.themeTopYs.push(this.$refs.recomend.$el.offsetTop)
    //     console.log(this.themeTopYs)
    // },
    destroyed() {
        this.$bus.$off("itemImageLoad", this.itemImgListener)
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
        /* height: calc(100% - 44px -49px); */
        position: absolute;
        left: 0;
        right: 0;
        top: 44px;
        bottom: 49px;
        overflow: hidden;
    }
</style>