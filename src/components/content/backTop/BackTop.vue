<template>
  <div class="back-top">
      <img src="~assets/img/common/backtop.png" alt="">
  </div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
    .back-top {
        position: fixed;
        z-index: 20;
        width: 45px;
        height: 45px;
        right: 10px;
        bottom: 60px;
        border-radius: 50%;
        box-shadow: 0 1px 2px rgba(100, 100, 100, .3);
    }
    .back-top img {
        width: 100%;
        height: 100%;
    }
</style>