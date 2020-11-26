<template>
  <div v-if="Object.keys(commentInfo).length !==0">
<!--    {{commentInfo}}-->
<!--    {{commentInfo.created | showDate}}-->
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

</style>
