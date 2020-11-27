<template>
    <div class="check-button" :class="{check:isChecked}">
      <img src="~assets/image/cart/tick.svg" alt="">
    </div>
</template>

<script>
    export default {
        name: "CheckButton",
      props:{
          isChecked:{
            type:Boolean,
            default : false
          }
      }
    }
</script>

<style scoped>
  .check-button{
    margin-left: 3px;
    border-radius: 50%;
    border: 2px solid #aaaaaa;
  }
  .check-button img{
    width: 10px;
    height: 10px;
  }
  .check{
    border-color: red;
    background-color: red;
  }
</style>
