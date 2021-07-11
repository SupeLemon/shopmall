<template>
  <div v-if="Object.keys(goodsItem).length !== 0" class="goods-list-item" @click="itemClick">
    <img v-lazy="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
        <p class="goods-title">{{goodsItem.title}}</p>
        <span class="goods-price">￥{{goodsItem.price}}</span>&nbsp;&nbsp;&nbsp;&nbsp;
        <span class="goods-cfav">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
      goodsItem: {
          type: Object,
          default() {
              return {}
          }
      }
  },
  methods: {
      imageLoad() {
          //通过事件总线发出一个事件
          this.$bus.$emit("itemImageLoad")
      },
      itemClick() {
          this.$router.push("/detail/" + this.goodsItem.iid)
      }
  },
  computed: {
      showImage() {
          return this.goodsItem.img || this.goodsItem.image || this.goodsItem.show.img
      }
  }
}
</script>

<style scoped>
    .goods-list-item {
        padding-bottom: 40px;
        position: relative;
        width: 48%;
    }
    .goods-list-item img {
        width: 100%;
    }
    .goods-info {
        position: absolute;
        font-size: 12px;
        bottom: 5px;
        right: 0;
        left: 0;
        overflow: hidden;
        text-align: center;
    }
    .goods-title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-bottom: 3px;
    }
    .goods-price {
        color: red;
        margin-right: 20px;
    }
    .goods-cfav::before {
        content: '';
        position: absolute;
        top: 14px;
        left: 108px;
        width: 14px;
        height: 14px;
        background: url("~assets/img/common/shoucang.png") 0 0/14px 14px;
    }
</style>