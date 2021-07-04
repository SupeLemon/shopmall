<template>
  <div class="tab-control">
      <div class="tab-control-item" v-for="(item, index) in titles" @click="itemClick(index)">
          <span :class="{active: currentIndex === index}">{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
      titles: {
          type: Array,
          default: []
      }
  },
  data() {
      return {
          currentIndex: 0
      }
  },
  methods: {
      itemClick(index) {
          this.currentIndex = index
        //   console.log("11")
        this.$emit("tabClick", index)
      }
  }
}
</script>

<style scoped>
    .tab-control {
        display: flex;
        width: 100%;
        background-color: #fff;
    }
    .tab-control-item {
        flex: 1;
        text-align: center;
        height: 40px;
        line-height: 40px;
        font-size: 15px;
    }
    .tab-control-item span {
        padding: 5px;
    }
    .tab-control-item span.active {
        border-bottom: 3px solid var(--color-tint);
        color: var(--color-high-text);
    }
</style>