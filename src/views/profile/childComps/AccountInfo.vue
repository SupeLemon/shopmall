<template>
  <div class="account-info">
      <div class="account-balance">
          <span><span>0.00</span>元</span>
          <span>我的余额</span>
      </div>
      <div class="account-discounts">
          <span><span>0</span>个</span>
          <span>我的优惠</span>
      </div>
      <div class="account-integral">
          <span><span>0</span>分</span>
          <span>我的积分</span>
      </div>
  </div>
</template>

<script>
export default {
    name: "AccountInfo"
}
</script>

<style scoped>
    .account-info {
        display: flex;
        align-items: center;
        height: 85px;
        background-color: #fff;
    }
    .account-info div {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border-left: 1px solid #eee;
    }
    .account-info div span span {
        color: var(--color-high-text);
        font-size: 6.4vw;
    }
</style>