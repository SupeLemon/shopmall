<template>
  <div v-if="Object.keys(goods).length !== 0" class="base-info">
      <div>
        <p class="title">{{goods.title}}</p>
        <span class="newPrice">{{goods.newPrice}}</span>&nbsp;&nbsp;
        <span class="oldPrice">{{goods.oldPrice}}</span>&nbsp;&nbsp;
        <span class="discount">{{goods.discount}}</span>
      </div>
      <div class="columns">
          <span v-for="(item, index) in goods.columns" v-show="!(index==2)">{{item}}</span>
          <span>{{goods.services[goods.services.length - 1].name}}</span>
      </div>
      <div class="services">
          <div class="service-item" v-for="(item, index) in goods.services" v-show="!((index==0)||(index==4))">
              <img :src="item.icon" alt="">
              <span>{{item.name}}</span>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "DetailBaseInfo",
  props: {
      goods: {
          type: Object,
          default() {
              return {}
          }
      }
  },
}
</script>

<style scoped>
    .base-info {
        padding: 10px;
        border-bottom: 1px solid #eee;
    }
    .base-info div .title {
        font-size: 17px;
        color: black;
        font-weight: 530;
        margin-bottom: 10px;
    }
    .base-info div .newPrice {
        color: var(--color-high-text);
        font-size: 20px;
    }
    .base-info div .oldPrice {
        font-size: 15px;
        color: #888;
        text-decoration: line-through;
    }
    .base-info div .discount {
        font-size: 16px;
        background-color: var(--color-tint);
        color: #fff;
        padding: 5px;
        border-radius: 10px;
    }
    .base-info div {
        margin-bottom: 20px;
    }
    .base-info .columns {
        display: flex;
        justify-content: space-between;
        margin-bottom: 30px;
    }
    .base-info .services {
        display: flex;
        justify-content: space-between;
    }
    .base-info .service-item img{
        width: 18px;
        height: 18px;
        vertical-align: middle;
    }
</style>