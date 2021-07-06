<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
      <tab-control class="tab-control" :titles="titles" @tabClick="tabClick" ref="tabControl1" v-show="isTabShow"/>
      <scroll class="content" 
              ref="scroll" 
              :probe-type="3" 
              @scroll="scroll"
              :pull-up-load="true"
              @pullingup="contentPullingUp">
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad"/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <tab-control :titles="titles" @tabClick="tabClick" ref="tabControl2"/>
        <goods-list :goods="showGoods"/>
      </scroll>
      <back-top @click.native="backClick" v-show="isShowbackTop"></back-top>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
import TabControl from 'components/content/tabControl/TabControl.vue'
import GoodsList from "components/content/goods/GoodsList.vue"
import Scroll from "components/common/scroll/Scroll"
import HomeSwiper from "./childComps/HomeSwiper.vue"
import RecommendView from './childComps/RecommendView.vue'
import FeatureView from './childComps/FeatureView.vue'
import {getHomeMultidata, getHomeGoods} from "network/home"
import {itemListenerMixin, backTopMixin} from "common/mixin.js"

export default {
    name: "Home",
    components: {
        NavBar,
        HomeSwiper,
        RecommendView,
        FeatureView,
        TabControl,
        GoodsList,
        Scroll,
    },
    data(){
        return {
            banners: [],
            recommends: [],
            titles: ["流行", "新款", "精选"],
            goods: {
                'pop': {page: 0, list: []},
                'new': {page: 0, list: []},
                'sell': {page: 0, list: []}
            },
            currentType: "pop",
            tabOffsetTop: 0,
            isTabShow: false,
            saveY: 0
        }
    },
    mixins: [itemListenerMixin, backTopMixin],
    created() {
        //1.请求多个数据
        this.getHomeMultidata()
        //2.请求商品数据
        this.getHomeGoods('pop')
        this.getHomeGoods('new')
        this.getHomeGoods('sell')
        //通过事件总线监听发射的事件
    },
    mounted() {
    },
    methods: {
        /**
         * 事件监听相关代码
         */
        tabClick(index) {
            // console.log(index)
            switch(index) {
                case 0:
                    this.currentType = 'pop'
                    break;
                case 1:
                    this.currentType = 'new'
                    break;
                case 2:
                    this.currentType = "sell"
                    break;
            }
            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index
            // console.log(this.$refs.tabControl1.currentIndex)
            // console.log(this.$refs.tabControl2.currentIndex)

        },
        backClick() {
            // console.log("backClick")
            this.$refs.scroll.scrollTo(0, 0, 500)
        },
        scroll(position) {
            // console.log(position)
            this.isShowbackTop = (-position.y) > 1000
            this.isTabShow = (-position.y) > this.tabOffsetTop
        },
        contentPullingUp() {
            // console.log("上拉加载更多")
            this.getHomeGoods(this.currentType)
        },
        swiperImageLoad() {
            this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
        },
        /** 
         * 网络请求相关代码
        */
        getHomeMultidata() {
            getHomeMultidata().then(res => {
                // console.log(res)
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list
            })
        },
        
        getHomeGoods(type) {
            const page = this.goods[type].page + 1
            getHomeGoods(type, page).then(res => {
                // console.log(res)
                this.goods[type].list.push(...res.data.list)
                this.goods[type].page += 1
                this.$refs.scroll.finishPullUp()
            })
        }
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list
        }
    },
    destroyed() {
        console.log("Home destroyed")
    },
    activated() {
        this.$refs.scroll.scrollTo(0, this.saveY, 0)
        this.$refs.scroll.refresh()
    },
    deactivated() {
        this.saveY = this.$refs.scroll.getScrollY()
        // console.log(this.saveY)
        this.$bus.$off("itemImageLoad", this.itemImgListener)
    }
}
</script>

<style scoped>
    #home {
        width: 100%;
        height: 100vh;
        position: relative;
    }
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
        font-size: 17px;
        /* position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9; */
    }
    .tab-control {
        position: relative;
        z-index: 10;
    }
    .content {
        /* height: calc(100% - 44px - 49px); */
        overflow: hidden;
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
</style>