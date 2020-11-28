<template>
    <div class="toast" v-show="issShow">
      <div>{{message}}</div>
    </div>

</template>

<script>
    export default {
      name: "Toast",
      // props:{
      //     message:{
      //       type:String,
      //       default:""
      //     },
      //   show:{
      //     type:Boolean,
      //     default: false
      //   }
      // },
      data(){
        return{
          message:"",
          issShow:false
        }
      },
      methods:{
        show(message,duration = 2000){
          // console.log("-----")
          this.issShow = true
          this.message = message
          setTimeout(()=>{
            this.issShow = false
            this.message = ""
          },duration)
        }
      }
    }
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    padding: 8px 10px;
    z-index: 999;
    color: #ffffff;
    background-color: rgba(0,0,0.75);
  }
</style>
