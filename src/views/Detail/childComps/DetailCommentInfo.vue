<template>
  <div v-if="Object.keys(commentInfo).length !==0" class="aa">
    <div class="info-header">
      <div class="header-title left">用户评价</div>
      <div class="header-more right">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="info-user">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="info-detail">
      <p>{{commentInfo.content}}</p>
      <div class="info-other">
        <span class="data left">{{commentInfo.created | showDate}}</span>
        <span class="right">{{commentInfo.style}}</span>
      </div>

      <div class="info-imgs">
        <div class="bb"v-for="(item,index) in commentInfo.images">
          <img :src="item"  alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from "common/utils"
    export default {
      name: "DetailCommentInfo",
      props:{
        commentInfo:{
          type:Object,
          default(){
            return {}
          }
        }
      },
      filters:{
        showDate(value){
          //1.将时间戳转化成Data对象
          const data = new Date(value * 1000)
          //将data进行格式化
          return formatDate(data,'yyyy/MM/dd hh:mm:ss')
        }
      }
    }
</script>

<style scoped>
  .aa{
    padding: 0 15px;
  }
  .info-user{
    clear: both;
    display: flex;
    align-items: center;
  }
  .info-header{
    height: 25px;
    line-height: 25px;
    font-size: 14px;
    /*padding: 0 10px;*/
  }
  .info-user img{
    width: 40px;
    height: 40px;
    margin-right: 20px;
    /*margin-left: 10px;*/
  }
  .info-detail p{
    color: var(--color-high-text);
    margin: 10px 0;
    font-size: 15px;
  }
  .info-other{
    /*padding: 0 10px;*/
    height: 20px;
    line-height: 20px;
  }
  .info-detail span:nth-of-type(1){
    font-size: 13px;
    /*margin-left: 20px;*/
  }
  .info-detail span:nth-of-type(2){
      font-size: 13px;
    /*margin-left: 20px;*/
  }
  .info-imgs {
    /*background-color: red;*/
    display: flex;
  }
  .bb{
    flex: 1;
    /*margin-right: 10px;*/
  }
  .info-imgs img{
    width: 100%;
  }
  /*.bb:nth-of-type(3){*/
  /*  margin-right: 0;*/
  /*}*/
  .bb:nth-of-type(2){
    margin-left: 10px;
  }
  .bb:nth-of-type(3){
    margin-left: 10px;
  }

</style>
