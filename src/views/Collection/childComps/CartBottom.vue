<template>
  <div class="cart-bottom">
   <div class="check-content">
      <div class="a"><check-button  class="check-btn" :is-checked="isSelectAll" @click.native="allClick"/></div>
      <div>全选</div>
   </div>
    <div class="price">
      合计:{{totlePrice}}
    </div>

    <div class="caculate" @click="calcClick">
        去结算:{{checkLength}}
    </div>
  </div>
</template>

<script>
  import CheckButton from "../../../components/content/checkButton/CheckButton";
  import {mapGetters} from "vuex"
    export default {
      name: "CartBottom",
      components:{
        CheckButton
      },
      computed:{
        // totlePrice(){
        //   return '￥' +this.$store.state.cartList.filter(item =>{
        //     return item.checked
        //   }).reduce((preValue,item)=>{
        //     return preValue +item.newprice * item.count
        //   },0).toFixed(2)
        // },
        // checkLength(){
        //   return this.$store.state.cartList.filter(item => item.checked).length
        // }
        ...mapGetters(["cartList","Cartlength"]),
        totlePrice(){
          return "￥" + this.cartList.filter(item =>{
            return item.checked
          }).reduce((preValue,item)=>{
            return preValue + item.newprice * item.count
          },0).toFixed(2)
        },
        checkLength(){
          return this.cartList.filter(item => item.checked).length
        },
        isSelectAll(){
          if(this.cartList.length === 0) return  false
          // return !(this.cartList.filter(item => !item.checked).length)
          return !this.cartList.find(item => !item.checked)
        }
      },
      methods:{
        allClick(){
          // console.log("dianjile")
          if(this.isSelectAll){
            this.cartList.forEach(item =>item.checked = false)
          }else {
            this.cartList.forEach(item =>item.checked = true)
          }
        },
        calcClick(){
          if(!this.isSelectAll){
            this.$toast.show("请选择购买的商品",2000)
          }

        }
      }
    }
</script>

<style scoped>
  .cart-bottom{
    height: 40px;
    background-color: #eeeeee;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 49px;
    line-height: 40px;
    display: flex;
  }
  .check-content{
    display: flex;
    align-items: center;
    width: 25%;
    font-size: 14px;
    padding-left: 10px;
  }
  .check-btn{
    margin-right: 5px;
    width: 18px;
    height: 18px;
    line-height: 15px;
    text-align: center;
  }
  .price{
    /*background-color: red;*/
    flex: 1;
    font-size: 14px;
    /*text-align: left;*/
    padding-left: 10px;
  }
  .caculate{
    width: 30%;
    text-align: center;
    /*padding: 0 15px;*/
    color: white;
    background-color: darkorange;
  }

</style>
