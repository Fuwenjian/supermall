<template>
  <div id="app">
    <router-view/>
    <main-tab-bar/>
  </div>
</template>
<script>
  import MainTabBar from "./components/content/MainTabBar/MainTabBar";
  export default {
    name:"App",
    data(){
      return{

      }
    },
    components:{
      MainTabBar
    }
  }
</script>

<style lang="scss">
 @import "assets/css/base.css";

</style>
