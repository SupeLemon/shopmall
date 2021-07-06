<template>
  <div class="bottom-bar">
     <div class="bar-item bar-left">
         <div>
            <img src="~assets/img/detail/kefu.png" alt="">
            <span>客服</span>
         </div>
         <div>
             <img src="~assets/img/detail/dianpu.png" alt="">
             <span>店铺</span>
         </div>
         <div>
             <img src="~assets/img/detail/shoucang.png" alt="">
             <span>收藏</span>
         </div>
     </div>
     <div class="bar-item bar-right">
         <div class="cart" @click="addToCart">加入购物车</div>
         <div class="buy">购买</div>
     </div>
  </div>
</template>

<script>
export default {
  name: "DetailBottomBar",
  methods: {
      addToCart() {
        //   console.log("---")
          this.$emit("addCart")
      }
  }
}
</script>

<style scoped>
    .bottom-bar {
        position: fixed;
        height: 49px;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        z-index: 100;
        background-color: red;
    }
    .bar-item {
        flex: 1;
        display: flex;
    }
    .bar-left div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #fff;
    }
    .bar-left div img {
        width: 24.28px;
        height: 24.28px;
        margin-bottom: 3px;
        margin-top: 2px;
    }
    .bar-right div {
        flex: 1;
    }
    .bar-right .cart {
        text-align: center;
        line-height: 49px;
        background-color: #FFE817;
        color: #333;
    }
    .bar-right .buy {
        text-align: center;
        line-height: 49px;
        background-color: var(--color-tint);
        color: #333;
    }
</style>