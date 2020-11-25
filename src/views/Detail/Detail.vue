<template>
  <div id="detail">
    <detail-nav-bar class="nav-aa"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swipper :top-images="TopImages"></detail-swipper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></detail-goods-info>
      <detail-pramas-info :param-info="paramInfo"></detail-pramas-info>
    </scroll>
  </div>
</template>

<script>
  import DetailNavBar from "./childComps/DetailNavBar";
  import DetailSwipper from "./childComps/DetailSwipper";
  import DetailBaseInfo from "./childComps/DetailBaseInfo";
  import DetailShopInfo from "./childComps/DetailShopInfo";
  import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
  import DetailPramasInfo from "./childComps/DetailPramasInfo";

  import {getDetail,GoodInfo,Shop,GoodsParam} from "../../network/detail"
  import Scroll from "../../components/common/scroll/Scroll";

    export default {
        name: "Detail",
      data(){
          return{
            iid:null,
            TopImages:null,
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{}
          }
      },
      created() {
          //保存传入的id
          this.iid = this.$route.params.id
        //根据id请求详细数据
        // console.log(getDetail(this.iid));
        getDetail(this.iid).then(res =>{
          console.log(res);
          const data = res.result
          //获取商品轮播图
          this.TopImages = data.itemInfo.topImages
          //获取商品数据信息
          this.goods = new GoodInfo(data.itemInfo,data.columns,data.shopInfo.services)
          //创建店铺信息
          this.shop = new Shop(data.shopInfo)
          //商品详情数据
          this.detailInfo = data.detailInfo
          //商品参数数据
          this.paramInfo = new GoodsParam(data.itemParams.info,data.itemParams.rule)
        })
      },
      components:{
        DetailNavBar,DetailSwipper,DetailBaseInfo,DetailShopInfo,Scroll,DetailGoodsInfo,DetailPramasInfo
      },
     methods:{
       imageLoad(){
         this.$refs.scroll.refresh()
       }
     }
    }
</script>

<style scoped>
    #detail{
      position: relative;
      z-index: 9;
      background-color: #ffffff;
      height: 100vh;
    }
    .content{
      height: calc(100% - 44px);
      overflow: hidden;
    }
  .nav-aa{
    position: relative;
    background-color: #ffffff;
  }
</style>
