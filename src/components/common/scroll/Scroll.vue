<template>
  <div class="wrapper" ref="wrapper">
      <div class="content">
          <slot></slot>
      </div>
  </div>
</template>

<script>
import BScroll from "better-scroll"
export default {
  name: "Scroll",
  props: {
      probeType: {
          type: Number,
          default() {
              return 0
          }
      },
      pullUpLoad: {
          type: Boolean,
          default() {
              return false
          }
      }
  },
  data() {
      return {
          scroll: null
      }
  },
  mounted() {
      this.scroll = new BScroll(this.$refs.wrapper, {
          probeType: this.probeType,
          pullUpLoad: this.pullUpLoad,
          click: true
      })
      //实时监听滚动
      if(this.probeType === 2 || this.probeType === 3) {
          this.scroll.on("scroll", position => {
            //   console.log(position)
              this.$emit("scroll", position)
          })
      }
      //下拉加载
      if(this.pullUpLoad) {
            this.scroll.on("pullingUp", () => {
                // console.log("上拉加载更多")
                this.$emit("pullingup")
            })
      }
  },
  methods: {
      scrollTo(x, y, time=300) {
          this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time)
      },
      finishPullUp() {
          this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
      },
      refresh() {
        //   console.log("------")
          this.scroll && this.scroll.refresh && this.scroll.refresh()
      },
      getScrollY() {
          return this.scroll.y ? this.scroll.y : 0
      }   
  }
}
</script>

<style scoped>

</style>