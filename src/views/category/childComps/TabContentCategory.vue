<template>
  <div class="tab-content-category">
      <div class="category-item" v-for="item in subcategories.list">
          <a :href="item.link">
              <img :src="item.image" alt="" @load="imageLoad">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    name: "TabContentCategory",
    props: {
        subcategories: {
            type: Object,
            default() {
                return {}
            }
        }
    },
    methods: {
        imageLoad() {
            this.$emit("imageLoad")
        }
    }
}
</script>

<style scoped>
    .tab-content-category {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        align-items: center;
    }
    .category-item {
        width: 100px;
        height: 100px;
        /* margin-left: 5px; */
        text-align: center;
    }
    .category-item img {
        width: 80px;
        height: 80px;
    }
</style>