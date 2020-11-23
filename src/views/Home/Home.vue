<template>
    <div id="home">
<!--      <nav-bar></nav-bar>-->
      <Navbar class="home-nav"><div slot="center">购物街</div></Navbar>
    </div>
</template>

<script>
    import Navbar from "../../components/common/navbar/Navbar";
    import {getHomeMultidata} from "../../network/home";

    export default {
        name: "Home",
        data(){
          return{
            result:null
          }
        },
        components:{
          Navbar
        },
        created() {
          getHomeMultidata().then(res =>{
            console.log(res);
            this.result = res
          })
        }
    }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: #f6f6f6;
  }

</style>
