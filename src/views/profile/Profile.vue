<template>
  <div id="profile">
    <nav-bar class="profile-nav">
      <div slot="center">Lemon商城</div>
    </nav-bar>
    <profile-info/>
    <account-info/>
    <profile-list/>
  </div>
</template>

<script>
import NavBar from '../../components/common/navbar/NavBar.vue'
import AccountInfo from './childComps/AccountInfo.vue'
import ProfileInfo from './childComps/ProfileInfo.vue'
import ProfileList from './childComps/ProfileList.vue'
export default {
  name: "Profile",
  components: { 
    NavBar,
    ProfileInfo,
    AccountInfo,
    ProfileList
  },
}
</script>

<style scoped>
  #profile {
    background: #f2f2f2;
    height: 100vh;
  }
  .profile-nav {
    background-color: var(--color-tint);
    font-size: 17px;
    color: #fff;
  }
</style>