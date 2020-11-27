import{debounce} from "./utils";
import BackTop from "../components/content/backTop/BackTop";


export const itemListenerMixin ={
  data(){
    return{
      itemImgListener:null
    }
  },
  mounted(){
    const refresh = debounce(this.$refs.scroll.refresh,200)
    //监听图片照片中item加载完成
    //事件总线  this.$bus.$on("传递出来的函数名字")
    this.itemImgListener =()=>{
      // console.log(1111)
      // 因为会频繁的做这个刷新操作需要进行防抖处理
      this.$refs.scroll && refresh()
    }
    this.$bus.$on("itemImageLoad",this.itemImgListener)
    // console.log("我是混入的内容")
  }
}

export const backTopMixin = {
  components:{
    BackTop
  },
  data(){
    return{
      isShow:false
    }
  },
  methods:{
    backTopClick(){
      this.$refs.scroll.aa(0,0,2000)
      // console.log("我是混入的回到顶部")
    },
  }
}
