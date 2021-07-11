<template>
  <scroll class="tab-menu">
    <div class="menu-list">
      <div class="menu-list-item" 
            @click="itemClick(index)" 
            :class="{active: currentIndex === index}" 
            v-for="(item, index) in categories">
            {{item.title}}
      </div>
    </div>
  </scroll>
</template>

<script>
import Scroll from '../../../components/common/scroll/Scroll.vue'
export default {
  components: { Scroll },
    name: "TabMenu",
    props: {
        categories: {
            type: Array,
            default() {
                return []
            }
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
            this.$emit("selectItem", index)
        }
    }
}
</script>

<style scoped>
    .tab-menu {
        width: 100%;
        height: 100%;
        background-color: rgb(246, 246, 246);
        box-sizing: border-box;
        /* margin-top: -44px; */
    }
    .menu-list {
        background-color: rgb(246, 246, 246);
        color: var(--color-text);
    }
    .menu-list-item {
        height: 45px;
        line-height: 45px;
        padding-left: 10px;
    }
    .menu-list-item.active {
        border-left: 5px solid var(--color-tint);
        background-color: #fff;
        color: var(--color-high-text);
        font-weight: 700;
        padding-left: 10px;
    }
</style>