<template>
  <div class="check-button" :class="{checked: isChecked}">
      <img src="~assets/img/detail/xuanze.png" alt="" v-show="isChecked">
  </div>
</template>

<script>
export default {
    name: "CheckButton",
    props: {
        isChecked: {
            type: Boolean,
            default() {
                return true
            }
        }
    },
}
</script>

<style scoped>
    .check-button {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        border: 2px solid #ccc;
        cursor: pointer;
    }
    .check-button img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
    }
    .checked {
        background-color: #ff8198;
        border-color: #ff8198;
    }
</style>