<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <div class="content">
      <tab-menu class="menu" :categories="categories" @selectItem="selectItem"/>
      <scroll class="tab-content" ref="scroll">
        <div>
          <tab-content-category :subcategories="showSubcategory" @imageLoad="imageLoad"/>
          <tab-control :titles='["综合", "新品", "销量"]' @tabClick="tabClick"/>
          <tab-content-detail :categoryDetail="showCategoryDetail"/>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script>
import TabControl from '../../components/content/tabControl/TabControl.vue'
import Scroll from '../../components/common/scroll/Scroll.vue'
import NavBar from '../../components/common/navbar/NavBar.vue'
import TabMenu from './childComps/TabMenu.vue'
import TabContentCategory from './childComps/TabContentCategory.vue'
import TabContentDetail from './childComps/TabContentDetail.vue'
import {getCategory, getSubcategory, getCategoryDetail} from "network/category.js"
import {debounce} from "common/debounce.js"
export default {
  name: "Category",
  data() {
    return {
      categories: [],
      categoryData: {},
      currentIndex: -1,
      currentType: 'pop'
    }
  },
  components: { 
    NavBar,
    Scroll,
    TabMenu,
    TabContentCategory,
    TabControl,
    TabContentDetail
  },
  created() {
    this.getCategory()
  },
  computed: {
    showSubcategory() {
      if(this.currentIndex === -1) return {}
      return this.categoryData[this.currentIndex].subcategories
    },
    showCategoryDetail() {
      if(this.currentIndex === -1) return []
      return this.categoryData[this.currentIndex].categoryDetail[this.currentType]
    }
  },
  methods: {
    tabClick(index) {
      // console.log(index)
      // console.log(this.showCategoryDetail)
      switch(index) {
        case 0:
          this.currentType = 'pop'
          break;
        case 1: 
          this.currentType = 'new'
          break;
        case 2:
          this.currentType = 'sell'
          break;
      }
    },
    imageLoad() {
      console.log("1")
      const refresh = debounce(this.$refs.scroll.refresh, 50)
      refresh()
    },
    /** 
     * 发送网络请求
     */
    getCategory() {
      getCategory().then(res => {
        // console.log(res)
        this.categories = res.data.category.list
        for(let i=0; i< this.categories.length; i++) {
          this.categoryData[i] = {
            subcategories: {},
            categoryDetail: {
              pop: [],
              new: [],
              sell: [],
            },
          }
        }
        // console.log(this.categoryData)
        this.getSubcategories(0)
      })
    },
    getSubcategories(index) {
      this.currentIndex = index
      const maitKey = this.categories[index].maitKey
      getSubcategory(maitKey).then(res => {
        // console.log(res)
        this.categoryData[index].subcategories = res.data
        this.categoryData = {...this.categoryData}
        this.getCategoryDetail('pop')
        this.getCategoryDetail('sell')
        this.getCategoryDetail('new')
      })
    },
    getCategoryDetail(type) {
      const miniWallkey = this.categories[this.currentIndex].miniWallkey
      getCategoryDetail(miniWallkey, type).then(res => {
        this.categoryData[this.currentIndex].categoryDetail[type] = res
        this.categoryData = {...this.categoryData}
      })
    },
    selectItem(index) {
      // console.log(index)
      this.getSubcategories(index)
    }
  },
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50)
    this.$bus.$on("itemImageLoad", () => {
      // console.log("111")
      refresh()
    })
  }

}
</script>

<style scoped>
  #category {
    position: relative;
    height: 100vh;
  }
  .category-nav {
    background-color: var(--color-tint);
    font-size: 17px;
    color: #fff;
  }
  .content {
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    overflow: hidden;
    display: flex;
  }
  .menu {
    width: 110px;
  }
  .tab-content {
    flex: 1;
  }
</style>