<template>
    <div v-if="Object.keys(detailInfo).length!== 0" class="goods-info">
      <div class="info-desc clear-fix">
        <div class="start"></div>
        <div class="desc">{{detailInfo.desc}}></div>
        <div class="end"></div>
      </div>

      <div class="info-key">{{detailInfo.detailImage[0].key}}</div>

      <div class="info-list">
        <img v-for="(item,index) in detailInfo.detailImage[0].list" :key="index" alt=""
             :src="item" @load="imgLoad">
      </div>
    </div>
</template>

<script>
    export default {
      name: "DetailGoodsInfo",
      props:{
        detailInfo:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      data(){
          return{
            counter:0,
            imagesLength:0
          }
      },
      // watch:{
      //     //watch监听某一个属性的变化  我们用来监听detaiInfo
      //     detaiInfo(){
      //       this.imagesLength = this.detailInfo.detailImage[0].list.length
      //     }
      // },
      methods:{
          imgLoad(){
            // this.counter +=1
            // console.log(this.detailInfo);
            // this.$emit("imageLoad")
            //先加在对比
            // console.log(this.imagesLength);
            // console.log(this.detailInfo.detailImage[0].list.length);
            if (++this.counter == this.detailInfo.detailImage[0].list.length){
              console.log("图片加载完了");
              this.$emit("imageLoad")
            }
          }
      }
    }
</script>

<style scoped>
  .info-list img{
    width: 100%;
  }
  .info-key{
    font-size: 15px;
    height: 30px;
    line-height: 30px;
    font-weight: bold;
  }
  .info-desc{
    color: red;
    font-size: 12px;
    /*height: 20px;*/
    /*line-height: 20px;*/
    margin-top: 20px;
  }

</style>
