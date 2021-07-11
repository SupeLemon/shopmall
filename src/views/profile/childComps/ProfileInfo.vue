<template>
  <div class="profile-info">
      <div class="user-photo">
          <img src="~assets/img/profile/weidenglu.png" alt="">
      </div>
      <div @click="toLogin" class="info-text">
          <p class="user" v-if="Object.keys($store.state.user).length !== 0">欢饮您  {{$store.state.user.name}}!</p>
          <p v-else>登陆/注册</p>
          <br>
          <p>
              <img src="~assets/img/profile/shouji.png" alt="">
              <span>暂未绑定手机号</span>
          </p>
      </div>
      <div class="more">
          <img src="~assets/img/profile/gengduo.png" alt="">
      </div>
  </div>
</template>

<script>
export default {
    name: "ProfileInfo",
    methods: {
        toLogin() {
            this.$router.push("/login")
        }
    }
}
</script>

<style scoped>
    .profile-info {
        display: flex;
        height: 80px;
        justify-content: space-between;
        align-items: center;
        background-color: var(--color-tint);
    }
    .user-photo img {
        width: 70px;
        height: 70px;
        margin-left: 20px;
        margin-top: 5px;
    }
    .info-text {
        font-size: 17px;
        color: #fff;
        margin-left: -100px;
    }
    .info-text p img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
    }
    .more img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
    }
    .user {
        font-size: 20px;
    }
</style>