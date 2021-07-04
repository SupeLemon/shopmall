<template>
  <ul class="recommend-view">
      <li v-for="item in recommends">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </li>
  </ul>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
      recommends: {
          type: Array,
          default() {
              return []
          }
      }
  }
}
</script>

<style scoped>
    .recommend-view {
        display: flex;
        width: 100%;
        text-align: center;
        padding: 10px 0 20px;
        border-bottom: 8px solid #eee;
        font-size: 14px;
    }
    li {
        list-style: none;
        flex: 1;
    }
    li img {
        width: 70px;
        height: 70px;
        margin-bottom: 10px;
    }
</style>