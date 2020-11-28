<template>
    <div class="detail-bottom-bar">

      <div class="bar-item bar-left">
        <div>
          <i class="iconfont icon-ceshi"></i>
          <span class="text">客服</span>
        </div>
        <div>
          <i class="iconfont icon-dianpu"></i>
          <span class="text">店铺</span>
        </div>
        <div>
          <i class="iconfont icon-shoucang"></i>
          <span class="text">收藏</span>
        </div>
      </div>

      <div class="bar-item bar-right">
        <div class="cart" @click="addToCart">加入购物车</div>
        <div class="buy">购买</div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "DetailBottomBar",
      methods:{
        addToCart(){
          // console.log(11);
          this.$emit("eddCart")
        }
      }
    }
</script>

<style scoped>
  .detail-bottom-bar{
    position: fixed;
    z-index: 30;
    left: 0;
    right: 0;
    bottom: 0;
    height: 49px;
    line-height: 49px;
    background-color: white;
    display: flex;
  }
  .bar-item{
    display: flex;
    flex: 1;
    font-size: 13px;
  }
  .bar-item div{
    flex: 1;
    /*display: flex;*/
    text-align: center;
  }
  .bar-item div i{
    margin-top: -7px;
    margin-bottom: 3px;
    display:block;
    height: 15px;
  }
  /*.bar-item div:nth-of-type(3){*/
  /*  background-color: orange;*/
  /*}*/
  /*.bar-item div i{*/
  /*  position: relative;*/
  /*  left: 24%;*/
  /*  top: -20%;*/
  /*}*/
  /*.bar-item div span{*/
  /*  position: relative;*/
  /*  left: -12%;*/
  /*  top: 15%;*/
  /*}*/

  .bar-item .cart{
    background-color: greenyellow;
    color: #222222;
    text-align: center;
  }
  .bar-item .buy{
    background-color: var(--color-high-text);
    color: white;
    text-align: center;
  }

</style>
