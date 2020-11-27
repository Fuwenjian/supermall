<template>
    <div class="cart-list">
       <scroll class="content">
          <cart-list-item v-for="(item,index) in CartList"
                          :product="item"
                          :key="index"/>
       </scroll>
    </div>
</template>

<script>
  import {mapGetters} from "vuex"
  import Scroll from "../../../components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";
    export default {
        name: "CartList",
      computed:{
          ...mapGetters(["CartList"])
      },
      components:{
        Scroll,CartListItem
      }
    }
</script>

<style scoped>
  .content{
    position: absolute;
    left: 0;
    right: 0;
    /*background-color: red;*/
    bottom: 49px;
    top: 44px;
    overflow: hidden;
  }

</style>
