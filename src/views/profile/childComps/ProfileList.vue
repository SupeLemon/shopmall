<template>
  <div class="profile-list">
      <ul class="content1">
          <li>
              <img src="~assets/img/profile/xiaoxi.png" alt="">
              <span>我的消息</span>
          </li>
          <li>
              <img src="~assets/img/profile/jifen.png" alt="">
              <span>积分商城</span>
          </li>
          <li>
              <img src="~assets/img/profile/member.png" alt="">
              <span>会员卡</span>
          </li>
      </ul>

      <ul class="content2">
          <li @click="cartClick">
              <img src="~assets/img/profile/购物车.png" alt="">
              <span>我的购物车</span>
          </li>
          <li>
              <img src="~assets/img/profile/gouwu.png" alt="">
              <span>下载购物App</span>
          </li>
      </ul>
      <el-button class="log-out" type="danger" v-if="Object.keys($store.state.user).length !== 0" @click="logOut">退出登录</el-button>
  </div>
</template>

<script>
export default {
    name: "ProfileList",
    methods: {
        cartClick() {
            this.$router.push("/cart")
        },
        logOut() {
            this.$confirm('确定要退出登陆?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                this.$store.dispatch("removeUser")
                this.$message({
                    type: 'success',
                    message: '退出成功!'
                });
                this.$router.push("/profile")
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消退出操作'
                });          
        });
        }
    }
}
</script>

<style scoped>
    .profile-list {
        margin-top: 15px;
    }
    li {
        list-style: none;
    }
    .content1 li, .content2 li {
        height: 44px;
        background-color: #fff;
        border-bottom: 1px solid #eee;
        line-height: 44px;
        display: flex;
        align-items: center;
        padding-left: 10px;
    }
    li img {
        width: 22px;
        height: 22px;
    }
    li span {
        margin-left: 5px;
    }
    .content2 {
        margin-top: 20px;
    }
    .log-out {
        width: 100%;
    }
</style>