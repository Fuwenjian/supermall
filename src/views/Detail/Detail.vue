<template>
  <div id="detail">
    <detail-nav-bar class="nav-aa"></detail-nav-bar>
    <scroll class="content" ref="scroll">
      <detail-swipper :top-images="TopImages"></detail-swipper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo" ></detail-goods-info>
      <detail-pramas-info :param-info="paramInfo"></detail-pramas-info>
      <detail-comment-info :comment-info="commentInfo"></detail-comment-info>
      <goods-list :goods="recommends"></goods-list>
<!--      @imageLoad="imageLoad"-->
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
  import DetailCommentInfo from "./childComps/DetailCommentInfo";
  import GoodsList from "../../components/content/goods/GoodsList";

  import {getDetail,GoodInfo,Shop,GoodsParam,getRecommend} from "../../network/detail"
  import Scroll from "../../components/common/scroll/Scroll";
  import {debounce} from "../../common/utils";
  import {itemListenerMixin} from "common/mixin"

  export default {
        name: "Detail",
      data(){
          return{
            iid:null,
            TopImages:null,
            goods:{},
            shop:{},
            detailInfo:{},
            paramInfo:{},
            commentInfo:{},
            recommends:[]
          }
      },
      created() {
          //保存传入的id
          this.iid = this.$route.params.id
        //根据id请求详细数据
        // console.log(getDetail(this.iid));
        getDetail(this.iid).then(res =>{
          const data = res.result
          // console.log(data);
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
          // console.log(this.paramInfo);
          //评论信息数据
          if(data.rate.cRate !==0){
              this.commentInfo = data.rate.list[0]
          }
          // console.log(this.commentInfo);
        })
        getRecommend().then(res=>{
          // console.log(res);
          this.recommends = res.data.list
          console.log(this.recommends);
        })
      },
      components:{
        DetailNavBar,DetailSwipper,DetailBaseInfo,DetailShopInfo,Scroll,
        DetailGoodsInfo,DetailPramasInfo,DetailCommentInfo,GoodsList
      },
     // methods:{
     //   imageLoad(){
     //     this.$refs.scroll1.refresh()
     //     console.log("主页加载")
     //   }
     // },
      mixins:[itemListenerMixin],
      mounted() {
        // const refresh = debounce(this.$refs.scroll1.refresh,200)
        // this.itemImgListener = ()=>{
        //   refresh()
        // }
        // this.$bus.$on("itemImageLoad",this.itemImgListener)
      },
     destroyed() {
       this.$bus.$off("itemImageLoad",this.itemImgListener)
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
