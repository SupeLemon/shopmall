<template>
  <nav-bar>
      <div class="detail-left" slot="left" @click="backClick">
          <img src="~assets/img/detail/fanhui.png" alt="">
      </div>
      <div class="detail-center" slot="center">
          <div v-for="(item, index) in titles" @click="itemClick(index)">
              <span :class="{active: currentIndex === index}">{{item}}</span>
          </div>
      </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue"
export default {
  name: "DetailNavbar",
  components: {
      NavBar
  },
  data() {
      return {
          titles: ['商品', '参数', '评论', '推荐'],
          currentIndex: 0
      }
  },
  methods: {
      backClick() {
          this.$router.push("/home")
      },
      itemClick(index) {
          this.currentIndex = index
      }
  }
}
</script>

<style scoped>
    .detail-center {
        display: flex;
        text-align: center;
    }
    .detail-left img {
        width: 28px;
        height: 28px;
        margin-top: 8px;
    }
    .detail-center div {
        flex: 1;
        font-size: 14px;
    }
    .active {
        color: var(--color-high-text);
    }
</style>