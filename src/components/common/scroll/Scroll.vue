<template>
    <div class="wrapper" ref="wrapper">
      <div>
        <slot></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from"better-scroll"
    export default {
      name: "Scroll",
      props:{
        probeType: {
          type:Number,
          default:0
        },
        pullUpLoad:{
          type:Boolean,
          default: false
        }
      },
      data(){
          return {
              scroll:null,
            message:"hahhah"
          }
      },
      mounted() {
          this.scroll = new BScroll(this.$refs.wrapper,{
            click:true,
            // 是否需要获取位置
            probeType:this.probeType,
            // 是否需要监听
            pullUpLoad:this.pullUpLoad
          })
        //监听滚动的位置
        this.scroll.on("scroll",(position)=>{
          // console.log(position);
          this.$emit("scroll",position)
        })
          //调用refresh()来加载更多
          // this.scroll.refresh()
        //监听上拉事件
        if(this.pullUpLoad){
          this.scroll.on("pullingUp",()=>{
            console.log("上啦加载更多");
            this.$emit("pullingUp")
          })
        }
        // this.scroll.scrollTo(0,0,3000)
      },
      methods:{
        aa(x,y,time){
          this.scroll && this.scroll.scrollTo(x,y,time)
        },
        refresh(){
          // console.log("---");
          this.scroll && this.scroll.refresh()
        },
        finishPullUp(){
          this.scroll.finishPullUp()
        },
        getScrollY(){
          return this.scroll ? this.scroll.y:0
        }
      }
    }
</script>

<style scoped>

</style>
