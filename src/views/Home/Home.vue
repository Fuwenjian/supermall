<template>
    <div id="home">
<!--      <nav-bar></nav-bar>-->
      <Navbar class="home-nav"><div slot="center">购物街</div></Navbar>
      <tab-control class="tab-control"
                   :titles="['流行','新款','精选']"
                   @tabClick="tabClick"
                   ref="tabControl1"
                   :class="{fixed:isTabFixed}"
                   v-show="isTabFixed"
      />
      <scroll class="content" ref="scroll"
              :probe-type="3"
              @scroll="contentScroll"
              :pull-up-load="true"
              @pullingUp="loadMore"
      >
        <home-swiper :banners="banners"   @swipperImageLoad="swipperImageLoad"/>
        <recommend-view :recommends="recommends"/>
        <feature-view/>
        <!--      原封不动的就不加： 把她想成字符串，这里是想穿进去数组所以要用：-->
        <tab-control :titles="['流行','新款','精选']"
                     @tabClick="tabClick"
                     ref="tabControl2"
                     :class="{fixed:isTabFixed}"
        />
        <goods-list  :goods="showGoods"/>
      </scroll>

<!--      组件能不能直接添加单击事件？   不能 需要加.native-->
<!--      <back-top @click="backTopClick"/>-->
      <back-top @click.native="backTopClick" v-show="isShow"/>
    </div>
</template>

<script>
    import Navbar from "../../components/common/navbar/Navbar";
    import HomeSwiper from "./childComps/HomeSwiper";
    import RecommendView from "./childComps/RecommendView";
    import FeatureView from "./childComps/FeatureView";
    import TabControl from "../../components/content/tabControl/TabControl";
    import GoodsList from "../../components/content/goods/GoodsList";
    import BackTop from "../../components/content/backTop/BackTop";
    import Scroll from "../../components/common/scroll/Scroll";

    import {debounce} from "common/utils"
    import {getHomeMultidata,getHomeGoods} from "../../network/home";
    import {itemListenerMixin} from "common/mixin"

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
            isShow:false,
            tabOffsetTop:0,
            isTabFixed:false,
            saveY:0,
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
            //请求所有数据
            this.getHomeMultidata()
            //请求对应的商品数据
            this.getHomeGoods("pop")
            this.getHomeGoods("new")
            this.getHomeGoods("sell")

        },

        //混入来代替重复内容 区别 类的继承 混入为对象
        mixins:[itemListenerMixin],
        mounted() {
        //  const refresh = debounce(this.$refs.scroll.refresh,200)
        // //监听图片照片中item加载完成
        // //事件总线  this.$bus.$on("传递出来的函数名字")
        //   this.itemImgListener =()=>{
        //     // console.log(1111)
        //     // 因为会频繁的做这个刷新操作需要进行防抖处理
        //     this.$refs.scroll && refresh()
        //   }
        //
        //   this.$bus.$on("itemImageLoad",this.itemImgListener)
      },
        methods:{
          /**事件监听相关的方法
           */
        tabClick(index){
            // console.log(index);
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
            this.$refs.tabControl1.currentIndex = index
            this.$refs.tabControl2.currentIndex = index
          },
        backTopClick(){
          // console.log(111)
          // console.log(this.$refs.scroll.message);
          this.$refs.scroll.aa(0,0,2000)
          // this.$refs.scroll.scroll.scrollTo(0,0)
        },
        contentScroll(position){
          // console.log(position);
          //判断BackTop是否显示
          this.isShow = (-position.y) > 1000
          //决定tabControl是否吸顶
          this.isTabFixed = (-position.y) > this.tabOffsetTop
        },
        loadMore(){
          this.getHomeGoods(this.currentType)
          //
          // // 刷新可视高度
          // this.$refs.scroll.scroll.refresh()
        },
        swipperImageLoad(){
          // 组件对象没有offsetTop，但是组件对应的模板(元素)拥有
          // console.log(this.$refs.tabControl.offsetTop);
          //所有的组件都有一个$el: 用于获取组件中的元素
          // console.log(this.$refs.tabControl)
          // console.log(this.$refs.tabControl.$el)
          // console.log(this.$refs.tabControl.$el.offsetTop)
          this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
          // console.log(this.tabOffsetTop);
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

            this.$refs.scroll.finishPullUp()
          })
        }
      },
        destroyed() {
          // console.log("Home destroy")
        },
        activated() {
          // console.log('activated');
          this.$refs.scroll.aa(0,this.saveY,0)
          this.$refs.scroll.refresh()
        },
        deactivated() {
          // console.log('deactivated');
          this.saveY = this.$refs.scroll.getScrollY()
          this.$bus.$off("itemImageLoad",this.itemImgListener)
        }
    }
</script>

<style scoped>
  #home{
    /*padding-top: 44px;*/
    height: 100vh;
    position: relative;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #f6f6f6;

    /*position: fixed;*/
    /*left: 0;*/
    /*right: 0;*/
    /*top: 0;*/
    /*z-index: 9;*/
  }

  /*快速设置 距离顶部距离 没达到44px位置之前 达到之后将sticky改成fixed(吸顶效果)*/
  .tab-control{
    /*position: sticky;*/
    /*top: 43px;*/
    /*background-color: white;*/
    /*z-index: 20;*/
    position: relative;
    z-index: 9;
  }
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
  .fixed{
    position: fixed;
    left: 0;
    right: 0;
    top: 44px;
    background-color: white;
  }
</style>
