<template>
    <div id="home">
<!--      <nav-bar></nav-bar>-->
      <Navbar class="home-nav"><div slot="center">购物街</div></Navbar>

      <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll">
        <home-swiper :banners="banners"/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <!--      原封不动的就不加： 把她想成字符串，这里是想穿进去数组所以要用：-->
        <tab-control class="tab-control"
                     :titles="['流行','新款','精选']"
                     @tabClick="tabClick"/>
        <goods-list  :goods="showGoods"/>
      </scroll>

<!--      组件能不能直接添加单击事件？   不能 需要加.native-->
<!--      <back-top @click="backTopClick"/>-->
      <back-top @click.native="backTopClick" v-show="isShow"/>
    </div>
</template>

<script>
    import Navbar from "../../components/common/navbar/Navbar";
    import {getHomeMultidata,getHomeGoods} from "../../network/home";
    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";
    import TabControl from "../../components/content/tabControl/TabControl";
    import GoodsList from "../../components/content/goods/GoodsList";
    import BackTop from "../../components/content/backTop/BackTop";

    // import BScroll from "better-scroll"
    import Scroll from "../../components/common/scroll/Scroll";
    export default {
        name: "Home",
        data(){
          return{
            banners:[],
            recommends:[],
            goods:{
              'pop':{page:0,list:[]},
              'new':{page:0,list:[]},
              'sell':{page:0,list:[]}
            },
            currentType:"pop",
            scroll:null,
            isShow:false
          }
        },
      computed:{
        showGoods(){
          return this.goods[this.currentType].list
        }
      },
        components:{
          Navbar,HomeSwiper,RecommendView,
          FeatureView,TabControl,GoodsList,
          Scroll,BackTop
        },
        created() {
            this.getHomeMultidata()
            this.getHomeGoods("pop")
            this.getHomeGoods("new")
            this.getHomeGoods("sell")
        },
      methods:{
          /**事件监听相关的方法
           */
        // tabClick(index){
        //     console.log(index);
        //   },
        tabClick(index){
            console.log(index);
            switch (index) {
                case 0:
                  this.currentType = 'pop'
                    break
                case 1:
                  this.currentType = 'new'
                  break
                case 2:
                  this.currentType = 'sell'
                  break
              }
          },
        backTopClick(){
          // console.log(111)
          // console.log(this.$refs.scroll.message);
          this.$refs.scroll.aa(0,0,2000)
        },

        contentScroll(position){
          // console.log(position);
          this.isShow = (-position.y) > 1000
        },
           /** **/
        getHomeMultidata(){
          getHomeMultidata().then(res =>{
            // console.log(res);
            // this.result = res
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
            // console.log(this.banners);
            // console.log(this.recommends);
          })
        },
        getHomeGoods(type){
          const page = this.goods[type].page + 1
          getHomeGoods(type,page).then(res=>{
            // console.log(res);
            // for (let n of res.data.list) {
            //   this.goods[type].list.push(n)
            // }
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
          })
        }
      }
    }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #f6f6f6;

    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }

  /*快速设置 距离顶部距离 没达到44px位置之前 达到之后将sticky改成fixed*/
  .tab-control{
    position: sticky;
    top: 43px;
    background-color: white;
    z-index: 20;
  }
 /*.wrapper{*/
 /*  !*height: calc(100% - 93px);*!*/
 /*  overflow: hidden;*/
 /*  height: 1200px;*/
 /*  !*background-color: red;*!*/
 /*}*/
  .content{
    /*height: 300px;*/
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
    left: 0;
    right: 0;
    padding-bottom: 300px;
  }
</style>
