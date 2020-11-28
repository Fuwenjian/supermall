<template>
    <div class="collection">
<!--      第一种结构-->
<!--      <Navbar class="nav-bar"><div slot="center">购物车({{Cartlength}})</div></Navbar>-->
<!--      第二种结构-->
      <Navbar class="nav-bar"><div slot="center">购物车({{length}})</div></Navbar>

<!--      <cart-list></cart-list>-->
      <scroll class="content" ref="scroll">
        <cart-list></cart-list>
      </scroll>
      <cart-bottom></cart-bottom>
    </div>
</template>

<script>1
  import Navbar from "../../components/common/navbar/Navbar";
  import {mapGetters} from "vuex"
  import CartList from "./childComps/CartList";
  import CartBottom from "./childComps/CartBottom";

  import Scroll from "../../components/common/scroll/Scroll";

  // mapGetters仅仅是将store中的getter映射到局部计算属性(局部的意思是再哪里用那个局部就是哪里)
    export default {
      name: "Collection",
      components:{
        Navbar,CartList,CartBottom,Scroll
      },
      computed:{
        //第一种结构,直接传你过来时候的原来的名字
        // ...mapGetters(['Cartlength'])
        //key是想要改成的名字 value是原来过来的名字
        ...mapGetters({
          length:'Cartlength'
        })
      },
      activated() {
        //活跃状态更新高度
        this.$refs.scroll.refresh()
        // console.log(this.$refs.scroll.scroll.scrollerHeight);
      },
      // created() {
      //   console.log("created")
      // },
      // mounted() {
      //   console.log("mounted")
      // },
      // updated() {
      //   console.log("更新了")
      //   // console.log(this.$refs.scroll.scroll.scrollerHeight);
      // }
    }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-high-text);
    color: white;
    font-weight: 700;
    /*position: relative;*/
  }
  .content{
    position: absolute;
    left: 0;
    right: 0;
    top: 44px;
    bottom: 89px;
    overflow-y: hidden;
  }
</style>
