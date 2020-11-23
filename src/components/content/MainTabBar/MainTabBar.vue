<template>
    <tab-bar>
        <tab-bar-item path = "/home" activeColor="cornflowerblue">
            <img slot="item-icon" src="~assets/image/TabBar/ficon01.png" alt="">
            <img slot="item-icon-active" src="~/assets/image/TabBar/icon01.png" alt="">
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path = "/list" activeColor="cornflowerblue">
            <img slot="item-icon" src="~/assets/image/TabBar/ficon02.png" alt="">
            <img slot="item-icon-active" src="~/assets/image/TabBar/icon02.png" alt="">
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item  path = "/Collection" activeColor="cornflowerblue">
            <img slot="item-icon" src="~/assets/image/TabBar/ficon03.png" alt="">
            <img slot="item-icon-active" src="~/assets/image/TabBar/icon03.png" alt="">
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item  path = "/MY" activeColor="cornflowerblue">
            <img slot="item-icon" src="~/assets/image/TabBar/ficon04.png" alt="">
            <img slot="item-icon-active" src="~/assets/image/TabBar/icon04.png" alt="">
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</template>

<script>
    import TabBar from "../../common/tabbar/TabBar";
    import TabBarItem from "../../common/tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
        data(){
            return{
                categories:""
            }
        },
        components:{
            TabBar,TabBarItem
        }
    }
</script>

<style scoped>

</style>
