import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import("../views/Home/Home")
const Collection = ()=>import("../views/Collection/Collection")
const MY = ()=>import("../views/My/MY")
const List = ()=>import("../views/List/List")


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
    path:"/Collection",
    component:Collection
  },
  {
    path:"/MY",
    component:MY
  },
  {
    path:"/List",
    component:List
  }
]

const router = new VueRouter({
  routes,
  mode:"history"
})

export default router
