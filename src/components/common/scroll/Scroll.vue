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
            probeType:this.probeType
          })
        //监听滚动的位置
        this.scroll.on("scroll",(position)=>{
          // console.log(position);
          this.$emit("scroll",position)
        })
      },
      methods:{
        aa(x,y,time){
          this.scroll.scrollTo(x,y,time)
        }
      }
    }
</script>

<style scoped>

</style>
