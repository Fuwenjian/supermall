<template>
    <div>
      <Navbar>
        <div slot="left" class="back" @click="backClick">
          <img src="~assets/image/common/back.svg" alt="">
        </div>
        <div slot="center" class="title">
          <div  v-for="(item,index) in titles"
                class="title-item"
                :class="{active:currentIndex ===index}"
                @click="titleClick(index)"
          >{{item}}</div>
        </div>
      </Navbar>
    </div>
</template>

<script>
  import Navbar from "../../../components/common/navbar/Navbar";
    export default {
      name: "DetailNavBar",
      data(){
        return{
          titles:["商品","参数","评论","推荐"],
          currentIndex:0
        }
      },
      components:{
        Navbar
      },
      methods:{
        titleClick(index){
          this.currentIndex = index
        },
        backClick(){
          // this.$router.go(-1)
          this.$router.back()
        }
      }
    }
</script>

<style scoped>
  .title{
    display: flex;
    font-size: 13px;
  }
  .title-item{
    flex: 1;
  }
  .active{
    color: var(--color-high-text);
  }
  .back{
    margin-top: 5px;
  }
</style>
