<template>
    <div class="wrapper" ref="aaa">
      <div class="content">
        <button @click="aa">按钮</button>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aa</p>
        <p>aad</p>
      </div>
    </div>
</template>

<script>
  import BScroll from "better-scroll"
    export default {
        name: "List",
      // components:{
      //   BScroll
      // },
      data(){
        return{
          scroll:null
        }
      },
      mounted() {
        this.scroll = new BScroll(document.querySelector(".wrapper"),{
            probeType:3,
            pullUpLoad:true
        })
        this.scroll.on("scroll",(position)=>{
          // console.log(position);
        })
        this.scroll.on("pullingUp",()=>{
          console.log("加载更多");
        })
      },
      methods:{
          aa(){
            console.log(111)
          }
      }
    }
</script>

<style scoped>
  /*实现局部滑动*/
  .wrapper{
    height: 150px;
    background-color: #ff5777;
    /*overflow-y: scroll;*/
    overflow: hidden;
  }
</style>

