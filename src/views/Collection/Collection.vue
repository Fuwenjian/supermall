<template>
    <div class="collection">
<!--      第一种结构-->
<!--      <Navbar class="nav-bar"><div slot="center">购物车({{Cartlength}})</div></Navbar>-->
<!--      第二种结构-->
      <Navbar class="nav-bar"><div slot="center">购物车({{length}})</div></Navbar>

      <cart-list></cart-list>

      <cart-bottom></cart-bottom>
    </div>
</template>

<script>
  import Navbar from "../../components/common/navbar/Navbar";
  import {mapGetters} from "vuex"
  import CartList from "./childComps/CartList";
  import CartBottom from "./childComps/CartBottom";

  // mapGetters仅仅是将store中的getter映射到局部计算属性(局部的意思是再哪里用那个局部就是哪里)
    export default {
      name: "Collection",
      components:{
        Navbar,CartList,CartBottom
      },
      computed:{
        //第一种结构,直接传你过来时候的原来的名字
        // ...mapGetters(['Cartlength'])
        //key是想要改成的名字 value是原来过来的名字
        ...mapGetters({
          length:'Cartlength'
        })
      }
    }
</script>

<style scoped>
  .nav-bar{
    background-color: var(--color-high-text);
    color: white;
    font-weight: 700;
    /*position: relative;*/
  }
</style>
