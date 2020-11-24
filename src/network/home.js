import {request} from "./request";

export function getHomeMultidata() {
  return request({
    url:"/home/multidata"
  })
}
export function getHomeGoods(type,page) {
  return request({
    url:"/home/data",
    params:{
      type,
      page
    }
  })
}


// const totalNumbers = []
//
// const nums = [20,11,222]
//
// // for (let n of nums) {
// //   totalNumbers.push(n)
// // }
// //将数组一个个拆分 放进去
// totalNumbers.push(...nums)
