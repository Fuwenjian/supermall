<template>
    <div class="goods">
      <goods-list-item v-for="item in goods" :goods-item="item"/>
<!--      {{goods}}-->
    </div>
</template>

<script>
  import GoodsListItem from "./GoodsListItem";
    export default {
      props:{
        goods:{
          type:Array,
          default(){
            return []
          }
        }
      },
      // props:["goods"],
        name: "GoodsList",
      components:{
        GoodsListItem
      }
    }
</script>

<style scoped>
  .goods{
    justify-content: space-around;
    display: flex;
    flex-wrap: wrap;
    padding: 5px;
  }
</style>
