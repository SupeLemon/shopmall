<template>
    <div class="cart-buttom">
        <!-- <div class="check-all"><check-button class="button"/>选</div> -->
        <check-button class="button" :is-checked="isCheckedAll" @click.native="checkAll"/>
        <span style="margin-left:38px;margin-top:10px">全选</span>
        <div class="totalPrice">合计：<span>￥{{totalPrice.toFixed(2)}}</span></div>
        <div class="toPay" @click="toPay">去结算({{length}})</div>
    </div>
</template>

<script>
import CheckButton from "components/content/checkButton/CheckButton"
import {mapGetters} from "vuex"
export default {
    name: "CartButtom",
    components: {
        CheckButton
    },
    computed: {
        ...mapGetters({
            length: "cartChecked",
            totalPrice: "totalPrice",
            cartList: "cartList"
        }),
        isCheckedAll() {
            if(this.cartList.length) {
                //filter
                // return !(this.cartList.filter(item => !item.checked).length)
                //find
                return !this.cartList.find(item => !item.checked)
                //for循环
                // for(let item of this.cartList) {
                //     if(!item.checked) {
                //         return false
                //     }
                // }
                // return true
            }
            
        }
    },
    methods: {
        checkAll() {
            // console.log("aaa")
            if(this.isCheckedAll) {
                this.cartList.forEach(item => item.checked = false)
            }else {
                this.cartList.forEach(item => item.checked = true)
            }
        },
        toPay() {
            if(!this.isCheckedAll) {
                this.$toast.show("请选择要购买的商品哦~", 2000)
            }
        }
    }
}
</script>

<style scoped>
    .cart-buttom {
        height: 40px;
        background-color: #eee;
        position: absolute;
        right: 0;
        left: 0;
        bottom: 49px;
        display: flex;
        justify-content: space-between;
    }
    .toPay {
        background-color: red;
        color: #fff;
        width: 88px;
        line-height: 40px;
        text-align: center;
    }
    .totalPrice {
        line-height: 40px;
    }
    .totalPrice span {
        color: var(--color-high-text);
    }
    .button {
        margin-left: 15px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
</style>