<template>
  <div class="toast" v-show="isShow">
    <div>{{message}}</div>
  </div>
</template>

<script>
export default {
    name: "Toast",
    data() {
        return {
            message: "",
            isShow: false
        }
    },
    methods: {
        show(message, duration=2000) {
            this.isShow = true
            this.message = message
            setTimeout(() => {
                this.message = ""
                this.isShow = false
            }, duration)
        }
    }
}
</script>

<style scoped>
    .toast {
        position: fixed;
        z-index: 999;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(0, 0, 0, 0.75);
        color: #fff;
        padding: 8px 10px;
        font-size: 15px;
        transition: all linear .3;
    }
</style>