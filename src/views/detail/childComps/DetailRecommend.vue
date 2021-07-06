<template>
  <div v-if="recommentList.length !== 0" class="recommend-list">
    <goods-list :goods="recommentList">
      <goods-list-item />
    </goods-list>
  </div>
</template>

<script>
import GoodsList from "components/content/goods/GoodsList.vue"
import GoodsListItem from "components/content/goods/GoodsListItem.vue"
export default {
  name: "DetailRecommend",
  props: {
      recommentList: {
        type: Array,
        default() {
          return []
        }
      }
  },
  components: {
    GoodsList,
    GoodsListItem
  }
}
</script>

<style scoped>

</style>