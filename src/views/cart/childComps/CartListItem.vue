<template>
        <div class="list-item">
          <div class="checked">
              <check-button class="check-button" :isChecked="itemInfo.checked" @click.native="cutChecked"/>
          </div>
          <div class="item-img">
              <img :src="itemInfo.image" alt="">
          </div>
          <div class="item-info">
              <p class="item-title">{{itemInfo.title}}</p>
              <p class="item-desc">{{itemInfo.desc}}</p>
              <div>
                  <div class="price">￥{{itemInfo.price}}</div>
                  <div class="count">
                      <button :disabled="itemInfo.count === 1" @click="subItemCounter(itemInfo.iid)">-</button>
                      {{itemInfo.count}}
                      <button @click="addItemCounter(itemInfo.iid)">+</button>
                  </div>
              </div>
          </div>
        </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton.vue"
export default {
    name: "CartListItem",
    components: {
        CheckButton
    },
    props: {
        itemInfo: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        cutChecked() {
            this.itemInfo.checked = !this.itemInfo.checked
        },
        addItemCounter(id) {
        //   console.log(id)
          this.$store.dispatch("addItemCounter", id)
        },
        subItemCounter(id) {
          this.$store.dispatch("subItemCounter", id)
        }
    }
}
</script>

<style scoped>
    .list-item {
        display: flex;
        justify-content: space-around;
        margin-bottom: 15px;
    }
    .checked {
        width: 20px;
        position: relative;
    }
    .checked .check-button {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
    }
    .item-img {
        margin-left: 10px;
        width: 100px;
        height: 110px;
        border-radius: 10px;
    }
    .item-img img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
    }
    .item-info {
        flex: 1;
    }
    .item-title {
        width: 250px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-size: 18px;
        color: #333;
        margin-left: 10px;
        margin-bottom: 15px;
    }
    .item-desc {
        width: 250px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        margin-left: 10px;
        margin-bottom: 10px;
    }
    .price {
        color: var(--color-high-text);
        font-size: 20px;
    }
    .item-info > div {
        display: flex;
        justify-content: space-between;
        padding: 10px;
    }
    button {
        width: 25px;
        height: 25px;
        border-radius: 50%;
        border: none;
        /* background-color: orangered; */
    }
</style>