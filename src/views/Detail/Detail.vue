<template>
  <div id="detail">
<!--    :current-index="currentIndex" @change="change"-->
    <detail-nav-bar class="nav-aa" @titleClick="titleClick" ref="nav" ></detail-nav-bar>
    <scroll class="content" ref="scroll" @scroll="contentScroll" :probe-type="3">
      <detail-swipper :top-images="TopImages"></detail-swipper>
<!--      {{$store.state.cartList}}-->
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info :detail-info="detailInfo"  @imageLoad="imageLoad"></detail-goods-info>
      <detail-pramas-info :param-info="paramInfo" ref="pramas"></detail-pramas-info>
      <detail-comment-info :comment-info="commentInfo" ref="comment"></detail-comment-info>
      <goods-list :goods="recommends" ref="goods"></goods-list>
    </scroll>

    <detail-bottom-bar @eddCart="eddCart"></detail-bottom-bar>

    <back-top @click.native="backTopClick" v-show="isShow"/>
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
  import DetailBottomBar from "./childComps/DetailBottomBar";

  import {getDetail,GoodInfo,Shop,GoodsParam,getRecommend} from "../../network/detail"
  import Scroll from "../../components/common/scroll/Scroll";
  import {debounce} from "../../common/utils";
  import {itemListenerMixin,backTopMixin} from "common/mixin"

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
            currentIndex :0,
            // isShow:false
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
          //评论评论数据
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
        DetailGoodsInfo,DetailPramasInfo,DetailCommentInfo,GoodsList,DetailBottomBar,
      },
     methods:{
       // change(aa){
       //   this.currentIndex = aa
       // },
       // backTopClick(){
       //   // console.log(111)
       //   // console.log(this.$refs.scroll.message);
       //   this.$refs.scroll.aa(0,0,2000)
       //   // this.$refs.scroll.scroll.scrollTo(0,0)
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
         this.themeTopYs.push(Number.MAX_VALUE)
         // console.log(this.themeTopYs);
       },
       titleClick(index) {
         // console.log(index);
         this.$refs.scroll.aa(0,-this.themeTopYs[index],1000)
       },
       contentScroll(position){
         const positionY = -position.y
         this.isShow = (-position.y) > 1000
         // for (let i in this.themeTopYs) {
         //   //这样出来的i是一个String
         //   // console.log(i + 1);
         //   //parseInt(i)转化成Number
         //   if (positionY > this.themeTopYs[parseInt(i)] && positionY<this.themeTopYs[parseInt(i)+1]){
         //     console.log(i);
         //   }
         // }

         // console.log(Number.MAX_VALUE);

         let length = this.themeTopYs.length

         for (let i = 0; i < length - 1 ; i++) {

           if (this.currentIndex !== i && (positionY >= this.themeTopYs[i] && positionY < this.themeTopYs[i+1])){
              this.currentIndex = i
              this.$refs.nav.currentIndex = this.currentIndex
             // console.log(this.currentIndex);
           }
           // console.log(i);
           //最后一个给不到
           // if(positionY > this.themeTopYs[i] && positionY<this.themeTopYs[i+1]){
           //   // console.log(i);
           // }

           // if(this.currentIndex !== i && (( i< length-1 && positionY >= this.themeTopYs[i] && positionY<this.themeTopYs[i+1])||(i === length-1)&& positionY >= this.themeTopYs[i])){
           //   console.log(i)
           //   this.currentIndex = i
           //   this.$refs.nav.currentIndex = this.currentIndex
           // }
         }
       },
       eddCart(){
         console.log("加入购物车成功");
         //1.获取商品信息（购物车里面需要的）
         const product = {}
         product.img = this.TopImages[0]
         product.title = this.goods.title
         product.desc =this.detailInfo.desc
         product.newprice = this.goods.realprice
         //iid一定要传因为这是 这个商品的唯一标识
         product.iid = this.iid
         //2.将商品数据保存到购物车
         // this.$store.commit("addCart",product)
         this.$store.dispatch("addCart",product)
       }
     },
      mixins:[itemListenerMixin,backTopMixin],
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
      padding-bottom: 49px;
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
