<template>
  <div id="cart">
    <nav-bar class="cart-bar">
      <div class="center" slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="content">
      <cart-list v-if="cartLength > 0"/>
      <div v-else>
        <img src="~assets/img/common/noCart.gif" alt="">
      </div>
    </scroll>
    <cart-buttom/>
  </div>
</template>

<script>
import CartButtom from './childComps/CartButtom.vue'
import CartList from "./childComps/CartList.vue"
import NavBar from 'components/common/navbar/NavBar.vue'
import Scroll from "components/common/scroll/Scroll"
import {mapGetters} from  "vuex"
export default {
  name: "Cart",
  components: { 
    NavBar,
    CartList,
    Scroll,
    CartButtom 
  },
  computed: {
    ...mapGetters(['cartLength'])
    // ...mapGetters({
    //   length: "cartLength"
    // })
  }
}
</script>

<style scoped>
  #cart {
    height: 100vh;
    position: relative;
  }
  .cart-bar {
    background-color: var(--color-tint);
  }
  .cart-bar .center {
    color: #fff;
    font-size: 17px;
  }
  .content {
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
  img {
    width: 100%;
  }
</style>