<template>
  <div class="cart-list">
      <cart-list-item v-for="itemInfo in cartList" :item-info="itemInfo"/>
  </div>
</template>

<script>
import CartListItem from "./CartListItem.vue"
import {mapGetters} from "vuex"
export default {
  name: "CartList",
  components: {
      CartListItem
  },
  computed: {
      ...mapGetters(["cartList"])
  }
}
</script>

<style scoped>
    .cart-list {
        padding: 10px;
    }
</style>