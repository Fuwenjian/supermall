<template>
  <div id="detail">
<!--    :current-index="currentIndex" @change="change"-->
    <detail-nav-bar class="nav-aa" @titleClick="titleClick" ref="nav" ></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probeType="3">
      <detail-swipper :top-images="TopImages"></detail-swipper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"  @imageLoad="imageLoad"></detail-goods-info>

      <detail-pramas-info :param-info="paramInfo" ref="pramas"></detail-pramas-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>

      <goods-list :goods="recommends" ref="goods"></goods-list>
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
            recommends:[],
            themeTopYs:[],
            currentIndex :0
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
          // console.log(this.recommends);
        })
      },
      components:{
        DetailNavBar,DetailSwipper,DetailBaseInfo,DetailShopInfo,Scroll,
        DetailGoodsInfo,DetailPramasInfo,DetailCommentInfo,GoodsList
      },
     methods:{
       // change(aa){
       //   this.currentIndex = aa
       // },
       imageLoad(){
         this.$refs.scroll.refresh()
         console.log("主页加载")
         // this.$nextTick(()=>{
         //   this.themeTopYs = []
         //   this.themeTopYs.push(0)
         //   this.themeTopYs.push(this.$refs.pramas.$el.offsetTop)
         //   this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
         //   this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
         //   console.log(this.themeTopYs);
         // })
         this.themeTopYs = []
         this.themeTopYs.push(0)
         this.themeTopYs.push(this.$refs.pramas.$el.offsetTop)
         this.themeTopYs.push(this.$refs.comment.$el.offsetTop)
         this.themeTopYs.push(this.$refs.goods.$el.offsetTop)
         console.log(this.themeTopYs);
       },
       titleClick(index) {
         console.log(index);
         this.$refs.scroll.aa(0,-this.themeTopYs[index],1000)
       },
       contentScroll(position){
         const positionY = -position.y
         // for (let i in this.themeTopYs) {
         //   //这样出来的i是一个String
         //   // console.log(i + 1);
         //   //parseInt(i)转化成Number
         //   if (positionY > this.themeTopYs[parseInt(i)] && positionY<this.themeTopYs[parseInt(i)+1]){
         //     console.log(i);
         //   }
         // }
         for (let i = 0; i <this.themeTopYs.length ; i++) {
           let length = this.themeTopYs.length
           // console.log(i);
           //最后一个给不到
           // if(positionY > this.themeTopYs[i] && positionY<this.themeTopYs[i+1]){
           //   // console.log(i);
           // }
           if(this.currentIndex !== i && (( i< length-1 && positionY >= this.themeTopYs[i] && positionY<this.themeTopYs[i+1])||(i === length-1)&& positionY >= this.themeTopYs[i])){
             console.log(i)
             this.currentIndex = i
             this.$refs.nav.currentIndex = this.currentIndex
           }
         }
       }
     },
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
