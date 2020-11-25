<template>
  <div class="goods-item">
    <img :src="goodsItem.show.img" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">{{goodsItem.orgPrice}}</span>
      <i class="iconfont icon-shoucang"></i>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      props:{
        goodsItem:{
          type:Object,
          default(){
            return {}
          }
        }
      },
        name: "GoodsListItem",
      methods:{
        imageLoad(){
          // console.log("imageLoad")
          //事件总线  this.$bus.$emit("传递出去的函数名字")
          this.$bus.$emit("itemImageLoad")
          // console.log(this.$bus);
        }
      }
    }
</script>

<style scoped>
  .goods-item{
    width: calc((100% - 10px) / 2);
    margin-right: 10px;
    margin-top: 8px;
    /*position: relative;*/
  }
  .goods-item:nth-of-type(2n){
    margin-right: 0;
  }
  .goods-item img{
    width: 100%;
    border-radius: 5px;
  }
  .goods-info p{
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }
  .price{
    color: var(--color-high-text);
    margin-right: 10px;
  }
  .goods-info{
    font-size: 12px;
    text-align: center;
  }
  .goods-info i{
    font-size: 12px;
  }
  /*.goods-info .collect::before {*/
  /*  content: '';*/
  /*  position: absolute;*/
  /*  left: -15px;*/
  /*  top: -1px;*/
  /*  width: 14px;*/
  /*  height: 14px;*/
  /*  background: url("~assets/image/common/collect.svg") 0 0/14px 14px;*/
  /*}*/
</style>
