<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="goods-info">
      <div class="info-desc">
          <div class="start"></div><br>
          <div class="desc">{{detailInfo.desc}}</div><br>
          <div class="end"></div>
      </div><br>
      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="info-list">
          <img v-for="item in detailInfo.detailImage[0].list" :src="item" alt="" @load="imageLoad">
      </div>
  </div>
</template>

<script>
export default {
  name: "DetailGoodsInfo",
  props: {
      detailInfo: {
          type: Object,
          default() {
              return {}
          }
      }
  },
  data() {
      return {
          count: 0,
          imageLength: 0
      }
  },
  methods: {
      imageLoad() {
        //   console.log("----")
        if(++this.count === this.imageLength) {
            this.$emit("detailImageLoad")
        }         
      }
  },
  watch: {
      detailInfo() {
          this.imageLength = this.detailInfo.detailImage[0].list.length
      }
  }
}
</script>

<style scoped>
    .goods-info {
        padding: 10px;
    }
    .info-desc .start, .info-desc .end {
        width: 90px;
        height: 1px;
        background-color: #a3a3a5;
        position: relative;
    }
    .info-desc .start {
        float: left;
    }
    .info-desc .end {
        float: right;
    }
    .info-desc .start::before, .info-desc .end::after {
        content: '';
        position: absolute;
        width: 5px;
        height: 5px;
        background-color: #333;
        bottom: 0;
    }
    .info-desc .end::after {
        right: 0;
    }
    .info-key {
        color: #333;
        font-size: 15px;
        margin-bottom: 10px;
    }
    .info-list img {
        width: 100%;
    }
</style>