import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import("../views/Home/Home")
const Collection = ()=>import("../views/Collection/Collection")
const MY = ()=>import("../views/My/MY")
const List = ()=>import("../views/List/List")
const Detail =()=>import("../views/Detail/Detail")


Vue.use(VueRouter)

const routes = [
  {
    path:"",
    redirect: '/home'
  },
  {
    path:"/home",
    component:Home
  },
  {
    path:"/collection",
    component:Collection
  },
  {
    path:"/my",
    component:MY
  },
  {
    path:"/list",
    component:List
  },
  // 动态路由
  {
    path:"/detail/:id",
    component:Detail
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
