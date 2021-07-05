<template>
  <div class="shop-info">
      <div class="shop">
          <img :src="shop.logo" alt="">&nbsp;&nbsp;&nbsp;
          <span class="shop-name">{{shop.name}}</span>
      </div>
      <div class="shop-desc">
          <div class="total-volume">
              <p class="sell-total">{{shop.sells | sellCountFilter}}</p><br>
              <p>总销量</p>
          </div>
          <div class="shop-total">
              <p class="total">{{shop.goodsCount}}</p><br>
              <p>全部宝贝</p>
          </div>
          <div class="shop-score">
             <table>
                <tr v-for="(item, index) in shop.score" :key="index">
                    <td>{{item.name}}</td>&nbsp;&nbsp;
                    <td class="score" :class="{'score-better': item.isBetter}">{{item.score}}</td>&nbsp;&nbsp;
                    <td class="better" :class="{'better-more': item.isBetter}">{{item.isBetter ? '高' : '低'}}</td>
                </tr>
             </table>
          </div>
      </div>
      <div class="btn">进店逛逛</div>
  </div>
</template>

<script>
export default {
  name: "DetailShopInfo",
  props: {
      shop: {
          type: Object,
          default() {
              return {}
          }
      }
  },
  filters: {
      sellCountFilter(value) {
          let result = value
          if(result > 10000) {
              result = (result / 10000).toFixed(1) + '万'
          }
          return result
      }
  }
}
</script>

<style scoped>
    .shop-info {
        padding: 10px;
        border-bottom: 5px solid #f2f5f8;
    }
    .shop-info .shop img {
        width: 45px;
        height: 45px;
        border-radius: 50%;
        vertical-align: middle;
    }
    .shop-info .shop .shop-name {
        font-size: 17px;
    }
    .shop-desc {
        margin-top: 30px;
        display: flex;
        justify-content: space-around;
    }
    .sell-total {
        font-size: 20px;
        text-align: center;
    }
    .shop-total .total {
        font-size: 20px;
    }
    table {
        position: relative;
        top: -20px;
    }
    tr {
        height: 25px;
    }
    .score {
        color: greenyellow;
    }
    .score-better {
        color: red;
    }
    .better {
        background-color: greenyellow;
        color: #fff;
        border-radius: 5px;
    }
    .better-more {
        background-color: red;
        color: #fff;
    }
    .btn {
        width: 150px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        background-color: #f2f5f8;
        border-radius: 10px;
        margin: auto;
    }
</style>