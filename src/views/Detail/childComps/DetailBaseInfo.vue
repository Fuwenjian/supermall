<template>
    <div v-if="Object.keys(goods).length !== 0" class="base-info">
      <div class="info-title">{{goods.title}}</div>
      <div class="info-price">
        <span class="n-price">{{goods.newPrice}}</span>
        <span class="o-price">{{goods.oldPrice}}</span>
        <span class="discount" v-if="goods.discount" :style="{backgroundColor:goods.colora}">{{goods.discount}}</span>
      </div>
      <div class="info-other">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
      </div>
      <div class="info-services">
        <span class="info-service-item"v-for="index in goods.services.length-1" :key="index">
          <img :src="goods.services[index-1].icon" alt="">
          <span>{{goods.services[index-1].name}}</span>
        </span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "DetailBaseInfo",
      props:{
          goods:{
            type:Object,
            // default() {
            //   return [];
            // }
          }
      }
    }
</script>

<style scoped>
  .base-info{
    margin-top: 15px;
    padding: 0 8px;
    color: #999999;
    border-bottom: 5px solid #f2f5f8;
  }
  .info-title{
    color: #222222;
  }
  .info-price{
    margin-top: 10px;
    align-items: center;
    display: flex;
  }
  .info-price .n-price{
    font-size: 24px;
    color: var(--color-high-text);
  }
  .info-price .o-price{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
  }

  .info-other{
    display: flex;
    margin-top: 6px;
    padding-bottom: 4px;
    border-bottom: 1px solid#DDdddd;
  }
  .info-other span{
    flex: 1;
    font-size: 12px;
  }
  .info-other span:nth-of-type(1){
    text-align: left;
  }
  .info-other span:nth-of-type(2){
    text-align: center;
  }
  .info-other span:nth-of-type(3){
    text-align: right;
  }
  .discount{
    font-size: 12px;
    color: thistle;
    margin-left: 5px;
    display: inline-block;
    height: 20px;
    line-height: 20px;
    padding: 0 11px;
    border-radius: 10px;
  }
  .info-services{
    height: 40px;
    line-height:40px;
    display: flex;
    align-items: center;
  }
  .info-services span{
    font-size: 5px;
    flex: 1;
    display: flex;
    align-items: center;
  }
  .info-service-item img{
    width: 12px;
    height:12px;
    margin-right: 5px;
  }
</style>
