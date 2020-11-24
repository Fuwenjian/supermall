<template>
    <div class="recomond">
      <div v-for="item in recommends" class="recomond-item">
        <a :href="item.link">
          <img :src="item.image" alt="">
         <p>{{item.title}}</p>
        </a>
      </div>
    </div>
</template>

<script>
    export default {
      name: "RecommendView",
      props:{
        recommends:{
          tupe:Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style scoped>
  .recomond{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 10px;
    padding: 15px 0 30px;
    /*box-sizing: border-box;*/
    border-bottom: 8px solid #eeeeee;
  }
  .recomond-item{
    flex: 1;
  }
  .recomond-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>
