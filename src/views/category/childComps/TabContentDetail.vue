<template>
  <div v-if="categoryDetail.length !== 0" class="tab-content-detail">
      <goods-list :goods="categoryDetail"/>
  </div>
</template>

<script>
import GoodsList from 'components/content/goods/GoodsList.vue'
export default {
    name: "TabContentDetail",
    components: { 
        GoodsList 
    },
    props: {
        categoryDetail: {
            type: Array,
            default() {
                return []
            }
        },
    }
}
</script>

<style scoped>

</style>