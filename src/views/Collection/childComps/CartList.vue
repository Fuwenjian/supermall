<template>
    <div class="cart-list">
<!--        <scroll class="content" ref="scroll">-->
<!--          <cart-list-item v-for="(item,index) in CartList"-->
<!--                          :product="item"-->
<!--                          :key="index"-->
<!--                          class="list"-->
<!--                          @aaa="imageLoad"-->
<!--          />-->
<!--        </scroll>-->
      <cart-list-item v-for="(item,index) in cartList"
                      :product="item"
                      :key="index"
                      class="list"
      />
      </div>

</template>

<script>
  import {mapGetters} from "vuex"
  // import Scroll from "../../../components/common/scroll/Scroll";
  import CartListItem from "./CartListItem";

    export default {
      name: "CartList",
      computed:{
          ...mapGetters(["cartList"])
      },
      components:{
        CartListItem,
      },
      methods:{

      },
    }
</script>

<style scoped>
  .content{
    position: absolute;
    left: 0;
    right: 0;
    /*background-color: red;*/
    bottom: 89px;
    top: 44px;
    overflow: hidden;
  }
  .list{
    height: 100%;
  }


</style>
