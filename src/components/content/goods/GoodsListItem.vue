<template>
  <div class="goods-item" @click="itemClick">
    <img :src="showImage" alt="" @load="imageLoad">
    <div class="goods-info">
      <p>{{goodsItem.title}}</p>
      <span class="price">
<!--        {{goodsItem.orgPrice}}-->
        {{price}}
      </span>
      <i class="iconfont icon-shoucang"></i>
      <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
    export default {
      // props:["goodsItem"],
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
          // console.log(this.goodsItem.iid);
        },
        itemClick(){
          console.log("跳转到详情页")

          this.$router.push("/detail/"+this.goodsItem.iid)

          //这个为什么不行呢？
          // this.$router.push({
          //   path:"/Detail",
          //   query:{
          //     id: this.goodsItem.iid
          //   }
          // })

      }
      },
      computed:{
        //这里为什么换个顺序就不行了呢
        showImage(){
          return  this.goodsItem.image || this.goodsItem.show.img
        },
        price(){
          return this.goodsItem.orgPrice || '￥'  +this.goodsItem.price
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
